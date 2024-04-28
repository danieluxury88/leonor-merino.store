<?php
// Database setup and connection
function getDB() {
    $db = new PDO('sqlite:/path_to_your_database/device_events.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("CREATE TABLE IF NOT EXISTS device_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        device_id INTEGER NOT NULL,
        device_name TEXT,
        event_code TEXT,
        ignition_status BOOLEAN,
        latitude REAL,
        longitude REAL,
        timestamp INTEGER,
        server_timestamp REAL
    )");
    return $db;
}

// Ensure that this script only accepts POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    die('HTTP Method Not Allowed');
}

// Read the JSON body from the HTTP POST request
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

// Check if the data was properly decoded
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    die('Invalid JSON');
}

// Function to insert event into the database
function insertEvent($event, $db) {
    $stmt = $db->prepare("INSERT INTO device_events (device_id, device_name, event_code, ignition_status, latitude, longitude, timestamp, server_timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $event['device.id'],
        $event['device.name'],
        $event['event.code'],
        $event['engine.ignition.status'],
        $event['position.latitude'],
        $event['position.longitude'],
        $event['timestamp'],
        $event['server.timestamp']
    ]);
}

// Function to process each device event
function processDeviceEvent($event, $db) {
    // Log and insert into database
    error_log("Received event for device ID: " . $event['device.id'] . " with event code: " . $event['event.code']);
    // insertEvent($event, $db);
}

// Function to process the received data
function processWebhookData($items, $db) {
    foreach ($items as $item) {
        processDeviceEvent($item, $db);
    }
}

// Main
// $db = getDB(); // Initialize the database connection
if (is_array($data)) {
    processWebhookData($data, $db);
    http_response_code(200); // OK
    echo "Data processed successfully";
} else {
    http_response_code(422); // Unprocessable Entity
    echo "Invalid data format";
}

?>
