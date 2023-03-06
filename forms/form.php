<?php
$comm = $_POST['comm'];

$newList = file_get_contents($_SERVER['DOCUMENT_ROOT']. '/comments.txt');
$data = date("d.m.y H:i:s");
file_put_contents( $_SERVER['DOCUMENT_ROOT'] .'/comments.txt', "Заявка от: $data \n$comm \n$newList");

header('Location: /8_mar_2023');