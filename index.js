var menuitems=document.getElementById('Menuitems');
menuitems.style.maxHeight="0px";

function toggle()
{
    if(menuitems.style.maxHeight=="0px")
    {
        menuitems.style.maxHeight='200px';
    }
    else
    {
        menuitems.style.maxHeight="0px";
    }
}

var Product=document.getElementById("Productimg");
// smalli is an array as it contains group of images
var smallimg=document.getElementsByClassName("Small-img")

smallimg[0].onclick=function()
{
    Product.src=smallimg[0].src
}
smallimg[1].onclick=function()
{
    Product.src=smallimg[1].src
}
smallimg[2].onclick=function()
{
    Product.src=smallimg[2].src
}
smallimg[3].onclick=function()
{
    Product.src=smallimg[3].src
}


