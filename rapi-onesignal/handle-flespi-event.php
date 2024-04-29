<?php
require_once 'functions.php';

// Function to process each device event
function processDeviceEvent($event) {
    error_log("Received event for device ID: " . $event['device.id'] . " with event code: " . $event['event.code']);
    logEvent($event);
}

function processWebhookData($items) {
    foreach ($items as $item) {
        processDeviceEvent($item);
    }
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

if (is_array($data)) {
    processWebhookData($data);
    http_response_code(200); // OK
    echo "Data processed successfully";
} else {
    http_response_code(422); // Unprocessable Entity
    echo "Invalid data format";
}

?>
