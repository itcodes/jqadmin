<?php
$msg['status'] =200;
if (isset($_GET['p'])) {
    $p = $_GET['p'];
} else {
    $p =1;
}

$data = [
    [ "id"=>1,  "url"=>"http://www.jqcool.net","switch"=>1, "title"=>"Online Program knowledge share and study platform"],
    [ "id"=>2,  "url"=>"http://www.baidu.com","switch"=>0, "title"=>"这是测试的数数据这是测试的数数据"],
    [ "id"=>3,  "url"=>"http://www.taobao.com", "switch"=>0,"title"=>"淘宝购物"],
    [ "id"=>4,  "url"=>"http://www.jqcool.net1", "switch"=>1,"title"=>"Online Program knowledge share and study platform2"],
    [ "id"=>5,  "url"=>"http://www.baidu.com1", "switch"=>0,"title"=>"这是测试的数数据2"],
    [ "id"=>6,  "url"=>"http://www.taobao.com1", "switch"=>1,"title"=>"淘宝购物2"],
];
$show =[];
for ($i=3*($p-1); $i<$p*3; $i++) {
    $show[]=$data[$i];
}
$msg['data']['list'] = $show;
$msg['data']['title']="测试数据";
$msg['pages'] = 2;
echo header("content-type:text/html; charset=utf-8");
echo json_encode($msg);
