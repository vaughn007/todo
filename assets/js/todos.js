$("ul").on("click", "li", function () { //add listen to ul parent
    $(this).toggleClass("completed");
});


$("ul").on("click", "span", function (event) { //stop triging events on parent elements. eventobject
    $(this).parent().fadeOut(500, function () { //span clicked on
        $(this).remove(); //this refer to li
    })
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) { //which is charter code of key press. check for ender. enter is 13
    var todoText = ($(this).val()); //get value out of field user typed in
    $(this).val(" "); //clear input
    //ctreate a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"); //add new li with uer input using append

    } 
});

$(".fa-plus").click(function () { //add evenlisern to make plus icon work
    $("input[type='text']").fadeToggle(); // fadeToggle() will keep track of stat.it know if it need to be faded in or out
});  


//check on x to delet todo
/* $("span").click(function (event) { //stop triging events on parent elements
    $(this).parent().remove(); //this is spanp clicked on, .parent is li, and .remove() remove li
   event.stopPropagation(); //stop event from bubling up. it will only fire on span
});
 */













//check off specific todos by clicking
/* $("li").click(function () {
    $(this).css("color", "gray"); //this is for the one li that was clicked on
    $(this).css("text-decoration", "line-through");
}); */

/*//add object to set style to all
$("li").click(function () {
     //if li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black 
        $(this).css({
            color: "black",
            textDecoration: "none"
        }); 
    }

    //else
    else {
        //turn it gray
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        }); 
        
    } 
   
}); */