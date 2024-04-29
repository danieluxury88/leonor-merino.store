<?php

function createMessage($event) {
    if ($event['event.code']!= 'acc on') {
        return null;
    }
    $message = sprintf(
        "Ignition ON: Timestamp: %s, Device ID: %s, Event: %s, Location: (%s, %s)\n",
        date("Y-m-d H:i:s", $event['timestamp']),
        $event['device.id'],
        $event['event.code'],
        $event['position.latitude'],
        $event['position.longitude']
    );
    return $message;
}