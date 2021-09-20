<link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
<link href="/assets/css/common.css" rel="stylesheet">
<?php
	$category_array = array('about', 'academics', 'career', 'international', 'campus', 'research', 'social', 'library', 'itc', 'sp', 'nagoyadome', 'english');
	$url_category = explode('/', $_SERVER['REQUEST_URI']);

	if (is_array($url_category) && count($url_category) >= 2) {
		if (in_array($url_category[1], $category_array)) {
			echo '<link href="/assets/css/' . $url_category[1] . '.css" rel="stylesheet">' . "\n";
		}
	}
?>
