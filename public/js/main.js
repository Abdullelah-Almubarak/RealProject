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

document.addEventListener("mouseover",function(e){
    if(document.contains(parts)==true)
        {
            
            
            var withinBoundariesParts = e.composedPath().includes(parts);
            
        }
        else
        {
            
            var withinBoundariesParts = false;
        }
    if(document.contains(profile)==true)
    {
        
        
        var withinBoundariesP = e.composedPath().includes(profile);
        
    }
    else
    {
        
        var withinBoundariesP = false;
    }
    


    if(withinBoundariesP)
    {
        if(document.contains(parts)==true)
        {
            parts.firstChild.classList.add("icon");
            parts.firstChild.classList.remove("icon-active");

            parts.style.cssText="--visPCParts: hidden";

            parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
        }
        
            
        profile.firstChild.classList.add("icon-active");
        profile.firstChild.classList.remove("icon");
            
        
        profile.style.cssText="--vis: visible";
            

    }
    else if(withinBoundariesParts)
    {

        if(document.contains(profile)==true)
        {
            profile.firstChild.classList.remove("icon-active");
            profile.firstChild.classList.add("icon");
        
            profile.style.cssText="--vis: hidden";
        }

        parts.firstChild.classList.remove("icon");
        parts.firstChild.classList.add("icon-active");
        parts.style.cssText="--visPCParts: visible";
        if(e.target.childElementCount!=0)
        {
            if(e.target.childNodes[1].className=="ex")
                {
                    // alert("ddd");
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: visible";
                }
                else if(e.target.childNodes[1].className=="exc")
                {
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: visisble";
                    
                }
                else if(e.target.childNodes[1].className=="exr")
                {
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: visible";
                }
                else if(e.target.childNodes[1].className=="exs")
                {
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: visible";
                    
                }
                else if(e.target.childNodes[1].className=="exm")
                {
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: visible";
                        
                }
                else if(e.target.childNodes[1].className=="exf")
                {
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: visible";
                }
                 else if(e.target.childNodes[1].className=="expo")
                {
                    
                    parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
                    parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: visible";
                }
        }
        else 
        {
            if(e.target.className!="ex" && e.target.parentNode.className!="ex")
            {
                
                parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
            }
            
            if(e.target.className!="exc" && e.target.parentNode.className!="exc")
            {
                
                parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
            }

            if(e.target.className!="exr" && e.target.parentNode.className!="exr")
            {
                    
                parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
            }

            if(e.target.className!="exs" && e.target.parentNode.className!="exs")
            {
                        
                parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
            }

            if(e.target.className!="exm" && e.target.parentNode.className!="exm")
            {
                            
                parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
            }

            if(e.target.className!="exf" && e.target.parentNode.className!="exf")
            {
                                
                parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
            }

            if(e.target.className!="expo" && e.target.parentNode.className!="expo")
            {
                                
                parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
            }
        } 
    }
    else
    {
        if(document.contains(parts)==true)
        {
            parts.firstChild.classList.add("icon");
            parts.firstChild.classList.remove("icon-active");
    
            parts.style.cssText="--visPCParts: hidden";
            parts.lastChild.childNodes[1].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[3].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[5].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[7].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[9].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[11].childNodes[1].style.cssText="--visEX: hidden";
            parts.lastChild.childNodes[13].childNodes[1].style.cssText="--visEX: hidden";
        }
       

        if(document.contains(profile)==true)
        {
            profile.firstChild.classList.remove("icon-active");
            profile.firstChild.classList.add("icon");
        
            profile.style.cssText="--vis: hidden";
        }
    }
});

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

