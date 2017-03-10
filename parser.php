<?php
header('Access-Control-Allow-Origin: *');
$url = $_POST['request'];

$cURL = curl_init();

curl_setopt($cURL, CURLOPT_URL, $url);
curl_setopt($cURL, CURLOPT_HTTPGET, true);

curl_setopt($cURL, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Accept: application/json'
));

$result = curl_exec($cURL);

curl_close($cURL);

echo json_encode($cURL);

?>