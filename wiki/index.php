<?php
    ini_set("display_errors",1);
	error_reporting(E_ALL);
	// header("Content-type: application/json; charset=UTF-8");
	
	
	$json_data = file_get_contents('donnees_avatar.json');
$decode_data = json_decode($json_data);

// print_r ($decode_data);
// foreach($decode_data as $key=>$value){
// }
	
	if (isset($_POST['textboxLogin']) && $_POST['textboxLogin'] != "" && isset($_POST['textboxPassword']) && $_POST['textboxPassword'] != "" )
	{
		$strLogin = $_POST['textboxLogin'];
	}
	else
	{
		echo ('<form action="index.php" method="POST"><div class="contenuident">
		<p>Votre identifiant</p>
		<span></span>
		<input type="text" id="textboxLogin" name="textboxLogin" value="" class="champident">
		<p>Votre mot de passe</p>
		<span data-children-count="1"><input type="password" id="textboxPassword" name="textboxPassword" class="champident" value="" ></span>
		<p><input type="submit" class="boutonvalider" value="VALIDER"></p>
		<table class="infos-ident">
			<tbody><tr>
			
			</tr>
		</tbody></table>
		<div id="divAlerte" class="erreurident">Veuillez vous connecter<br></div>
	<span style="></span></div></form>');
	}
	
	
	?>
	