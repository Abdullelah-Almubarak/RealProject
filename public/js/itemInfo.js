var slider=document.getElementsByClassName("slider")[0];
var wrap=document.getElementsByClassName("wrapper")[0];
var next=document.getElementsByClassName("next")[0];
var prev=document.getElementsByClassName("prev")[0];
var images=slider.getElementsByTagName("img");
var imgProd=document.getElementsByClassName("info2")[0];
var curImg=imgProd.getElementsByTagName("img")[0]
var slideX=0;
var drag;

for(i=0;i<images.length;i++)
{
    images[i].data=images[i].src;
    // alert(images[i].data);
    images[i].addEventListener("click",function x(e){
        if(drag==false)
        {
            curImg.src=this.data;
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


