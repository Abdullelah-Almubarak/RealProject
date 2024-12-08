var bar=document.getElementById("bars");
bar.addEventListener("click",function()
{
    
    const sideBar=document.getElementsByClassName("sideBar");
    if (sideBar[0].style.width=="230px")
    {
        sideBar[0].style.width="0px";
        bar.style.backgroundColor=""
    }
    else
    {
        sideBar[0].style.width="230px";
        bar.style.backgroundColor="rgb(191, 191, 191)";
    }
});
// function() {
// // //    const sideBar=document.getElementsByClassName("sideBar");
// // //    sideBar[0].style.display="show";
// // alert("gg");
// // };