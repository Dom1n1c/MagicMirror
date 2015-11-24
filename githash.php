<?php
	exec('git pull');
	$output = exec('git rev-parse HEAD');	
	echo json_encode(array('gitHash'=>trim($output)));