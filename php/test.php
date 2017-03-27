<?php
$msg['status'] = 200;
$msg['url'] = "";
$msg['msg'] ="出错啦";
echo header("content-type:text/html; charset=utf-8");
echo json_encode($msg);
