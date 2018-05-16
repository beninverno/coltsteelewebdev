$("ul").on('click', 'li', function() {
    if($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
        });
    }
});

$("ul").on('click', 'span', function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();[]
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        valueForList = $(this).val();
        $("ul").append("<li><span>X</span> " + valueForList + "</li>")
        $(this).val("");
    }
})