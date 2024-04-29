<?php

function createMessage($event) {
    $message = sprintf(
        "Timestamp: %s, Device ID: %s, Event: %s, Location: (%s, %s)\n",
        date("Y-m-d H:i:s", $event['timestamp']),
        $event['device.id'],
        $event['event.code'],
        $event['position.latitude'],
        $event['position.longitude']
    );
    return $message;
}