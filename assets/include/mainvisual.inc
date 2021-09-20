<div class="m-box_title<?php if($academy != '') echo ' m-box_title-academy'; if($nobgFlg) echo ' m-box_title-nobg'; if($headerBigFlg) echo ' m-box_title-big'; ?>">
<div class="m-box_title_inner">
<h1 class="m-box_title_hdg"><?php if($subtitle != '') echo '<span>' . $subtitle . '</span>'; echo $title; ?></h1>
<?php if($lead != '') echo '<p class="m-box_title_lead">'. $lead . '</p>'; ?>
<?php if($academy != '') echo '<p class="m-box_title_logo"><img src="/assets/images/logo-academics-' . $academy . '02.svg" alt="" class="m-box_title_logo_text"><img src="/assets/images/logo-symbolmark-' . $academy . '.svg" alt="" class="m-box_title_logo_logo"></p>'; ?>
</div>
<div class="m-box_title_bg b-bg-main"></div>
</div>