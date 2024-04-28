<?php
// Webhook URL
// $url = 'https://leonor-merino.store/rapi-onesignal/test-event.php';
$url = 'https://leonor-merino.store/rapi-onesignal/handle-event.php';

// Sample JSON payload
$data = [
    [
        "channel.id" => 1149510,
        "device.id" => 5086284,
        "device.name" => "mauricio",
        "device.type.id" => 647,
        "engine.ignition.status" => true,
        "event.code" => "acc on",
        "gnss.status" => true,
        "ident" => "868166053537775",
        "peer" => "200.85.83.34:18358",
        "position.direction" => 142.22,
        "position.latitude" => -0.258853,
        "position.longitude" => -78.535424,
        "position.speed" => 0,
        "position.valid" => true,
        "protocol.id" => 122,
        "server.timestamp" => 1714254339.567898,
        "timestamp" => 1714254337,
        "wialon.address" => "Calle El Pangui 1-162, Quito, Pichincha, Ecuador"
    ]
];

// Convert data to JSON format
$jsonPayload = json_encode($data);

// Prepare cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonPayload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($jsonPayload))
);

// Execute cURL
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Output result
echo "Response code: " . $httpCode . "\n";
echo "Response body: " . $result . "\n";
?>
