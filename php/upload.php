<?php
$msg['status'] =200;
$msg['url'] = "images/upload.jpg";
echo header("content-type:text/html; charset=utf-8");
echo json_encode($msg);
