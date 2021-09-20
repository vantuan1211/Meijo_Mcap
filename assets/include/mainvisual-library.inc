<div class="m-box_title m-box_title-library">
	<div class="m-box_title-library_schedule">
		<div class="l-contents">
			<div class="l-contents-thin">
				<div class="m-box_title-library_schedule_head">
					<h1>附属図書館</h1>
					<p><span>-</span>の開館時間</p>
				</div>
				<div class="m-box_title-library_schedule_list">
					<div class="m-box_title-library_schedule_item">
						<p>天白本館<span>-</span></p>
					</div>
					<div class="m-box_title-library_schedule_item">
						<p>ナゴヤドーム前<span>-</span></p>
					</div>
					<div class="m-box_title-library_schedule_item">
						<p>薬学部分館<span>-</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="m-box_title-library_search">
		<div class="l-contents">
			<div class="l-contents-thin">
				<div class="m-box_title-library_search_inner">
					<div id="easyTabs" class="easyTabs">
						<div class="m-box_tab js-action-tabcolumn">
							<ul>
								<li><a href="#collection">蔵書検索</a></li>
								<li><a href="#electronic">電子ジャーナル・電子ブック</a></li>
								<li><a href="#paper">論文記事検索</a></li>
							</ul>
						</div>
						<div id="collection" class="m-box_title-library_search_inner_item">
							<form id="meijo-u" name="meijo-u" method="get" action="http://library.meijo-u.ac.jp/webopac/ufirdi.do" target="_blank" class="m-form_search">
								<input type="hidden" name="ufi_target" value="ctlsrh" />
								<input type="hidden" name="sortkey" value="syear,sauth" />
								<input type="hidden" name="sorttype" value="DESC" />
								<input type="hidden" name="ufi_locale" value="ja" />
								<input type="hidden" name="listcnt" value="10" />
								<input type="hidden" name="maxcnt" value="1000" />
								<input type="hidden" name="from" value="libopac.meijo-u.ac.jp" />
								<input type="text" name="words" class="keywords" />
								<button type="submit"><i class="icon-search_01"></i></button>
							</form>
							<p>※蔵書検索システム(OPAC)による図書館の所蔵検索：サービス利用時間 6:00～26:00</p>
							<div class="m-list_common">
								<ul>
									<li><a href="http://ufinity07.jp.fujitsu.com/meijo/?action=pages_view_main&amp;active_action=v3search_view_main_init&amp;block_id=295&amp;search_mode=detail" target="_blank">もっと詳しく調べる</a></li>
								</ul>
							</div>
						</div>
						<div id="electronic" class="m-box_title-library_search_inner_item">
							<form name="frmSimpleSearch" action="" onsubmit="return ebscoHostSearchGo(this);" method="get" target="_blank" class="m-form_search">
								<input class="keywords" name="ebscohostsearchtext" type="text" placeholder="タイトル、出版社、ISSN/ISBN等を入力" />
								<input id="ebscohostwindow" name="ebscohostwindow" type="hidden" value="1" />
								<input id="ebscohosturl" name="ebscohosturl" type="hidden" value="http://search.ebscohost.com/login.aspx?authtype=ip,guest&custid=ns020320&groupid=main&profile=eds&direct=true&site=eds-live&scope=site&type=44&db=edspub&mode=bool"/>
								<input id="ebscohostsearchsrc" name="ebscohostsearchsrc" type="hidden" value="db" />
								<input id="ebscohostsearchmode" name="ebscohostsearchmode" type="hidden" value="+" />
								<input id="ebscohostkeywords" name="ebscohostkeywords" type="hidden" value="" />
								<button type="submit"><i class="icon-search_01"></i></button>
							</form>
							<p>※名城大学附属図書館で契約中の電子ジャーナル・電子ブックの検索（学内閲覧可能）</p>
							<div class="m-list_common">
								<ul>
									<li><a href="/library/pdf/FTFuserguide2.pdf" target="_blank">ユーザーガイド</a></li>
								</ul>
							</div>
						</div>
						<div id="paper" class="m-box_title-library_search_inner_item">
							<form action="http://search.ebscohost.com/login.asp" method="get" target="_blank" accept-charset="UTF-8" class="m-form_search">
								<input type="hidden" name="direct" value="true" />
								<input type="hidden" name="site" value="eds-live" />
								<input type="hidden" name="scope" value="site" />
								<input type="hidden" name="type" value="1" />
								<input type="hidden" name="mode" value="and" />
								<input type="hidden" name="lang" value="ja" />
								<input type="hidden" name="authtype" value="ip,guest" />
								<input type="hidden" name="custid" value="ns020320" />
								<input type="hidden" name="groupid" value="main" />
								<input type="text" name="bquery" class="keywords" value="" />
								<button type="submit"><i class="icon-search_01"></i></button>
							</form>
							<p>※EBSCO Discovery Serviceの提供するウェブスケールディスカバリによる総括的な検索</p>
							<div class="m-list_common">
								<ul>
									<li><a href="/library/pdf/EDS_quick_guide.pdf" target="_blank">クイックガイド</a></li>
									<li><a href="/library/pdf/EDS_guide.pdf" target="_blank">ユーザーマニュアル</a></li>
								</ul>
							</div>
						</div>

					</div>
					<div class="m-box_title-library_search_inner_link">
						<ul>
							<li class="m-box_title-library_search_inner_link-big"><a href="http://ufinity07.jp.fujitsu.com/meijo/" target="_blank"><i class="icon-library_01"></i>蔵書検索</a></li>
							<li class="m-box_title-library_search_inner_link-big"><a href="http://ufinity07.jp.fujitsu.com/meijo/index.php?action=pages_view_main&active_action=v3search_view_main_init&block_id=296&tab_num=3" target="_blank"><i class="icon-kenkyu_01"></i>リポジトリ検索</a></li>

							<li><a href="/library/search/howto/"><i class="icon-device_01"></i>データベース</a></li>
							<li><a href="/library/search/ebook/index.html#journal"><i class="icon-news-event_01"></i>電子ジャーナル</a></li>
							<li><a href="/library/search/ebook/index.html#book"><i class="icon-pc_01"></i>電子ブック</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>



<!--	<div class="m-box_title_inner">-->
<!--		<h1 class="m-box_title_hdg"><span>附属図書館</span>附属図書館</h1>-->
<!--	</div>-->
	<div class="m-box_title_bg b-bg-main"></div>
</div>