<?php
require_once 'functions.php';
// Define a function to handle events
function handleEvent($data) {
    logToFile('hola');
    echo "Handling event with data: " . json_encode($data);
}
