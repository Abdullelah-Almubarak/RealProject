var adsSlider=document.getElementById("adsSlider");

var rightArrow=document.getElementsByClassName("right")[0];
var leftArrow=document.getElementsByClassName("left")[0];
var next=document.getElementsByClassName("next")[0];
var prev=document.getElementsByClassName("prev")[0];
var curAdImg=[];
var nexImg=0;
var prevImg=0;
var adsImgCounter=0;
var drag;
var slideX=0;



for(i=0;i<adsSlider.childElementCount;i++)
{
    if(adsSlider.children[i].tagName=="A")
    {
        adsImgCounter+=1;
        curAdImg.push(adsSlider.children[i].id);
    }
    // console.log(curAdImg.length);
}

if(curAdImg.at(prevImg-1)==null)
{
    prevImg=0;
}
else
{
    prevImg-=1;
}

if(curAdImg[nexImg+1]==null)
{
    nexImg=0;
}
else
{
    nexImg+=1;
}



// alert(document.getElementById("adI1").previousElementSibling.id)
function rightScroll(){
    // alert(curAdImg[1]);

    if(curAdImg.at(nexImg)==null)
    {
        document.getElementById(curAdImg.at(-1))
        .insertAdjacentElement("afterend",document.getElementById(curAdImg[0]));
        nexImg=0;
        prevImg=-1;
        // document.getElementById(curAdImg.at(nexImg)).scrollIntoView();
        // adsSlider.scrollBy({top:window.pageYOffset,left:1,behavior:"smooth"});
        adsSlider.scrollLeft+=adsSlider.scrollWidth/5;
    }
    else
    {
        prevImg+=1;
        // console.log(nexImg);

        // console.log(document.getElementById(curAdImg.at(nexImg-1)).nextElementSibling.id)

        if(document.getElementById(curAdImg.at(nexImg-1)).nextElementSibling.id!=curAdImg.at(nexImg))
        {
            document.getElementById(curAdImg.at(nexImg-1))
            .insertAdjacentElement("afterend",document.getElementById(curAdImg.at(nexImg)));
        }
        // adsSlider.scrollLeft({top:window.pageYOffset,left:1,behavior:"smooth"});
        // console.log(window.innerWidth)
        // console.log(adsSlider.scrollWidth/5)
        // console.log("yes");
        
        adsSlider.scrollLeft+=adsSlider.scrollWidth/5;
        // adsSlider.addEventListener("scroll",()=>{
        //     alert("scrollEnd");
        // })
        // console.log("yes");
    }
    nexImg+=1;
    
};




function leftScroll(){
    if(curAdImg.at(prevImg)==null)
    {
         document.getElementById(curAdImg.at(0))
        .insertAdjacentElement("beforebegin",document.getElementById(curAdImg.at(-1)));
        nexImg=0;
        prevImg=-1;
        // console.log("prevNull");
        // document.getElementById(curAdImg.at(prevImg)).scrollIntoView();
        // adsSlider.scrollBy({top:window.pageYOffset,left:-1,behavior:"smooth"});
        adsSlider.scrollLeft-=adsSlider.scrollWidth/5;
    }
    else
    {
        nexImg-=1;
        if(document.getElementById(curAdImg.at(prevImg+1)).nextElementSibling.id!=curAdImg.at(prevImg))
        {
            document.getElementById(curAdImg.at(prevImg+1))
            .insertAdjacentElement("beforebegin",document.getElementById(curAdImg.at(prevImg)));
            
        }
        // document.getElementById(curAdImg.at(prevImg)).scrollIntoView();
        // adsSlider.scrollBy({top:window.pageYOffset,left:-1,behavior:"smooth"});
        // console.log("prev: ",prevImg);
        adsSlider.scrollLeft-=adsSlider.scrollWidth/5;
        
    }
    prevImg-=1;
};

let autoScroll; 
autoScroll ??=setInterval(rightScroll,6000);

// next.addEventListener("click",(e)=>{
//     e.preventDefault();
// })


adsSlider.addEventListener("touchstart",function(e){
    slideX=e.touches[0].pageX;
    drag=false;
    // console.log("touchStart");
})

adsSlider.addEventListener("touchmove",function(e){
    drag=true;
     
    // console.log("touchMove");
})

adsSlider.addEventListener("touchend",function(e){
    if(e.changedTouches[0].pageX>slideX && drag==true)
    {
       leftScroll();
       
        // console.log("Right");
    }
    else if(e.changedTouches[0].pageX<slideX && drag==true)
    {
        rightScroll();
       
       console.log("yes")
        // console.log("left");
    }
})

// rightArrow.addEventListener("dragstart",()=>{
//     alert("ddd");
// })

adsSlider.addEventListener("mousedown",function(e){
    // console.log("pageX: ",e.pageX);
    slideX=e.pageX;
    drag=false;
})

adsSlider.addEventListener("mousemove",function(e){
    drag=true;
    
})

adsSlider.addEventListener("mouseup",function(e){
    // console.log("pageX: ",e.pageX);
    // console.log("SlideX: ",slideX);

    if(e.pageX>slideX && drag==true)
    {
        document.getElementById(curAdImg.at(prevImg+1)).addEventListener("click",function x(e){
       e.preventDefault();
        this.removeEventListener("click",arguments.callee,false);
        // console.log("tt")
       });
       
        leftScroll();
       
        // e.preventDefault();
        // console.log("Right");
    }
    else if(e.pageX<slideX && drag==true)
    {
        document.getElementById(curAdImg.at(nexImg-1)).addEventListener("click",function x(e){
       e.preventDefault();
        this.removeEventListener("click",arguments.callee,false);
        // console.log("tt")
       });
       
       rightScroll();
        
    //    e.preventDefault();
        // console.log("left");
    }
})


adsSlider.addEventListener("touchstart",()=>{
     console.log("touchstart");
    clearInterval(autoScroll);
    autoScroll=null;
})

adsSlider.addEventListener("touchend",()=>{
    console.log("touchend");
    autoScroll ??=setInterval(rightScroll,6000);
})

adsSlider.addEventListener("mouseover",function(e){
    console.log("mouseover");
    clearInterval(autoScroll);
    autoScroll=null;
});

adsSlider.addEventListener("mouseleave",function(e){
    console.log("mouseleave");
    autoScroll ??=setInterval(rightScroll,6000);
});


// window.addEventListener("blur",function(e){
//     clearInterval(autoScroll);
//     autoScroll=null;
// })


document.addEventListener("visibilitychange",()=>{
    console.log("document");
     clearInterval(autoScroll);
    autoScroll=null;
})

window.addEventListener("focus",function(e){
    // console.log("onFoucs");
    console.log("foucs");
    autoScroll ??=setInterval(rightScroll,6000);
})





next.addEventListener("click",function(e){
    e.preventDefault();
    rightScroll();
});



prev.addEventListener("click",function(e){
    e.preventDefault();
    leftScroll();
})


