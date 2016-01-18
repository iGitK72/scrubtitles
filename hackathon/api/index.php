<?php
/**
 *  Configure directories and define main classes
 *  siteconfig contains debug info
 */
define( 'DS', DIRECTORY_SEPARATOR );
define( 'ROOT', dirname(__FILE__) );
define( 'DOCROOT', dirname(__FILE__) . DS  );
define( 'APIROOT', dirname(__FILE__) . DS .'api' . DS );


$src_video[0] = "http://stm.dam.digizuite.dk/dmm3bwsv3/372_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885493452760000";
$src_video[1] = "http://stm.dam.digizuite.dk/dmm3bwsv3/306_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885491307190000";
$src_video[2] = "http://stm.dam.digizuite.dk/dmm3bwsv3/355_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885492626700000";
$src_video[3] = "http://stm.dam.digizuite.dk/dmm3bwsv3/362_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885493035970000";

$src_type = "video/mp4";
$src_subtitles = "subtitles.vtt";
$src_kind = "subtitles";
$src_srclang = "en";
$src_label = "English";
$returnflag = true;

$i = rand(0,3);
echo $i;
	

	$returndata = array (
							'src_video' 				=> $src_video[0],
							'src_type' 					=> $src_type,
							'src_subtitles' 			=> $src_subtitles,
							'src_kind' 					=> $src_kind,
							'src_srclang' 				=> $src_srclang,
							'src_label' 				=> $src_label,
							'bool_flag' 				=> $returnflag
						);
	//echo json_encode($returndata);
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="../apple-touch-icon" href="../apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="../css/normalize.css">
        <link rel="stylesheet" href="../css/main.css">
        <!-- temp styling (included in css later on -->
      	<style type="text/css">
        	video {
          	width: 100vw;
        	  height: 100vh;
        	  position: absolute;
            bottom: 0;
        	}
        	body {
          	background-color: black;
          	overflow: hidden;
          	box-sizing: border-box;
        	}	
      	</style>
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
        
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <p>CPHackathon 2016 - Politician Mashup</p>
        
        <video id="video" controls="true" autoplay="1" muted />
          <source src="
		  http://stm.dam.digizuite.dk/dmm3bwsv3/372_10032_10001_1_2_0_6e5d6f10-e316-43e4-8fef-e33d36336140.mp4?635885556265320000" type="video/mp4">
          <track label="Funny" kind="subtitles" srclang="en" src="subtitles/romance.vtt" default>
          
        </video>
<div id="horror">
</div>		

<div id="romance">
</div>		
<div id="comedy">
<li>
class=start html
end
text
</li>
foreach (array of li values)
track.addCue(new VTTCue(div.li1.start, div.li1.end, "div.li1.text"));
endforeach;
<li>
start
end
text
</li>

</div>		
		
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/jquery.touchSwipe.js"></script>
        <script src="../js/vendor/shake.js"></script>
        <script src="../js/plugins.js"></script>
        <script src="js/main.js"></script>

    </body>
	
	
</html>
