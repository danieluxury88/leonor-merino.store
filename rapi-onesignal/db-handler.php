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