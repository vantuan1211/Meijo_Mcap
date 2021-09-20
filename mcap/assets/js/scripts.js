/* -----------------------------------------------
Table of Contents (common js)
--------------------------------------------------
1. userAgent判別
2. URL判別
3. 設定
4. JSファイル読み込み時即実行(Execute JavaScript when the page loaded.)
5. DOM構築後実行(Execute JavaScript when the DOM is fully loaded.)
6. 画像など含めてページ読込み完了後に実行(Execute JavaScript when the Window Object is fully loaded.)
7. 動的コンテンツに対してイベントを設定
8. その他のイベントを設定
9. 関数(プラグイン)複数

// require jQuery JavaScript Library v3.4.1

(function($) {

/* ============================================================
 * defineFoundationVariable
 * ============================================================ */

/* ------------------------------------------------------------
 * [ userAgent ] http://www.useragentstring.com/pages/useragentstring.php
 * ------------------------------------------------------------ */
var ua = window.navigator.userAgent;
var appVer = window.navigator.appVersion;

//PC
var isIE = ua.indexOf('MSIE') != -1 || ua.indexOf('Trident') != -1;
var isIE6 = isIE && appVer.indexOf('MSIE 6') != -1;
var isIE7 = isIE && appVer.indexOf('MSIE 7.') != -1;
var isIE8 = isIE && ua.indexOf('Trident/4.') != -1;
var isIE9 = isIE && ua.indexOf('Trident/5.') != -1;
var isIE10 = isIE && ua.indexOf('Trident/6.') != -1;
var isIE11 = ua.indexOf('Trident/7.') != -1;

var isFirefox = ua.indexOf('Firefox') != -1;
var isChrome = ua.indexOf('Chrome') != -1;
var isSafari = ua.indexOf('Safari') != -1;

//Mobile (smartphone + tablet)
var isMobileSafari = ua.match(/iPhone|iPad|iPod/i) ? true : false;
var isMobileSafariTypeT = ua.match(/ipad/i) ? true : false;
var isMobileSafariTypeS = ua.match(/iphone|ipod/i) ? true : false;
var isAndroid = ua.indexOf('Android') != -1;
var isMobileAndroidTypeT = isAndroid && ua.indexOf('Mobile') == -1;
var isMobileAndroidTypeS = isAndroid && ua.indexOf('Mobile') != -1;
var isAndroidChrome = isChrome && isAndroid;
var isAndroidFirefox = isFirefox && isAndroid;
var isMobileFirefox = isFirefox && ua.indexOf('Mobile') != -1;
var isTabletFirefox = isFirefox && ua.indexOf('Tablet') != -1;

//PC or Mobile
var isTablet = isMobileSafariTypeT || isMobileAndroidTypeT || isTabletFirefox;
var isSmartPhone = isMobileSafariTypeS || isMobileAndroidTypeS || isMobileFirefox;
var isMobile = isTablet || isSmartPhone || isAndroidChrome || isAndroidFirefox;
var isPC = !isMobile;

/* ------------------------------------------------------------
 * [ Location ]
 * ------------------------------------------------------------ */
var locationHref = window.location.href, // http://www.google.com:80/search?q=demo#test
    locationProtocol = window.location.protocol, // http:
    locationHostname = window.location.hostname, // www.google.com
    locationHost = window.location.host, // www.google.com:80
    locationPort = window.location.port, // 80
    locationPath = window.location.pathname, // /search
    locationSearch = window.location.search, // ?q=demo
    locationHash = window.location.hash; // #test

/* ------------------------------------------------------------
 * [ motionConfig ]
 * ------------------------------------------------------------ */
var animateInterval = 500;

/* ============================================================
 * Execute JavaScript when the DOM is fully loaded.
 * ============================================================ */
$(document).ready(function() {
    var jsAnimation = new WOW({
        boxClass: 'js-animate',
        callback: function(el) {
            var $el = $(el);
            el.addEventListener('animationend', function(event) {
                $el.addClass('finished');
                runPlanesAniamtion();
            });
        }
    });
    jsAnimation.init();
    $('.box-review__lst').on('init reinit', function(event, slick, currentSlide, nextSlide) {
        setTimeout(function() {
            if (viewport().width >= 1024) {
                $('.js-mh-item').matchHeight();
                $('.js-mh-item01').matchHeight();
                $('.js-mh-item02').matchHeight();
                $('.js-mh-item03').matchHeight();
            } else {
                $('.js-mh-item').matchHeight({
                    remove: true
                });
                $('.js-mh-item01').matchHeight({
                    remove: true
                });
                $('.js-mh-item02').matchHeight({
                    remove: true
                });
                $('.js-mh-item03').matchHeight();
            }
            $('.js-mh-item04').matchHeight();
        }, 50);
    });
    $('.box-review__lst').slick({
        infinite: true,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        prevArrow: '<a class="slick-prev" href="javascript:void(0)"><img src="/mcap/assets/images/review-icn-prev01.png" alt=""></a>',
        nextArrow: '<a class="slick-next" href="javascript:void(0)"><img src="/mcap/assets/images/review-icn-next01.png" alt=""></a>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
    });
    smoothScroll({
        btn: 'a[href^=\\#]', // ボタン
        body: 'html,body', // スクロールする要素
        easing: 'easeOutExpo',
        speed: 1000, // アニメーション時間(ミリ秒)
        pageTopID: '#l-document', // ページトップIDへのスクロール時はURLハッシュを変更しない
    });
    if ($('.js-show-menu').get(0)) {
        $('.js-menu-animate').css({
            right: '-40%',
            opacity: '0'
        });
        $('.js-show-menu').click(function() {
            $('.js-menu-animate').css({
                right: '-40%',
                opacity: '0'
            });
            var $elMenu = $(this);
            $elMenu.toggleClass('active');
            $('html').toggleClass('overflow');
            if ($elMenu.hasClass('active')) {
                setTimeout(function() {
                    $('.js-menu-animate').each(function(i) {
                        var timeWait = 20 * i;
                        $(this).delay(timeWait).animate({
                            right: 0,
                            opacity: 1
                        }, 700, "easeOutCubic");
                    });
                }, 280);
            }
        });
        $('.header__nav-global a').click(function() {
            $('.js-show-menu').toggleClass('active');
            $('html').toggleClass('overflow');
            $('.js-menu-animate').css({
                right: '-40%',
                opacity: '0'
            });
        });
    }
}); //End -> ready method

var timer = false;
$(window).scroll(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        runPlanesAniamtion();
        if ($('.nav_backtotop').get(0)) {
            var $el = $('.nav_backtotop'),
                bodyHeight = $('body').height(),
                windowHeight = $(window).height(),
                windowTop = $(window).scrollTop();
            if (windowTop >= bodyHeight - 1.5 * windowHeight) {
                $el.addClass('active');
            } else {
                $el.removeClass('active');
            }
        }
    }, 50);
});

var timerResize = false;
$(window).resize(function() {
    if (timerResize !== false) {
        clearTimeout(timerResize);
    }
    timer = setTimeout(function() {
        setTimeout(function() {
            if (viewport().width >= 1024) {
                $('.js-mh-item').matchHeight();
                $('.js-mh-item01').matchHeight();
                $('.js-mh-item02').matchHeight();
                $('.js-mh-item03').matchHeight();
            } else {
                $('.js-mh-item').matchHeight({
                    remove: true
                });
                $('.js-mh-item01').matchHeight({
                    remove: true
                });
                $('.js-mh-item02').matchHeight({
                    remove: true
                });
                $('.js-mh-item03').matchHeight();
            }
            $('.js-mh-item04').matchHeight();
        }, 50);
    }, 150);
});

$(window).on('orientationchange', function() {
    setTimeout(function() {
        if (viewport().width >= 1024) {
            $('.js-mh-item').matchHeight();
            $('.js-mh-item01').matchHeight();
            $('.js-mh-item02').matchHeight();
            $('.js-mh-item03').matchHeight();
        } else {
            $('.js-mh-item').matchHeight({
                remove: true
            });
            $('.js-mh-item01').matchHeight({
                remove: true
            });
            $('.js-mh-item02').matchHeight({
                remove: true
            });
            $('.js-mh-item03').matchHeight();
        }
        $('.js-mh-item04').matchHeight();
    }, 250);
});

$(window).on('load', function() {
    $('.js-parallax-up').simpleParallax({
        delay: 1.2,
        scale: 1.15
    });
    $('.js-fullbg').jsFullBackground();
    if ($('.js-modal').get(0)) {
        $('.js-modal').magnificPopup({
            type: 'iframe',
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            },

            srcAction: 'iframe_src',
        });
    }
    $('body').css('overflow', 'hidden');
});

function runPlanesAniamtion() {
    $('.js-plan-animate').each(function() {
        if ($(this).hasClass('finished')) {
            var $this = $(this),
                viewportHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                elementOffsetTop = $this.offset().top,
                elementHeight = $this.height(),
                percentage;
            if (elementOffsetTop > (scrollTop + viewportHeight)) {
                percentage = 0;
            } else if ((elementOffsetTop + elementHeight) < scrollTop) {
                percentage = 100;
            } else {
                var distance = (scrollTop + viewportHeight) - elementOffsetTop;
                var percentage = distance / ((viewportHeight + elementHeight) / 100);
                percentage = (Math.round(percentage));
            }
            if (scrollTop > ($('body').height() - viewportHeight) - 5) {
                return;
            }
            if (percentage == 100) {
                $this.find('img').stop().animate({
                    left: "100%",
                    opacity: 0
                }, 1200, 'easeOutExpo');
            } else if (percentage == 0) {
                $this.find('img').stop().animate({
                    left: "-100%",
                    opacity: 0
                }, 1200, 'easeOutExpo');
            } else {
                var opacity = 1 - (percentage + 5) / 100;
                percentage = (percentage - 5) + "%";
                $this.find('img').stop().animate({
                    left: percentage,
                    opacity: opacity
                }, 1200, 'easeOutExpo');
            };
        }
    });
}
/* ============================================================
 * Plugin
 * ============================================================ */
$.fn.jsFullBackground = function(config) {
    var defaults = {
        position: 'center center',
        bgsize: 'cover',
        repeat: 'no-repeat'
    };
    var config = $.extend({}, defaults, config);
    return this.each(function() {
        var $this = $(this);
        var $img = $this.children('img').first();
        if ($img.length) {
            var src = $img.attr('src');
            var position = config.position;
            var bgsize = config.bgsize;
            var repeat = config.repeat;
            if ($this.data('position')) {
                position = $this.data('position');
            }
            if ($this.data('bgsize')) {
                bgsize = $this.data('bgsize');
            }
            if ($this.data('repeat')) {
                repeat = $this.data('repeat');
            }
            $this.css({
                backgroundSize: bgsize,
                backgroundImage: 'url(' + src + ')',
                backgroundRepeat: repeat,
                backgroundPosition: position
            });
            $img.hide();
        }
    });
}

/* ------------------------------------------------------------
 * [ smoothScroll ]
 * ------------------------------------------------------------ */
function smoothScroll(opt) {
    var opt = opt || {};
    var mt = opt.mt === undefined ? 0 : opt.mt;
    var $btn = opt.btn === undefined ? $('a[href*=\\#]') : $(opt.btn);
    var $body = opt.body === undefined ? $('html, body') : $(opt.body);
    var easing = opt.ease === undefined ? 'easeOutExpo' : opt.ease;
    var animationTime = opt.speed === undefined ? 1000 : opt.speed;
    var pageTopID = opt.pageTopID === undefined ? '#document' : opt.pageTopID;
    var $frameTop = $('#l-document');
    var lHash = location.hash;

    function runScroll(hash, noHash) {
        var $target = opt.target === undefined ? $(hash) : $(opt.target);
        if (hash == pageTopID) {
            marginTop = 0
        } else {
            marginTop = mt + $frameTop.position().top;
        }
        if ($target.length) {
            var position = $target.offset().top - marginTop; // 行き先までの画面上の高さの数値
            $body.stop().animate({
                scrollTop: position
            }, animationTime, easing);
            if (!noHash && hash !== 'undefined' && hash != pageTopID) {
                location.hash = hash;
            }
        }
    }
    $btn.not('.noScroll').on('click', function() {
        if ($(this).hasClass('noHash')) {
            var noHash = true;
        } else {
            var noHash = false;
        }
        var hash = this.hash;
        runScroll(hash, noHash);
        return false;
    });
    if (lHash.match(/[^#scrollTo-]/)) {
        var hash = '#' + lHash.slice(1);
        setTimeout(function() {
            runScroll(hash);
        }, 300);
    }
    $(document).on('mousewheel', function() {
        $body.stop();
    });
    $(document).on('touchmove', function() {
        $body.stop();
    });
}

function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
}

/* ------------------------------------------------------------
 * [ jQuery Easing v1.3 ] http://gsgd.co.uk/sandbox/jquery/easing/
 * ------------------------------------------------------------
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 * ------------------------------------------------------------ */
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});

/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = -1,
        o = -1,
        n = function(t) {
            return parseFloat(t) || 0
        },
        a = function(e) {
            var o = 1,
                a = t(e),
                i = null,
                r = [];
            return a.each(function() {
                var e = t(this),
                    a = e.offset().top - n(e.css("margin-top")),
                    s = r.length > 0 ? r[r.length - 1] : null;
                null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a
            }), r
        },
        i = function(e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        r = t.fn.matchHeight = function(e) {
            var o = i(e);
            if (o.remove) {
                var n = this;
                return this.css(o.property, ""), t.each(r._groups, function(t, e) {
                    e.elements = e.elements.not(n)
                }), this
            }
            return this.length <= 1 && !o.target ? this : (r._groups.push({
                elements: this,
                options: o
            }), r._apply(this, o), this)
        };
    r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function(e, o) {
            var s = i(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                u = h.parents().filter(":hidden");
            return u.each(function() {
                    var e = t(this);
                    e.data("style-cache", e.attr("style"))
                }), u.css("display", "block"), s.byRow && !s.target && (h.each(function() {
                    var e = t(this),
                        o = e.css("display");
                    "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                        display: o,
                        "padding-top": "0",
                        "padding-bottom": "0",
                        "margin-top": "0",
                        "margin-bottom": "0",
                        "border-top-width": "0",
                        "border-bottom-width": "0",
                        height: "100px",
                        overflow: "hidden"
                    })
                }), l = a(h), h.each(function() {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || "")
                })), t.each(l, function(e, o) {
                    var a = t(o),
                        i = 0;
                    if (s.target) i = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                        a.each(function() {
                            var e = t(this),
                                o = e.attr("style"),
                                n = e.css("display");
                            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                            var a = {
                                display: n
                            };
                            a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                        })
                    }
                    a.each(function() {
                        var e = t(this),
                            o = 0;
                        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"))
                    })
                }), u.each(function() {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || null)
                }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var o = t(this),
                    n = o.attr("data-mh") || o.attr("data-match-height");
                n in e ? e[n] = e[n].add(o) : e[n] = o
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
    var s = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function(n, a) {
        if (a && "resize" === a.type) {
            var i = t(window).width();
            if (i === e) return;
            e = i;
        }
        n ? o === -1 && (o = setTimeout(function() {
            s(a), o = -1
        }, r._throttle)) : s(a)
    }, t(r._applyDataApi);
    var h = t.fn.on ? "on" : "bind";
    t(window)[h]("load", function(t) {
        r._update(!1, t)
    }), t(window)[h]("resize orientationchange", function(t) {
        r._update(!0, t)
    })
});