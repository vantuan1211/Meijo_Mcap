<script src="/assets/js/libraries.js"></script>
<script src="/assets/js/common.js"></script>
<?php
	if (is_array($url_category) && count($url_category) >= 2) {
		if (in_array($url_category[1], $category_array)) {
			echo '<script src="/assets/js/' . $url_category[1] . '.js"></script>' . "\n";
		}
	}
?>
<script src="/assets/js/ga.js"></script>
<script language="JavaScript" type="text/javascript" src="//o.advg.jp/ojs?aid=6570&pid=1" charset="UTF-8"></script>
<noscript><iframe src="//o.advg.jp/oif?aid=6570&pid=1" width="1" height="1"></iframe></noscript>
<?php
	$url = $_SERVER['REQUEST_URI'];
	if (strstr($url,'english')==true) {
		echo '<script async src="https://cse.google.com/cse.js?cx=002002868988497249087:o-t-nzjrbpm"></script>' . "\n";
	} else {
		echo '<script async src="https://cse.google.com/cse.js?cx=002002868988497249087:s7bb5bexmyi"></script>' . "\n";
	}

	$educatorFlag = false;
	$url_category_last = end($url_category);
	$educator_array = array('educator.html', 'liberal_arts_educator.html');
	if ((isset($bodyID) && $bodyID == 'tc_intro') || in_array($url_category_last, $educator_array)) {
		$educatorFlag = true;
		if (count($url_category) >= 4) {
			if ($url_category[2] == 'sci_tech' && $url_category[3] == 'educator.html') {
				$educatorFlag = false;
			}
		}
	}
	if ($educatorFlag) {
		echo '<script src="/assets/js/displaySyllabus.js"></script>' . "\n";
	}
?>
