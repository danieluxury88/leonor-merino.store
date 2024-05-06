<?php
require 'config.php';

function sendPushNotification($message, $userId, $url) {
    $content = array(
        "en" => $message
    );

    $fields = array(
        'app_id' => ONESIGNAL_APP_ID,
        'include_external_user_ids' => array($userId),
        'data' => array("foo" => "bar"),
        'contents' => $content,
        'url' => 'https://linkhomeecuador.com/linkhome/devgps/rapitrack-front/'
    );

    $fields = json_encode($fields);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
        'Authorization: Basic ' . ONESIGNAL_API_KEY
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
