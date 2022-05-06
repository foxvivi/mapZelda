<?php
    ini_set("display_errors",1);
	error_reporting(E_ALL);
	date_default_timezone_set('Europe/Paris');
	ini_set("max_execution_time",0);
	header("Content-type: text/html");
	header("Charset: UTF-8");
	
	$timestart=microtime(true);
	
	// zone 4
	// for ($x = 5; $x < 16; $x++)
	// {
		// for ($y = 0; $y < 16; $y++)
		// {
			// $strFile = "https://www.zeldadungeon.net/maps/botw/tiles/4/".$x."_".$y .".jpg";
			// $strFileName = "maps/botw/tiles/" . $x."_".$y .".jpg";
			
			// $file = file_get_contents($strFile);
			// $f=fopen($strFileName, 'wb');
			// fwrite( $f, $file);
			// fclose($f);
			// sleep(1);
		// }
	// }
	
	echo "start<br/>";
	// zone 5
	for ($x = 0; $x < 32; $x++)
	{
		for ($y = 0; $y < 32; $y++)
		{
			// $strFile = "https://www.zeldadungeon.net/maps/botw/tiles/5/".$x."_".$y .".jpg";
			// $strFileName = "maps/botw/tiles/5/" . $x."_".$y .".jpg";
			
			// $file = file_get_contents($strFile);
			// $f=fopen($strFileName, 'wb');
			// fwrite( $f, $file);
			// fclose($f);
			// sleep(1);
		}
	}
	$timeend=microtime(true);
	$time=$timeend-$timestart;
	$page_load_time = number_format($time, 3);
	echo "finish in " . $page_load_time . " sec";