// Double Click events

$("document").ready(function(){
    $("button").db1click(function(){
        $("#img1").css('width','500px');
    })

})

//  mouse clicker and mouse leave

// $("document").ready(function()
// {
//     $("#img1").mouseenter(function(){
//         $("#img1").css('width','500px');
//     })
//     $("#img1").mouseenter(function(){
//         $("#img1").css('width','250px');
//     })
// })

//  mouse hover

$("#img1").hover(func1,func2)

function func1()
{
    $("#img1").css('width','500px')
}



function func2()
{
    $("#img1").css('width','250px')
}