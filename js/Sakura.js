var _ua = function (u) {
    return { Tablet: -1 != u.indexOf("windows") && -1 != u.indexOf("touch") || -1 != u.indexOf("ipad") || -1 != u.indexOf("android") && -1 == u.indexOf("mobile") || -1 != u.indexOf("firefox") && -1 != u.indexOf("tablet") || -1 != u.indexOf("kindle") || -1 != u.indexOf("silk") || -1 != u.indexOf("playbook"), Mobile: -1 != u.indexOf("windows") && -1 != u.indexOf("phone") || -1 != u.indexOf("iphone") || -1 != u.indexOf("ipod") || -1 != u.indexOf("android") && -1 != u.indexOf("mobile") || -1 != u.indexOf("firefox") && -1 != u.indexOf("mobile") || -1 != u.indexOf("blackberry") }
}(window.navigator.userAgent.toLowerCase());
_ua.Mobile || _ua.Tablet ? $("html").addClass("sp") : $("html").addClass("pc"),
    $(function () {
        var $pagetop = $("#btt"); 
        $(window).on("load scroll resize", function () {
            $(this).scrollTop() >= 500 ? $pagetop.not(":animated").fadeIn() : $pagetop.not(":animated").fadeOut()
        }),
            $("a[href^='#']").click(function () {       
                var href = $(this).attr("href"),
                    target;
                return $("#" === href || "" === href ? "html" : href).velocity("scroll", {
                    duration: 500, easing: "easeOutQuint"
                }), !1
            }),
            function () {
                $(".pc").children("body").append("<div id='sakura'></div>"),
                    $("#sakura").css({
                        position: "fixed",
                        top: "0",
                        left: "0",
                        "z-index": "999",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden"
                    });
                for (var timer = !1, sakuNum = 30, sakuHight = $("#sakura").height(), sakuWidth = 1.2 * $("#sakura").width(), i = 0; i < 30; i++) {
                    var className = "chip" + i;
                    $("body").hasClass("home") ? preload("commons/img/petal1.png", "commons/img/petal2.png", "commons/img/petal3.png", "commons/img/petal4.png", "commons/img/petal5.png") : preload("../commons/img/petal1.png", "../commons/img/petal2.png", "../commons/img/petal3.png", "../commons/img/petal4.png", "../commons/img/petal5.png"),
                        addChip(className)
                }
                function preload() {
                    for (var i = 0; i < arguments.length; i++)$("<img>").attr("src", arguments[i])
                }
                function addChip(chipClass) {
                    $(window).on("resize", function () {
                        !1 !== timer && clearTimeout(timer),
                            timer = setTimeout(function () {
                                sakuHight = $("#sakura").height(),
                                    sakuWidth = 1.2 * $("#sakura").width()
                            }, 200)
                    });
                    var valx = Math.random(), valy = Math.random(), valz = Math.floor(5 * Math.random()) + 1, chipX = valx * sakuWidth;
                    $("body").hasClass("home") ? $("#sakura").append("<div class=" + chipClass + "><img src='commons/img/petal" + valz + ".png'></div>") : $("#sakura").append("<div class=" + chipClass + "><img src='../commons/img/petal" + valz + ".png'></div>"),
                        $("." + chipClass).css({
                            position: "absolute",
                            left: chipX,
                            top: -.05 * sakuHight
                        }).velocity({
                            translateY: 1.05 * sakuHight,
                            translateX: -1e3 * valy,
                            rotateY: 360 * valy + "deg",
                            rotateX: 90 * valx + "deg"
                        },
                            {
                                delay: 5e3 * valy,
                                duration: 5e3 + 1e4 * valy,
                                complete: function () {
                                    var chipClass = $(this).attr("class");
                                    $(this).remove(),
                                        addChip(chipClass)
                                }
                            })
                }
            }()
    });