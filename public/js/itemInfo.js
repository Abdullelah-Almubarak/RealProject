var slider=document.getElementsByClassName("slider")[0];
var next=document.getElementsByClassName("next")[0];
var prev=document.getElementsByClassName("prev")[0];
var images=slider.getElementsByTagName("img");
var imgProd=document.getElementsByClassName("info2")[0];
var curImg=imgProd.getElementsByTagName("img")[0]

for(i=0;i<images.length;i++)
{
    images[i].addEventListener("click",function(e){
        curImg.src=this.src;
    })
}

next.addEventListener("click",function(e){
    slider.scrollLeft+=slider.scrollWidth/5;
});

prev.addEventListener("click",function(e){
    // alert(slider.scrollLeft)
    slider.scrollLeft-=slider.scrollWidth/5;
});


