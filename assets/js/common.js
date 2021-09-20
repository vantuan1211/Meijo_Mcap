$(function () {
  function d() {
    f.cloneSource(), f.smoothScroll(), f.headerToggle(), f.headerModal(), f.headerLocation(), f.localnavToggle(), f.accordion(), f.dragscroll(), f.imgToBg(), f.boxTable(), f.feature(), f.pickupSlider(), f.eventSlider(), f.bannerSlider(), f.easyTab(), f.tabColumn(), f.h1TextSizeChange(), f.pagenavEllipse(), f.newsList(), f.newsListTab(), f.newsPager(), f.resize(), f.iPhoneMenubar(), f.pulldown(), f.matchHeightList(), f.topVideoYoutube(), f.topVideo(), f.topVideoLogo()
  }
  var f = {},
    c = {
      window: $(window),
      html: $("html"),
      body: $("body"),
      document: $(".l-document")
    },
    b = {
      winW: c.window.width() || window.innerWidth,
      winH: c.window.height() || window.innerHeight,
      winHMax: c.window.height() || window.innerHeight,
      docW: c.document.outerWidth(),
      docH: c.document.outerHeight(),
      scrollT: 0,
      scrollL: 0,
      breakPoint: 992,
      spFlg: !1,
      reiszeTimer: "",
      scrollTimer: !1,
      queryObj: {}
    };
  f.checkScroll = function () {
    b.scrollT > 90 ? c.body.addClass("js-status-scrolled") : c.body.removeClass("js-status-scrolled")
  }, f.smoothScroll = function () {
    var a = 50;
    $("a[href^=#]").not('.leaflet-control-zoom-in, .leaflet-control-zoom-out').click(function () {
      b.winW >= b.breakPoint && (a = $("header.l-header").height()), $(this).closest(".m-box_tab").length > 0 && (a = 0);
      var j = 400,
        g = $(this).attr("href"),
        h = $("#" == g || "" == g ? "html" : g),
        k = h.offset().top - a;
      return $("body, html").animate({
        scrollTop: k
      }, j, "swing"), !1
    })
  }, f.cloneSource = function () {
    var a = $('.js-clone-source'),
        $el = a.find(' > li:lt(2) figure');
        $el.each(function(){
          var _src= $(this).find('img').attr('src');
          _html = '<span><span class="js-action-imgtobg" data-remove="false"><img src="' + _src + '" alt=""></span></span> <span><span class="js-action-imgtobg"><img src="' + _src + '" alt=""></span></span>';
          $(this).empty();
          $(this).append(_html)
        });
        $el.addClass('cloned');

  }, f.checkVisible = function () {
    var a = $(".js-action-visible");
    a.each(function () {
      if ($(this).offset().top < Math.ceil(0.8 * b.winH) + b.scrollT || b.winH + b.scrollT >= b.docH - 50) {
        var e = $(this);
        e.removeClass("js-action-visible").addClass("js-status-visible"), e.attr("data-visible") && setTimeout(function () {
          e.addClass("js-status-visibled")
        }, e.attr("data-visible")), e.hasClass("js-action-visible-blend") && setTimeout(function () {
          e.removeClass("js-action-visible-blend").addClass("js-status-visible-blend")
        }, 500)
      }
    })
  }, f.headerToggle = function () {
    var a = $(".js-action-headertoggle");
    a.off("click").on("click.exceptHeaderModal", function () {
      c.body.toggleClass("js-status-header")
    })
  }, f.headerModal = function () {
    function a() {
      c.body.removeClass("js-status-headermodal").removeAttr("data-headermodal")
    }
    var h = $(".js-action-headermodal"),
      g = $(".js-action-headermodal-close");
    h.off("click").on("click", function () {
      var e = $(this).attr("data-headermodal");
      "more" === e && b.spFlg ? c.body.removeClass("js-status-headermodal").removeAttr("data-headermodal") : c.body.hasClass("js-status-headermodal") && c.body.attr("data-headermodal") === e ? c.body.removeClass("js-status-headermodal") : c.body.addClass("js-status-headermodal").attr("data-headermodal", e)
    }), g.off("click").on("click.exceptHeaderModal", function () {
      a()
    })
  }, f.headerLocation = function () {
    var a = $(".l-header_gnav_list_item");
    if (a.length) {
      var g = location.pathname.split("/")[1];
      "english" == g && (g = location.pathname.split("/")[2]), $(a.selector + "-" + g).addClass("js-status-active")
    }
  }, f.localnavToggle = function () {
    var a = $(".js-action-localnav");
    a.each(function () {
      var g = $(this).find(".js-action-localnav-btn"),
        h = $(this).find(".js-action-localnav-target");
      g.click(function () {
        c.body.hasClass("js-status-localnav") ? (c.body.removeClass("js-status-localnav"), h.slideUp()) : (c.body.addClass("js-status-localnav"), h.slideDown())
      })
    })
  }, f.accordion = function () {
    var a = $(".js-action-accordion");
    a.each(function () {
      var h = $(this),
        j = h.find(".js-action-accordion-title").eq(0),
        g = h.find(".js-action-accordion-body").eq(0);
      j.off(".exceptHeaderModal").on("click.exceptHeaderModal", function () {
        var k = h.attr("data-device"),
          i = g.find(".js-action-accordion-title"),
          l = g.find(".js-action-accordion-body");
        return void 0 === k || "sp" === k && b.spFlg || "pc" === k && !b.spFlg ? ($(this).hasClass("js-status-active") ? ($(this).removeClass("js-status-active"), i.removeClass("js-status-active"), l.removeClass("js-status-active"), g.removeClass("js-status-active")) : ($(this).addClass("js-status-active"), g.addClass("js-status-active")), !1) : void 0
      })
    })
  }, f.feature = function () {
    var a = $(".js-action-feature");
    a.each(function () {
      function j(e) {
        g.find("li").removeClass("js-status-active").filter(":not(.bx-clone)").eq(e).addClass("js-status-active"), 0 === e ? g.find("li:not(.bx-clone)").eq(m - 1).next().addClass("js-status-active") : e === m - 1 && g.find("li:not(.bx-clone)").eq(0).prev().addClass("js-status-active"), l.stopAuto(), setTimeout(function () {
          l.startAuto()
        }, 30)
      }
      var l, h = $(this),
        g = $(this).find(".js-action-feature-slider"),
        k = $(this).find(".js-action-feature-controll"),
        m = g.find("li").length,
        p = "";
      h.hasClass("js-action-feature-mresearch") && (p = "mresearch"), 1 >= m ? h.addClass("js-status-alone") : ("mresearch" != p && g.find("li").each(function (e) {
        $(this).find("a").attr("data-index", "0" + (e + 1) + ".")
      }), l = g.bxSlider({
        mode: "horizontal",
        auto: !0,
        pause: 5000,
        touchEnabled: false,
        minSlides: 2,
        maxSlides: 2,
        nextText: "",
        prevText: "",
        onSliderLoad: function (i) {
          setTimeout(function () {
            j(i)
          }, 30)
        },
        onSliderResize: function (i) {
          j(i)
        },
        onSlideBefore: function (q, o, n) {
          j(n)
        },
        onSlideAfter: function () {}
      }), k.off("click").on("click.exceptHeaderModal", "a", function () {
        $(this).hasClass("prev") ? l.goToPrevSlide() : $(this).hasClass("next") && l.goToNextSlide()
      }))
    })
  }, f.pickupSlider = function () {
    var a = $(".js-action-pickupslider");
    a.each(function () {
      var j, k = $(this),
        h = $(this).find(".js-action-pickupslider-slider"),
        g = h.find("li").length;
      1 >= g ? k.addClass("js-status-alone") : (3 >= g && k.addClass("js-status-pcnoslide"), j = h.bxSlider({
        mode: "horizontal",
        auto: !0,
        pause: 5000,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 312,
        touchEnabled: false,
        nextText: "",
        prevText: ""
      }))
    })
  }, f.eventSlider = function () {
    var a = $(".js-action-eventslider");
    a.each(function () {
      var j, k = $(this),
        h = $(this).find(".js-action-eventslider-slider"),
        g = h.find("li").length;
      1 >= g ? k.addClass("js-status-alone") : (2 >= g && k.addClass("js-status-pcnoslide"), j = h.bxSlider({
        mode: "horizontal",
        auto: !1,
        pause: 5000,
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 265,
        touchEnabled: false,
        nextText: "",
        prevText: "",
        pager: !1,
        infiniteLoop: !1
      }))
    })
  }, f.bannerSlider = function () {
    var a = $(".js-action-bannerslider");
    a.each(function () {
      var j, l = $(this),
        h = $(this).find(".js-action-bannerslider-slider"),
        g = h.find("li").length;
      if (1 >= g) {
        l.addClass("js-status-alone")
      } else {
        j = h.bxSlider({
          mode: "horizontal",
          auto: !1,
          pause: 5000,
          minSlides: 1,
          maxSlides: 4,
          slideWidth: 264,
          touchEnabled: true,
          nextText: '<i class="icon-arrow-right_02"></i>',
          prevText: '<i class="icon-arrow-left_02"></i>',
          pager: !1
        });
        var k = l.width(),
          m = l.find(".bx-wrapper").width();
        k > m ? l.addClass("js-status-full") : 4 == g && 1056 == k && l.addClass("js-status-full")
      }
    })
  }, f.dragscroll = function () {
    var a = $(".js-action-dragscroll");
    a.each(function () {
      var h = !1,
        j = 0,
        g = 0;
      $(this).off("mousedown").on("mousedown", function (e) {
        return h = !0, j = e.pageX, g = e.pageX, !1
      }), $(this).off("mousemove").on("mousemove", function (e) {
        if (h) {
          g = e.pageX;
          var i = g - j;
          $(this).scrollLeft($(this).scrollLeft() - i), j = g
        }
      }), $(this).off("mouseup").on("mouseup", function () {
        h = !1
      }), $(this).off("click").on("click.exceptHeaderModal", "a", function () {
        location.href = $(this).attr("href")
      })
    })
  }, f.imgToBg = function () {
    var a = $(".js-action-imgtobg");
    a.each(function () {
      var g = $(this).find("img"),
        h = g.attr("src");
      "false" !== $(this).attr("data-remove") && g.remove(), $(this).css({
        backgroundImage: "url(" + h + ")"
      })
    })
  }, f.boxTable = function () {
    var a = $(".js-action-boxtable");
    a.each(function () {
      var e = $(this).find(".m-box_table_item").length;
      $(this).addClass("m-box_table-col" + e)
    })
  }, f.easyTab = function () {
    var a = $(".easyTabs");
    a.each(function () {
      function h() {
        setTimeout(function () {
          k.find("div").removeClass("js-status-active").filter(".active").addClass("js-status-active")
        }, 30)
      }
      var k = $(this);
      var g = $('.js-month-change').data('currentmonth');
      if (g <= 3) {
        g = parseInt(g) + parseInt(9)
      } else {
        g = parseInt(g) - parseInt(3)
      }
      var j;
      var i = /\/event\/$/;
      if (i.test(location.pathname)) {
        j = ":nth-child(" + g + ")"
      } else {
        j = ":first-child";
        var i = /\/diploma.html$/;
          if (i.test(location.pathname)) {
          j = "li.active"
        } else {
          j = ":first-child"
        }
      }
      k.easytabs({
        animate: !1,
        tabs: ".m-box_tab > ul > li",
        defaultTab: j
      }), h(), k.off("easytabs:after").on("easytabs:after", function () {
        h()
      })
    })
  }, f.tabColumn = function () {
    var a = $(".js-action-tabcolumn");
    a.each(function () {
      var e = $(this).find("li").length;
      $(this).attr("data-cols", e)
    })
  }, f.h1TextSizeChange = function () {
    var a = $(".m-box_title_hdg");
    a.each(function () {
      var e = $(this).text().length;
      e > 76 ? $(this).addClass("js-status-fs-xxs") : e > 41 ? $(this).addClass("js-status-fs-xs") : e > 20 && $(this).addClass("js-status-fs-s")
    })
  }, f.pagenavEllipse = function () {
    var a = $(".js-action-pagenavellipse");
    a.find("p > span").each(function () {
      var g = $(this).text(),
        h = g.length;
      $(this).attr("data-originaltext", g), h > 14 && $(this).text(g.substr(0, 13) + "...")
    })
  }, f.newsList = function () {
    var a = $(".js-action-news");
    a.each(function () {
      function j() {
        var e = l.find("> li").length;
        if (m == 0) {
          if ($this.hasClass('p-top_features_list')) {
            (k * 1 + 3) >= e && (h.slideUp().remove(), g.fadeIn())
          } else {
            k * 1 >= e && (h.slideUp().remove(), g.fadeIn())
          }
        } else {
          if ($this.hasClass('p-top_features_list')) {
            (k * m + 3) >= e && (h.slideUp().remove(), g.fadeIn())
          } else {
            k * m >= e && (h.slideUp().remove(), g.fadeIn())
          }
        }
      }
      var l = $(this).find(".js-action-news-list"),
        h = $(this).find(".js-action-news-more"),
        g = $(this).find(".js-action-news-link"),
        k = $(this).attr("data-number") || 5,
        $this = $(this);
      if ($this.hasClass('p-top_meijomag_list')) {
        var m = 2;
      } else if($this.hasClass('p-top_features_list')) {
        var m = 0;
      } else {
        var m = 1;
      }
      j(), h.click(function () {
        if ($(this).closest('.js-action-news').hasClass('p-top_features_list')) {
          m += 1, l.find("> li:lt(" + (k * m + 3) + ")").slideDown(), j()
        } else if ($(this).closest('.js-action-news').hasClass('p-top_meijomag_list')) {
          m += 1, l.find("> li:lt(" + (k * m + 2) + ")").slideDown(), j()
        } else {
          m += 1, l.find("> li:lt(" + k * m + ")").slideDown(), j()
        }
      })
    })
  }, f.newsListTab = function () {
    var a = $(".js-action-news-tab");
    a.each(function () {
      function j() {
        var e = l.find("> li").length;
        k * m >= e && (h.slideUp().remove(), g.fadeIn())
      }
      var l = $(this).find(".js-action-news-list"),
        h = $(this).find(".js-action-news-more"),
        g = $(this).find(".js-action-news-link"),
        k = $(this).attr("data-number") || 5,
        m = 1;
      j(), h.click(function () {
        m += 1, l.find("> li:lt(" + k * m + ")").slideDown(), j()
      })
    })
  }, f.newsPager = function () {
    $(".js-pagination").pagination({
      element: "> ul > li",
      prevText: "PREV",
      nextText: "NEXT",
      ellipsisText: "…",
      viewNum: 15,
      pagerNum: 5,
      ellipsis: !0,
      linkInvalid: !0,
      goTop: !1,
      firstLastNav: !1,
      prevNextNav: !0
    });
    $(window).on('popstate', function() {
      $(".js-pagination").pagination({
        element: "> ul > li",
        prevText: "PREV",
        nextText: "NEXT",
        ellipsisText: "…",
        viewNum: 15,
        pagerNum: 5,
        ellipsis: !0,
        linkInvalid: !0,
        goTop: !1,
        firstLastNav: !1,
        prevNextNav: !0
      });
    });
  }, f.pulldown = function () {
    function a(k, l) {
      var j = k.find("option:selected"),
        h = j.attr("data-href");
      k.prev(".js-action-pulldown-txt").text(j.text()), k.blur(), l && void 0 !== h && "" !== h && (location.href = h)
    }
    var g = $(".js-action-pulldown");
    $(".js-action-pulldown-txt");
    g.each(function () {
      a($(this).find("select"))
    }), g.off("change").on("change", "select", function () {
      a($(this), !0)
    })
  }, f.topVideo = function (g) {
    var j, a = $(".js-action-topvideo"),
      h = a.find("iframe"),
      k = 0.5625,
      l = g ? 100 : 30;
    a.length && (b.winW < b.breakPoint ? a.css({
      height: b.winH - 50 - 50 - 72
    }) : a.css({
      height: b.winH - 90 - 52
    }), setTimeout(function () {
      j = a.innerHeight() / a.innerWidth(), h.length && (k > j ? h.css({
        // top: "50%",
        top: 'auto',
        bottom: '0',
        left: "50%",
        width: "100%",
        height: b.winW * k,
        transform: "translateX(-50%)"
      }) : h.css({
        top: "50%",
        // bottom: 'auto',
        left: "50%",
        width: b.winH / k,
        height: "100%",
        transform: "translate(-50%, -50%)"
      }))
    }, l))
  }, f.topVideoLogo = function () {
    var a = $(".js-action-topvideo");
    a.length && a.addClass("js-status-fadeout")
  }, f.topVideoYoutube = function () {
    function q() {
      var l = navigator.userAgent.toLowerCase();
      if (null !== l.match(/iphone/i) || null !== l.match(/ipod/i) || null !== l.match(/ipad/i)) {
        var n = l.match(/os (\d+)_(\d+)_?(\d+)?/),
          a = parseInt(n[1], 10);
        return a
      }
    }

    function j() {
      var ytPlayer = new YT.Player("video", {
        width: 480,
        height: 270,
        videoId: m,
        playerVars: {
          controls: 0,
          disablekb: 0,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          onReady: p,
          onStateChange: r
        }
      });

      $('#mute').on('click', function() {
        $('#mute').toggleClass('is-mute');
        if(!$('#mute').hasClass('is-mute')) {
          ytPlayer.unMute();
          ytPlayer.setVolume(100);
        } else {
          ytPlayer.mute();
        }
      });
    }

    function p(a) {
      a.target.mute(), a.target.playVideo(), f.topVideo(!0)
    }

    function r(a) {
      a.data === YT.PlayerState.ENDED && a.target.playVideo()
    }
    var e = $(".js-action-topvideo");
    if (e.length) {
      if (q() < 10) {
        e.find("#video").addClass("js-status-ios9")
      } else {
        var g = document.createElement("script"),
          h = document.getElementsByTagName("script")[0],
          k = ["1DOzBNQ2UpM", "DzVrVFGO84w"],
          m = k[Math.floor(Math.random() * k.length)];
        g.src = "https://www.youtube.com/iframe_api", h.parentNode.insertBefore(g, h), window.onYouTubeIframeAPIReady = j
      }
    }
  }, f.scroll = function () {
    b.scrollT = c.window.scrollTop(), b.scrollL = c.window.scrollLeft(), b.docH = c.document.outerHeight(), f.checkScroll(), f.checkVisible()
  }, f.resize = function () {
    b.winW = c.window.width() || window.innerWidth, b.winH = c.window.height() || window.innerHeight, b.docW = c.document.outerWidth(), b.docH = c.document.outerHeight();
    var a = window.innerHeight;
    a < b.winHMax ? c.body.removeClass("js-status-nomenubar") : (b.winHMax = a, c.body.addClass("js-status-nomenubar")), b.spFlg = b.winW >= b.breakPoint ? !1 : !0, f.topVideo()
  }, f.iPhoneMenubar = function () {
    var a = $('<div style="position:fixed;height:100vh;"></div>').appendTo(c.document);
    b.winHMax = a.outerHeight(), a.remove()
  }, f.matchHeightList = function () {
    $(".js-match_height").matchHeight(), $(".m-list_common-link > ul > li > a").matchHeight(), $(".p-top_mresearch_list > li").matchHeight()
  }, d(), window.onpageshow = function (a) {
    a.persisted && d()
  }, c.window.load(function () {
    c.body.addClass("js-status-loaded"), f.scroll(), f.checkVisible(), f.resize()
  }), c.window.resize("load", function () {
    b.resizeTimer !== !1 && clearTimeout(b.resizeTimer), b.resizeTimer = setTimeout(function () {
      f.resize()
    }, 100)
  }), c.window.on("scroll touchmove", function () {
    f.scroll()
  })
});