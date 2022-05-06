<?php
	ini_set("display_errors",1);
	error_reporting(E_ALL);
	header("Content-type: application/json; charset=UTF-8");
	
	$strFile = "http://parisotandco.fr/zelda/wiki/api.php?format=json&action=parse&page=Follow%20the%20Sheikah%20Slate%2FMap";
	
	$json_data = file_get_contents('donnees_avatar.json');
$decode_data = json_decode($json_data);

// print_r ($decode_data);
// foreach($decode_data as $key=>$value){
// }

	// echo json_encode("no loggin");
	// echo '{"batchcomplete":"","query":{"userinfo":{"id":0,"name":"163.12.138.237","anon":""}}}';
	echo '{"batchcomplete":"","query":{"userinfo":{"id":20396,"name":"Foxkiki"}}}';
	
	