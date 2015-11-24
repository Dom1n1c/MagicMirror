<?php


		//user agent is very necessary, otherwise some websites like google.com wont give zipped content
	    $opts = array(
	        'http'=>array(
	            'method'=>"GET",
	            'header'=>"Accept-Language: en-US,en;q=0.8rn" .
	                        "Accept-Encoding: gzip,deflate,sdchrn" .
	                        "Accept-Charset:UTF-8,*;q=0.5rn" .
	                        "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:19.0) Gecko/20100101 Firefox/19.0 FirePHP/0.4rn",
				"ignore_errors" => true	 //Fix problems getting data
	        ),
	        //Fixes problems in ssl 
		"ssl" => array(
			"verify_peer"=>false,
			"verify_peer_name"=>false
		)
	    );
		
	function get_url($url)
	{
	    
	    $context = stream_context_create($opts);
	    $content = file_get_contents($url ,false,$context); 
	     
	    //If http response header mentions that content is gzipped, then uncompress it
	    foreach($http_response_header as $c => $h)
	    {
	        if(stristr($h, 'content-encoding') and stristr($h, 'gzip'))
	        {
	            //Now lets uncompress the compressed data
	            $content = gzinflate( substr($content,10,-8) );
	        }
	    }
	     
	    return $content;
	}


	$url = $_GET['url'];
	echo get_url($url);
