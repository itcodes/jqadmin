<?php
$data['status'] = 200;
$data['msg'] ="更新成功";
$data['url'] = "";
$data['data'] = ["name"=>"paco","url"=>"jqcool.net"];
echo header("content-type:text/html; charset=utf-8");
echo json_encode($data);
