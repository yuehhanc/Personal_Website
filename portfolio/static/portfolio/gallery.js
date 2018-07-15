var image_idx = 0;
var names = ['Angry Bird 3D', 'Cuper MariU', 'Foodaholic', 'Coolmeme', 'Pittsburgh Pollution Map', 'Window Monkey'];
function clickPrev() {
    image_idx--;
    if (image_idx < 0) {
        image_idx = 5;
    }
    $("#gallery_pic").fadeOut();
    $('#gallery_pic').attr('src', '/static/portfolio/images/gallery_pic_' + image_idx + '.png');
    $("#gallery_pic").fadeIn();
    document.getElementById("name").innerHTML = names[image_idx];
}

function clickNext() {
    image_idx++;
    image_idx %= 6;
    $("#gallery_pic").fadeOut();
    $('#gallery_pic').attr('src', '/static/portfolio/images/gallery_pic_' + image_idx + '.png');
    $("#gallery_pic").fadeIn();
    document.getElementById("name").innerHTML = names[image_idx];
}

function clickMap() {
    var map_detail = document.getElementById("map-detail");
    if (map_detail.innerHTML != "") {
        map_detail.innerHTML = "";
    } else {
        var detail = document.createElement("div");
        detail.innerHTML = '<br><p class="content">' + 
                           'Pittsburgh Pollution Map is a project which faculties in Social and Decision Science department devote to.' + 
                           ' Yueh-Han is the web developer to put their achievements online. Their goal is to help residents' +
                           " in Pittsburgh gain a better understanding of pollution in their hometown." +
                           '</p><br><a class="see-project-btn" href="https://cmusds.pitpollutionmap.tk/">See Website</a>';
        map_detail.appendChild(detail);
    }  
}

function clickFood() {
    var food_detail = document.getElementById("food-detail");
    if (food_detail.innerHTML != "") {
        food_detail.innerHTML = "";
    } else {
        var detail = document.createElement("div");
        detail.innerHTML = '<br><p class="content">' + 'We found there were potential chefs at every corner in the world.' + 
                           ' And, lots of them were willing to share their master pieces with others! So, we made a platform for them.' +
                           ' The main idea of the project was that users uploaded photos, videos of their dishes in real time. And all of the other nearby users could then see ' + 
                           "the posts and grab some food~"
                         + '</p><br><a class="see-project-btn" href="https://foodholic.yuehhan.com/">See Website</a>';
        food_detail.appendChild(detail);
    }  
}

function clickCool() {
    var cool_detail = document.getElementById("cool-detail");
    if (cool_detail.innerHTML != "") {
        cool_detail.innerHTML = "";
    } else {
        var detail = document.createElement("div");
        detail.innerHTML = '<br><p class="content">' + 'Coolmeme is a social network website. Just like Facebook, users share their thoughts and photos. ' + 
                           "They can also friend each other and comment on their friends' posts. Of course, it's a good place to post memes and have fun :P" +
                           '</p><br><a class="see-project-btn" href="https://coolmeme.yuehhan.com/">See Website</a>';
        cool_detail.appendChild(detail);
    }  
}

function clickMonkey() {
    var monkey_detail = document.getElementById("monkey-detail");
    if (monkey_detail.innerHTML != "") {
        monkey_detail.innerHTML = "";
    } else {
        var detail = document.createElement("div");
        detail.innerHTML = '<br><p class="content">' + 'Window Monkey was a window climbing robot. It aimed to do one of the most dangerous jobs in the world---cleaning' +
                           ' windows on sky scrappers, for human. ' + 
                           '</p><br><a class="see-project-btn" href="https://shsmith5595.wixsite.com/windowmonkey">See Project</a>';
        monkey_detail.appendChild(detail);
    }  
}

function clickMario() {
    var mario_detail = document.getElementById("mario-detail");
    if (mario_detail.innerHTML != "") {
        mario_detail.innerHTML = "";
    } else {
        var detail = document.createElement("div");
        detail.innerHTML = '<br><p class="content">' + 'Cuper MariU is a remade version of Super Mario Bro.' +
                           'If you have been to Carnegie Mellon, you would see familiar sculptures and buildings in the game.' +
                           '</p><br><a class="see-project-btn" href="https://youtu.be/JT1bba_jpsg">See Project</a>';
        mario_detail.appendChild(detail);
    }  
}

function clickAngry() {
    var angry_detail = document.getElementById("angry-detail");
    if (angry_detail.innerHTML != "") {
        angry_detail.innerHTML = "";
    } else {
        var detail = document.createElement("div");
        detail.innerHTML = '<br><p class="content">' + 
                           'Angry Bird 3D was a required, individual project in a popular course, 15112 Fundamentals of programming,' + 
                           ' at Carnegie Mellon University. In the game, a player can launch birdies with his/her mouse' +
                           " to destroy evil pigs. It was quite enjoyable to watch the whole world in a bird's eye view." +
                           '</p><br><a class="see-project-btn" href="https://cmusds.pitpollutionmap.tk/">See Project</a>';
        angry_detail.appendChild(detail);
    }  
}


window.setInterval(clickNext, 10000);