<?php
// Function to log events to a file

function logToFile($logMessage) {
    // Append log message to a file
    file_put_contents("events_log.txt", $logMessage, FILE_APPEND);
}

function logEvent($event) {
    $logMessage = sprintf(
        "Timestamp: %s, Device ID: %s, Event: %s, Location: (%s, %s)\n",
        date("Y-m-d H:i:s", $event['timestamp']),
        $event['device.id'],
        $event['event.code'],
        $event['position.latitude'],
        $event['position.longitude']
    );
    logToFile($logMessage);
}

function getExternalDeviceId($deviceId) {
    $deviceMap = [
        '5086284' => '1723554943',
    ];
    return $deviceMap[$deviceId];
}