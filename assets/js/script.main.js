$(".question").click(function (e) {
    if (!$(e.currentTarget).hasClass("active")) {
        $(".question.active").removeClass("active")
        $(e.currentTarget).addClass("active");
    }

})


$(".services__button-list li").click(function(e){
    let parent = $(e.currentTarget).parents("section").attr("class");
    $("."+parent+" .services__list .active").slideUp("300").removeClass("active");
    $("."+parent+" .services__list .active").slideUp("300").removeClass("active");
    $("."+parent+" .services__button-list .active").removeClass("active");
    $(e.currentTarget).addClass("active");
    let newList = $(e.currentTarget).attr("data-order");
    console.log(newList)
    setTimeout(function(){
        $("."+parent+" .services__list li:nth-child("+newList+")").slideDown(300).addClass("active");
    },400)
    
})


$(document).ready(function(){
    $(".services__list li").slideUp(1);
    $(".services__list li.active").slideDown(1);
})

$(".burger").click(function(){
    $(".adaptive").toggleClass("active")
})