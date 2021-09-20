<?php if ($localnavPath != '') { ?>
<div class="m-box_pagenav js-action-localnav">
  <div class="m-box_pagenav_inner">
    <div class="m-box_pagenav_toggle">
      <button class="m-box_pagenav_toggle_btn js-action-localnav-btn">
        <i><i></i></i>
      </button>
    </div>
    <?php include($_SERVER['DOCUMENT_ROOT'] . $localnavPath); ?>
  </div>
</div>
<?php } ?>