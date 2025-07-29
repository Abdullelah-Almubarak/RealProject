var slider=document.getElementsByClassName("slider")[0];
var wrap=document.getElementsByClassName("wrapper")[0];
var next=document.getElementsByClassName("next")[0];
var prev=document.getElementsByClassName("prev")[0];
var images=slider.getElementsByTagName("img");
var imgProd=document.getElementsByClassName("info2")[0];
var curImg=imgProd.getElementsByTagName("img")[0];
var body=document.getElementsByTagName("body")[0];
var mobZoom=document.getElementsByClassName("mobZoom")[0];
var mobSlider=document.getElementsByClassName("mobSlider")[0]
var remove=document.getElementById("remove");
var zoomIn=document.getElementById("zoomIn");
var zoomOut=document.getElementById("zoomOut");
var mobIcons=document.getElementsByClassName("mobIcons")[0];
var arrowSlider=document.getElementById("arrows");

var imagesValues=[];
// alert(slider.childElementCount)
if(slider.childElementCount<2)
{
    arrowSlider.classList.toggle("hide");
}
// var r=document.querySelector(":root");
// var rs=getComputedStyle(r);
// r.style.setProperty('--img', "url("+curImg.src.toString()+")");
// alert(rs.getPropertyValue("--img"));
// document.documentElement.style.cssText = "--img:"+curImg.src.toString();
// document.documentElement.style.setProperty("--img", curImg.src.toString());
// document.documentElement.setAttribute("style", "--img:",curImg.src.toString());
// document.documentElement.style.setProperty('--img', "url(\"",curImg.src,"\")");


var zoomImg=curImg.src;
var slideX=0;
var drag;

for(i=0;i<images.length;i++)
{
    images[i].data=images[i].src;
    imagesValues.push(images[i]);
    // alert(images[i].data);
    images[i].addEventListener("click",function x(e){
        if(drag==false)
        {
            curImg.src=this.data;
            curImg.data=this.data
            zoomImg=this.data;
            // console.log(drag);
        }
        

    });
    
}

function nextImg(){
    slider.scrollLeft+=slider.scrollWidth/2;
    drag=null;
}

function prevImg(){
    slider.scrollLeft-=slider.scrollWidth/2;
    drag=null;
}


//Zoom Image




curImg.addEventListener("mousemove",function(e){
    e.offsetX? ofx=e.offsetX:ofx = e.touches[0].pageX;
    e.offsetY? ofy=e.offsetY:ofy = e.touches[0].pageX;
    x=ofx/this.offsetWidth*100;
    y=ofy/this.offsetHeight*100;
    // zoomImg.style.objectPosition= x + '% ' + y + '%';
    curImg.style.cssText = "--img: url(\""+zoomImg.toString()+"\")";
    this.style.backgroundPosition= x + '% ' + y + '%';
    this.src="";
    // this.style.opacity=0;
    // this.style.zIndex=-1;
    // zoomImg.style.zIndex=5;
});


//For Zoom Image

curImg.addEventListener("mouseleave",function(e){
    // e.offsetX? ofx=e.offsetX:0;
    // e.offsetY? ofy=e.offsetY:0;
    // x=ofx/this.offsetWidth*100;
    // y=ofy/this.offsetHeight*100;
    // this.style.backgroundPosition= x + '% ' + y + '%';
    this.src=zoomImg;
    curImg.style.cssText = "";
    // e.removeAttribute("style");
    // this.style.opacity=0;
    // this.style.zIndex=-1;
    // zoomImg.style.zIndex=5;
});

//For Zoom Image

curImg.addEventListener("mouseout",function(e){
    // e.offsetX? ofx=e.offsetX:0;
    // e.offsetY? ofy=e.offsetY:0;
    // x=ofx/this.offsetWidth*100;
    // y=ofy/this.offsetHeight*100;
    // this.style.backgroundPosition= x + '% ' + y + '%';
    this.removeAttribute("style");
    this.src=zoomImg;
    curImg.style.cssText = "";
    // this.style.opacity=0;
    // this.style.zIndex=-1;
    // zoomImg.style.zIndex=5;
});

//End Zoom Image


//Fullscreen Zoom (Mobile Zoom)

curImg.addEventListener("click",function(e){
    mobZoom.classList.toggle("hide");
    mobIcons.classList.toggle("hide");
    body.classList.toggle("scrollDis");
    var ent=Object.values(images);
    var ind=ent.findIndex(ent=>ent.data==zoomImg);
    // console.log(ent.findIndex(ent=>ent.data==zoomImg));
    mobSlider.children[ind].scrollIntoView({behavior:"instant"});
})

//End FullScreen Zoom (Mobile Zoom)


remove.addEventListener("click",function(e){
    mobZoom.classList.toggle("hide");
    mobIcons.classList.toggle("hide");
    body.classList.toggle("scrollDis")
})


wrap.addEventListener("touchstart",function(e){
    slideX=e.touches[0].pageX;
    drag=false;
    
})



wrap.addEventListener("touchmove",function(e){
    if(drag==false)
    {
        drag=true;
    }
    
})



document.addEventListener("touchend",function(e){
    // console.log("fff");
    if(e.changedTouches[0].pageX>slideX && drag==true)
    {
        prevImg();
        
    }
    else if(e.changedTouches[0].pageX<slideX && drag==true)
    {
       nextImg();
    //    console.log("fff");
    }
})




wrap.addEventListener("mousedown",function(e){
    slideX=e.pageX;
    drag=false;
})



wrap.addEventListener("mousemove",function(e){
    if(drag==false)
    {
        drag=true;
    }
})



document.addEventListener("mouseup",function(e){
    if(e.pageX>slideX && drag==true)
    {
        prevImg();
    }
    else if(e.pageX<slideX && drag==true)
    {
       nextImg();
    }
})



next.addEventListener("click",nextImg);

prev.addEventListener("click",prevImg);


