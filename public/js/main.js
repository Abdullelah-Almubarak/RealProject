// const { Children } = require("react");

var bar=document.getElementById("bars");
var header=document.getElementsByTagName("header");
var sideBar=document.getElementsByClassName("sideBar");
var shadow=document.getElementById("shadow");
var searchSide=document.getElementById("searchSide");
var clearSearchSide=document.getElementById("clearSearchSide");
// var divSearchBar=document.getElementById("searchBar");
var searchIcon=document.getElementById("searchIcon");
var searchHeader=document.getElementById("searchHeader");
var profile=document.getElementById("profile");
// var profileMenu=document.getElementsByClassName("profMen")[0];
var searchHeaderInput=document.getElementById("searchHeaderInput");
// var arrow=document.getElementById("arrow");
// var body=document.getElementsByName("body")[0];
var parts=document.getElementById("parts");
var pcParts=document.getElementsByClassName("pcParts")[0];
var searchHeaderInput2=document.getElementById("searchHeaderInput2");
var clearSearchHeader2=document.getElementById("clearSearchHeader2");
var searchIconHeader2=document.getElementById("searchIconHeader2");
var searchFormHeader2=document.getElementById("searchFormHeader2");
// let c=5;




if(document.contains(profile))
{
profile.getElementsByTagName("ul")[0].classList.add("disNone");
profile.addEventListener("mouseover",e=>{
    profile.getElementsByTagName("a")[0].classList.add("icon-active");
    profile.getElementsByTagName("ul")[0].classList.remove("disNone");
})

profile.addEventListener("mouseleave",e=>{
    profile.getElementsByTagName("a")[0].classList.remove("icon-active");
    profile.getElementsByTagName("ul")[0].classList.add("disNone");
})
}

// for(j=0,i=parts.getElementsByClassName("pcParts").length;j<i;j++)
// {
//     parts.getElementsByClassName("pcParts")[j].addEventListener("mouseover",e=>{
//         alert("ggg");
//     })
// }

if(document.contains(parts))
{
    pcParts.classList.add("disNone");

    for(j=0,i=pcParts.childElementCount;j<i;j++)
    {
        pcParts.getElementsByTagName("ul")[j].classList.add("disNone");

        // console.log(pcParts.children[j])

        pcParts.children[j].addEventListener("mouseover",e=>{
            // alert("fff");
            // console.log(e.currentTarget.getElementsByTagName("ul")[0].classList);
            e.currentTarget.getElementsByTagName("ul")[0].classList.remove("disNone");
        });

        pcParts.children[j].addEventListener("mouseleave",e=>{
            // alert("fff");
            // console.log(e.currentTarget.getElementsByTagName("ul")[0].classList);
            e.currentTarget.getElementsByTagName("ul")[0].classList.add("disNone");
        });

        // pcParts.getElementsByTagName("li")[j].addEventListener("mouseleave",e=>{
        //     this.classList.add("disNone");
        // });
    }

    parts.addEventListener("mouseover",function(e){
        this.querySelector(".icon").classList.add("icon-active")
        // this.querySelector(".icon").classList.remove("icon");
        pcParts.classList.remove("disNone");
    })

    parts.addEventListener("mouseleave",function(e){
        this.querySelector(".icon").classList.remove("icon-active");
        pcParts.classList.add("disNone");
    })
}

searchHeaderInput2.addEventListener("input",function(e){
    if(searchHeaderInput2.value.length!=0)
    {
        clearSearchHeader2.style.cssText="--visI: visible";
    }
    else
    {
        clearSearchHeader2.style.cssText="--visI: hidden";
    }
});

clearSearchHeader2.addEventListener("click",function(e){
    if(searchHeaderInput2.value.length!=0)
    {
        searchHeaderInput2.value="";
        clearSearchHeader2.style.cssText="--visI: hidden";
        searchHeaderInput2.focus();
    }
});

searchIconHeader2.addEventListener("click",function(e){
    searchFormHeader2.submit();
});

header[0].addEventListener("click",function(e){

    if(shadow.style.width=="100%")
    {
        sideBar[0].style.width="0px";
        bar.classList.remove("icon-active");
        bar.classList.add("icon");
        shadow.style.width="0";
        shadow.style.height="0";
        shadow.style.visibility="hidden";
    }
    else
    {
        shadow.style.width="100%";

    }
});


bar.addEventListener("click",function()
{
   let sic=window.getComputedStyle(searchIcon,"::after");


    if (sideBar[0].style.width=="230px")
    {
        sideBar[0].style.width="0px";
        bar.classList.remove("icon-active");
        bar.classList.add("icon");
        shadow.style.width="0"
        shadow.style.height="0"
        shadow.style.visibility="hidden";
    }
    else
    {
        sideBar[0].style.width="230px";
        bar.classList.remove("icon");
        bar.classList.add("icon-active");
        shadow.style.width="99%";
        shadow.style.height="100%";
        shadow.style.visibility="visible";

        shadow.addEventListener("click",function(e){
            sideBar[0].style.width="0px";
            bar.classList.remove("icon-active");
            bar.classList.add("icon");
            shadow.style.width="0";
            shadow.style.height="0";
            shadow.style.visibility="hidden";
        });


    }
});



searchSide.addEventListener("input",function(e){
    if(searchSide.value.length>0)
    {

        clearSearchSide.classList.remove("p-hide");
        clearSearchSide.classList.add("p-active");

    }
    else
    {
        clearSearchSide.classList.remove("p-active");
        clearSearchSide.classList.add("p-hide");
    }


});

clearSearchSide.addEventListener("click",function(e){

    searchSide.value="";
    clearSearchSide.classList.remove("p-active");
    clearSearchSide.classList.add("p-hide");
    searchSide.focus();
});


searchSide.addEventListener("focusin",function(e){
    if(this.value.length>0)
    {
        clearSearchSide.classList.remove("p-hide");
        clearSearchSide.classList.add("p-active");
    }
})

