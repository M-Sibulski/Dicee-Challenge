function rollDices() {
    var delayTime = 80;
    $("h1").text("Wait for it...");
    while (delayTime < 3000) {
        setTimeout(function() {
            var fakeNumber1 = Math.floor((Math.random()*6)+1);
            var fakeNumber2 = Math.floor((Math.random()*6)+1);
            $(".img1").attr("src", "images/dice"+fakeNumber1+".png");
            $(".img2").attr("src", "images/dice"+fakeNumber2+".png");
        },delayTime);
        delayTime = delayTime * 1.2;
    }

    if (delayTime >= 3000) {
        setTimeout(function() {
            var randomNumber1 = Math.floor((Math.random()*6)+1);
            var randomNumber2 = Math.floor((Math.random()*6)+1);

            $(".img1").attr("src", "images/dice"+randomNumber1+".png");
            $(".img2").attr("src", "images/dice"+randomNumber2+".png");

            if ((randomNumber1-randomNumber2)>0) {
                $("h1").text("Player 1 Wins!");
            } else if ((randomNumber1-randomNumber2)<0) {
                $("h1").text("Player 2 Wins!");
            } else {$("h1").text("Draw!");}
        },4000)
    }
}
rollDices();

/* $("body").click(function(e){
    $(".box").css("left", ((e.pageX-5)+"px"));
    $(".box").css("top", ((e.pageY-5)+"px"));
    rollDices();
}); */
var boxName = 0;
$("body").click(function(e){
    boxName++;
    $(".box-container").prepend("<div id=Box-"+boxName+" class='box'></div>");
    $("#Box-"+boxName).css("left", ((e.pageX-5)+"px"));
    $("#Box-"+boxName).css("top", ((e.pageY-5)+"px"));

});

var speed = 2;

$("body").keypress(function(e) {
    switch(e.key) {
        case "a":
            var newX = $(".box").css("left");
            newX = (parseInt(newX.replace(/px/,""))-speed)+"px";
            $(".box").css("left", newX);
            break;
        case "d":
            var newX = $(".box").css("left");
            newX = (parseInt(newX.replace(/px/,""))+speed)+"px";
            $(".box").css("left", newX);
            break;
        case "w":
            var newX = $(".box").css("top");
            newX = (parseInt(newX.replace(/px/,""))-speed)+"px";
            $(".box").css("top", newX);
            break;
        case "s":
            var newX = $(".box").css("top");
            newX = (parseInt(newX.replace(/px/,""))+speed)+"px";
            $(".box").css("top", newX);
            break;
        default:
            console.log("Invalid key.");a
    }
})