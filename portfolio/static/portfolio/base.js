function moveStar1() {
    $("#star1").animate({
        'marginLeft' : "+=100vw",
        'marginTop' : "+=75vh"
    }, 1000, function() {
        $("#star1").css({
            'margin-left': '-10rem',
            'margin-top': '-10rem',
        })
    });
}

function moveStar2() {
    $("#star2").animate({
        'marginLeft' : "+=66vw",
        'marginTop' : "+=50vh"
    }, 5000, function() {
        $("#star2").css({
            'margin-left': '-10rem',
            'margin-top': '20rem',
        })
    });
}

function moveStar3() {
    $("#star3").animate({
        'marginLeft' : "+=45vw",
        'marginTop' : "+=30vh"
    }, 3500, function() {
        $("#star3").css({
            'margin-left': '20rem',
            'margin-top': '-10rem',
        })
    });
    $({deg: 0}).animate({deg: 720}, {
        duration: 3500,
        step: function(now) {
            $("#star3").css({
                transform: 'rotate(' + (now - 90) + 'deg)'
            });
        }
    });
}

function moveStar4() {
    $("#star4").animate({
        'marginLeft' : "+=45vw",
        'marginTop' : "+=30vh"
    }, 3500, function() {
        $("#star4").css({
            'margin-left': '-10rem',
            'margin-top': '10rem',
        })
    });
    $({deg: 0}).animate({deg: -720}, {
        duration: 3500,
        step: function(now) {
            $("#star4").css({
                transform: 'rotate(' + (now - 90) + 'deg)'
            });
        }
    });
}


function moveStar5() {
    $("#star5").animate({
        'marginLeft' : "+=65vw",
        'marginTop' : "+=50vh"
    }, 2000, function() {
        $("#star5").css({
            'margin-left': '10rem',
            'margin-top': '-10rem',
        })
    });
}

window.setInterval(moveStar1, 10000);
window.setInterval(moveStar2, 5000);
window.setInterval(moveStar3, 7000);
window.setInterval(moveStar4, 9000);
window.setInterval(moveStar5, 6000);
window.onload = function() {
    moveStar1();
}