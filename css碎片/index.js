var animalList=["crow"];

function detectBrowser() {
    $("html").addClass("nowebkitbrowser"), $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), $.browser.chrome && ($(".small-nav").length ? ($("html").removeClass("nowebkitbrowser"), $("html").addClass("webkitbrowser"), $.browser.safari = !1) : ($("html").removeClass("nowebkitbrowser"), $("html").addClass("webkitbrowser"), $("html").addClass("chromebrowser"), $.browser.safari = !1)), $.browser.safari && ($("html").addClass("webkitbrowser"), $("html").removeClass("nowebkitbrowser")), -1 != navigator.appVersion.indexOf("Mac") || $("#allanimals").addClass("performance-boost")
}

function sizeshards() {
    $(".wrap").each(function () {
        var t = .99 * $(window).width(),
            a = .7 * t,
            e = -1 * (t / 2),
            n = -1 * (a / 2) - 0;
        $(this).each(function () {
            $(this).css({
                width: t,
                height: a,
                "margin-top": n,
                "margin-left": e
            })
        })
    })
}




function animalNextKey(t) {
   $(".all-animals").length || nextAnimalProcess()
}



function nextAnimalProcess(t) {
    $("#allanimals").removeClass("animal-animations-on"), prevAnimal = animalList.indexOf($("#animalchanger").attr("class")), newAnimal = prevAnimal + 1, 30 == newAnimal && (newAnimal = 0), nextorprevanimal(), animationstatequestion()
}

function nextorprevanimal(t) {
    setTimeout(function () {
        $(".shadow").removeClass("inactive")
    }, 200), prevAnimal > newAnimal ? ($(".wrap").addClass("right-to-left"), $(".wrap.left-to-right").removeClass("left-to-right")) : ($(".wrap").addClass("left-to-right"), $(".wrap.right-to-left").removeClass("right-to-left")), $("#animalchanger").attr("class", animalList[newAnimal])
}

function animationstatequestion(t) {
    animalanimationstate += 1;
    var a = animalanimationstate;
    animalanimationstimeoutnext = setTimeout(function () {
        a == animalanimationstate && $("#allanimals").addClass("animal-animations-on")
    }, 2e3)
}

function animationstateaddition(t) {
    animalanimationstate += 1
}

function smashanimalprocess(t) {
     $("body .content-wrap").show(), $("body .content-wrap .content").addClass("copy-delays"), $("#allanimals").removeClass("animal-animations-on"), animationstateaddition(), currentChartNumber = 1, chartquery(), $(".shadow").addClass("inactive"), setTimeout(function () {
        $("body .content-wrap").addClass("show"), $("body .chart").addClass("show")
    }, 10), setTimeout(function () {
        $("body .content-wrap .content").removeClass("copy-delays")
    }, 1200), $("#allanimals").toggleClass("smash")
}

function turnOnAnimalNav() {
    prevAnimal = $("#animalchanger").attr("class"), $(".all-animals-off-btn .popout span").text(animalNames[newAnimal]), $("#animalchanger").removeClass(), $("#allanimals").addClass("all-animals"), $("#allanimals").removeClass("animal-animations-on"), animationstateaddition(), $(".shadow").addClass("inactive"), $(".hover-detector").removeClass("inactive"), $(".animal-nav-content").removeClass("inactive"), $("#allanimals").addClass("earlyburst"), setTimeout(function () {
        $("#allanimals").removeClass("earlyburst")
    }, 500), setTimeout(function () {
        $(".hover-detector div:nth-child(" + (newAnimal + 1) + ")").addClass("active-animal")
    }, 700), setTimeout(function () {
        $(".hover-detector").addClass("active"), $(".animal-nav-content").addClass("active")
    }, 5)
}

function turnoffanimalnav() {
    "" != prevAnimal && $("#animalchanger").attr("class", prevAnimal), $("#allanimals").removeClass("all-animals"), $("#allanimals").addClass("slow-polygons"), animationstatequestion(), $(".hover-detector").removeClass("active"), $(".hover-detector div").removeClass("active-animal"), $(".animal-nav-content").removeClass("active"), setTimeout(function () {
        $(".animal-nav-content").addClass("inactive"), $(".hover-detector").addClass("inactive")
    }, 500), setTimeout(function () {
        $(".shadow").removeClass("inactive")
    }, 1e3), setTimeout(function () {
        $("#allanimals").removeClass("slow-polygons")
    }, 1500)
}

function activeChartLinks(t) {
    $(".statistics .active").removeClass("active"), t.addClass("active"), chartquery()
}

function chartquery() {
    if ($(".statistics .stats-ui").removeClass("one two three four"), $(".statistics .chart").removeClass("show-chart-1 show-chart-2 show-chart-3"), $(".statistics .stats-ui").addClass(animalChart[newAnimal][0]), $(".chart").addClass("remove-stats"), $(".statistics-on").length) {
        var t = "show-chart-" + currentChartNumber;
        $(".statistics .chart").addClass(t)
    }
    statisticschangetimeout = setTimeout(function () {
        $(".statistics .stats-ui li:nth-child(2) a span").text(animalChart[newAnimal][1][1]), $(".statistics .stats-ui li:nth-child(3) a span").text(animalChart[newAnimal][2][1]), $(".statistics .stats-ui li:nth-child(4) a span").text(animalChart[newAnimal][3][1]), $(".statistics .chart").removeClass("one-stat four-stats five-stats six-stats eight-stats"), $(".statistics .chart").addClass(animalChart[newAnimal][currentChartNumber][0]), setTimeout(function () {
            $(".content-wrap .statistics .chart .chart-bg div").each(function () {
                $(this).css({
                    top: "50%"
                })
            })
        }, 20), $(".statistics .chart-info p:nth-child(1) span").html(animalChart[newAnimal][currentChartNumber][2]), $(".statistics .chart-info p:nth-child(2) span").html(animalChart[newAnimal][currentChartNumber][3]), $(".statistics .chart-info p:nth-child(3) span").html(animalChart[newAnimal][currentChartNumber][4]), $(".statistics .chart-info p:nth-child(4) span").html(animalChart[newAnimal][currentChartNumber][5]), $(".statistics .chart-info p:nth-child(5) span").html(animalChart[newAnimal][currentChartNumber][6]), $(".statistics .chart-info p:nth-child(6) span").html(animalChart[newAnimal][currentChartNumber][7]), $(".statistics .chart-info p:nth-child(7) span").html(animalChart[newAnimal][currentChartNumber][8]), $(".statistics .chart-info p:nth-child(8) span").html(animalChart[newAnimal][currentChartNumber][9]), $(".statistics .chart-info p:nth-child(9) span").html(animalChart[newAnimal][currentChartNumber][10]), $(".chart").removeClass("remove-stats")
    }, 200)
}

function startslideshow() {
    $("#allanimals").addClass("slideshow-on"), $(".main-nav li:nth-child(2) a").addClass("stop"), $(".main-nav li:nth-child(2) .popout").addClass("text-change"), setTimeout(function () {
        $(".main-nav li:nth-child(2) .popout").removeClass("text-change"), $(".main-nav li:nth-child(2) .popout").text("stop")
    }, 150), slideshowvar += 1, slideshowquery()
}


function slideshowquery(t) {
    randomAnimal(), slideshowvar += 1;
    var a = slideshowvar;
    setTimeout(function () {
        a == slideshowvar && slideshowquery()
    }, 2900)
}

function randomAnimal(t) {
    $("#allanimals").removeClass("animal-animations-on"), newAnimal = Math.floor(Math.random() * finishedAnimals), nextorprevanimal(), $(".nowebkitbrowser").length && nowebkitnextorprevanimal()
}

function animalStates(t) {
    setInterval(function () {
        t.removeClass("state-four"), setTimeout(function () {
            t.addClass("state-two")
        }, 1e3), setTimeout(function () {
            t.removeClass("state-two"), t.addClass("state-three")
        }, 2e3), setTimeout(function () {
            t.removeClass("state-three"), t.addClass("state-four")
        }, 3e3)
    }, 4e3)
}

function animalStatesSecondLevel(t) {
    setInterval(function () {
        setTimeout(function () {
            t.addClass("two-state-two")
        }, 1e3), setTimeout(function () {
            t.removeClass("two-state-two")
        }, 1100), setTimeout(function () {
            t.addClass("two-state-two")
        }, 1400), setTimeout(function () {
            t.removeClass("two-state-two")
        }, 1500)
    }, 3e3)
}

function animalStatesShimmer(t) {
    setInterval(function () {
        setTimeout(function () {
            t.addClass("shimmer")
        }, 4e3), setTimeout(function () {
            t.removeClass("shimmer")
        }, 6e3)
    }, 7e3)
}

function nowebkitnextorprevanimal(t) {
    $(".wrap .shard-wrap.active").removeClass("active"), $(".wrap .shard-wrap:nth-child(" + (newAnimal + 1) + ")").addClass("active")
}


var app, animalanimationstate = 0,
    currentChartNumber = 0,
    browservar = 0,
    slideshowvar = 0,
    finishedAnimals = 29;
newAnimal = 0;
var prevAnimal = 0,
    skipped = 0,
    forcelinesshift = 50,
    resizingPublicVariable = 1;
$(document).ready(function () {
    sizeshards(), detectBrowser(), setTimeout(function () {
        $(".level-one, .loading").removeClass("hidden-startup")
    }, 130), $(".start-experience, .skip-intro a").on("click", function (t) {
        skipped = 1, startexperience()
    }), $(".all-animals-off-btn").on("click", function (t) {
        turnoffanimalnav()
    }), $(".content-info .close").on("click", function (t) {
        $("body .content-wrap").removeClass("show"), setTimeout(function () {
            $("#allanimals").toggleClass("smash")
        }, 120), setTimeout(function () {
            $(".content-wrap").hide()
        }, 300), setTimeout(function () {
            $(".shadow").removeClass("inactive")
        }, 1e3), animationstatequestion()
    }), $(".prev a").on("click", function (t) {
        previousAnimalProcess()
    }), $(".next a").on("click", function (t) {
        nextAnimalProcess()
    }), $(".why-endangered").on("click", function (t) {
        turnoffslideshow(), smashanimalprocess()
    }), $(".throbbing").on("mouseover", function (t) {
        $(this).removeClass("throbbing")
    }), $(".hover-detector").on("mouseout", function (t) {
        $(".shard-wrap .shard").removeClass("active"), $(".level-one").removeClass("shadow-active"), $(".level-one").addClass("shadow-inactive"), $(".animal-nav-content ul li").removeClass("active"), $(".animal-nav-content .title-content").removeClass("inactive"), setTimeout(function () {
            $(".level-one").removeClass("shadow-inactive")
        }, 100)
    }), $(".hover-detector div").on("click", function (t) {
        $(".hover-detector div").removeClass("active-animal"), prevAnimal = "", newAnimal = animalList.indexOf($(this).attr("data-animalClick")), nextorprevanimal(), $(".animal-nav-content div").each(function () {
            $(this).removeClass("active")
        }), turnoffanimalnav()
    }), $(".animal-nav-content ul li").on("click", function (t) {
        newAnimal = $(this).index(), turnoffanimalnav(), nextorprevanimal(), $(".nowebkitbrowser").length && nowebkitnextorprevanimal()
    }), $(".videoturnon").on("click", function (t) {
        soundManager.setVolume("ambientloop", 26), $(".content-wrap .videos").toggleClass("video-show"), $(".content-wrap .videos iframe").attr("src", animalVideo[newAnimal]), setTimeout(function () {
            $(".content-wrap .videos").toggleClass("video-show-ul")
        }, 2), setTimeout(function () {
            $("#allanimals").toggleClass("video-on")
        }, 550)
    }), $(".js-close-video").on("click", function (t) {
        $(".content-wrap .videos").toggleClass("video-show-ul"), setTimeout(function () {
            $(".content-wrap .videos").toggleClass("video-show"), $("#allanimals").toggleClass("video-on"), $(".content-wrap .videos iframe").attr("src", "zero"), $(".content-wrap .videos iframe").attr("src", animalVideo[newAnimal])
        }, 120), setTimeout(function () {
            soundManager.setVolume("ambientloop", 100)
        }, 200)
    }), $(".statistics-on-btn").on("click", function (t) {
        $(".content-wrap").addClass("statistics-on"), $(".statistics .chart").addClass("chart-info-delays"), currentChartNumber = 1, chartquery(), activeChartLinks($(".statistics .stats-ui li:nth-child(2) .line-link")), setTimeout(function () {
            $(".statistics .chart").removeClass("chart-info-delays")
        }, 1e3)
    }), $(".animalinfo .direct-stats").on("click", function (t) {
        smashanimalprocess(), setTimeout(function () {
            $(".content-wrap").addClass("statistics-on"), currentChartNumber = 1, chartquery(), activeChartLinks($(".statistics .stats-ui li:nth-child(2) .line-link"))
        }, 400)
    }), $(".statistics .nav-btn").on("click", function (t) {
        $(".content-wrap").removeClass("statistics-on"), currentChartNumber = 1, activeChartLinks($(this))
    }), $(".statistics .stats-ui li:nth-child(4) .line-link").on("click", function (t) {
        currentChartNumber = 3, activeChartLinks($(this))
    }), $("#allanimals").each(function () {
        animalStates($(this))
    }), $("#allanimals").each(function () {
        animalStatesSecondLevel($(this))
    }),  sizeshards()
}), $("#allanimals").bind("mousewheel", function (t) {
    $(".animal-animations-on").length && (t.originalEvent.wheelDelta / 1e3 > 0 ? previousAnimalProcess() : nextAnimalProcess())
}), document.addEventListener("visibilitychange", function () {
    document.hidden ? soundManager.setVolume("ambientloop", 13) : soundManager.setVolume("ambientloop", 100)
}),
animalNextKey();
