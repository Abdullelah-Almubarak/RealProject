var imageInput=document.getElementById("prodImage");
var formProdcut=document.getElementById("addProduct");
var count=0;
var dicImages={};

var dropImage=document.getElementsByClassName("dropImage")[0];
var formdata=new FormData();
var form=document.getElementById("addProduct");
var prodName=document.getElementById("prodName");
var prodQuantity=document.getElementById("prodQU");
var prodPrice=document.getElementById("prodPrice");
var prodDesc=document.getElementById("prodDesc");
var prodAV=document.getElementById("avButton");

prodQuantity.pattern="[0-9]";
prodPrice.pattern="[0-9]";

var addDiv=document.getElementsByClassName("addProd")[0];
var mes=document.createElement("h1");

// if(document.contains(document.getElementsByClassName("error")[0]))
// {   
//     document.getElementsByClassName("error")[0].classList.add("success");
//      document.getElementsByClassName("error")[0].classList.remove("error");
//     // alert(document.getElementsByClassName("error")[0].classList.value.includes("error"));
   
// }
// else
// {
//     alert("gg");
// }


dropImage.addEventListener("dragover",function(e){
    e.preventDefault();
    dropImage.classList.add("dragImage");
});

dropImage.addEventListener("dragleave",function(e){
    e.preventDefault();
    dropImage.classList.remove("dragImage");
});

dropImage.addEventListener("drop",function(e){
    e.preventDefault();
    dropImage.classList.remove("dragImage");
    
    
    imageInput.files=e.dataTransfer.files;

    if(imageInput.nextSibling.id!="divImages")
    {
        var images=[];
        images=imageInput.files;
        var imgDiv=document.createElement("div");
        imgDiv.id="divImages";
        if(images)
        {
           
            Array.from(images).forEach((imageFile) => {
                dicImages[count]=imageFile;
                
                var image=document.createElement("img");
                var etDivImg=document.createElement("div");
                etDivImg.id="eternalDivImg";

                var etIcon=document.createElement("i");
                etIcon.setAttribute("aria-hidden","true")
                etIcon.classList.add("fa","fa-times","xIcon","xIconH");

               

                image.src=URL.createObjectURL(imageFile);
                image.alt="imageTest";
                image.width=360;
                image.height=304;
                image.id="addedImg";
                image.data=count;
                
                
                count+=1;
                
                etDivImg.appendChild(image)
                etDivImg.appendChild(etIcon);

                 image.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                etIcon.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                 etIcon.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH")
                });

                etIcon.addEventListener("click",function(e){
                    delete dicImages[this.previousSibling.data];
                    
                    this.parentNode.remove();
                });

                 image.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH");
                });

                imgDiv.appendChild(etDivImg);
            });
            
        }
        
        imageInput.insertAdjacentElement("afterend",imgDiv)
        for(i=0;i<Object.keys(dicImages).length;i++)
        {
            console.log(dicImages[i].name);
        }
    }
    else if(imageInput.nextSibling.id=="divImages")
    {
        

        var imgDiv=document.getElementById("divImages");
        var images=[];
        images=imageInput.files;

        if(images)
        {
            
            Array.from(images).forEach((imageFile) => {
                dicImages[count]=imageFile;

                var image=document.createElement("img");
                
                var etDivImg=document.createElement("div");
                etDivImg.id="eternalDivImg";

                var etIcon=document.createElement("i");
                etIcon.setAttribute("aria-hidden","true")
                etIcon.classList.add("fa","fa-times","xIcon","xIconH");

                
                image.src=URL.createObjectURL(imageFile);
                image.alt="imageTest";
                image.width=304;
                image.height=304;
                image.id="addedImg";
                image.data=count;
                count+=1;
                
                etDivImg.appendChild(image)
                etDivImg.appendChild(etIcon);

                 image.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                etIcon.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                etIcon.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH")
                });

                 etIcon.addEventListener("click",function(e){
                    delete dicImages[this.previousSibling.data];
                    this.parentNode.remove();
                });

                 image.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH");
                });

                imgDiv.appendChild(etDivImg);
            });
            
        }        
    }
   
});




imageInput.addEventListener("change",function(e){

    if(imageInput.nextSibling.id!="divImages")
    {
        
        var images=[];
  
        images=imageInput.files;

        var imgDiv=document.createElement("div");
        imgDiv.id="divImages";
        
        if(images)
        {
            
            Array.from(images).forEach((imageFile) => {
                dicImages[count]=imageFile;

                 var image=document.createElement("img");
                var etDivImg=document.createElement("div");
                etDivImg.id="eternalDivImg";

                var etIcon=document.createElement("i");
                etIcon.setAttribute("aria-hidden","true")
                etIcon.classList.add("fa","fa-times","xIcon","xIconH");

                image.src=URL.createObjectURL(imageFile);
                image.alt="imageTest";
                image.width=304;
                image.height=304;
                image.id="addedImg";
                image.data=count;
                count+=1;
                
                etDivImg.appendChild(image)
                etDivImg.appendChild(etIcon);

                 image.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                etIcon.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                 etIcon.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH")
                });

                etIcon.addEventListener("click",function(e){
                    delete dicImages[this.previousSibling.data];
                    this.parentNode.remove();
                });

                 image.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH");
                });

                imgDiv.appendChild(etDivImg);
            });
            
        }
        
        imageInput.insertAdjacentElement("afterend",imgDiv)
      
    }
    else if(imageInput.nextSibling.id=="divImages")
    {
        var imgDiv=document.getElementById("divImages");
        var images=[];
        images=imageInput.files;

        
        if(images)
        {
            
            Array.from(images).forEach((imageFile) => {
                dicImages[count]=imageFile;

                 var image=document.createElement("img");
                
                var etDivImg=document.createElement("div");
                etDivImg.id="eternalDivImg";

                var etIcon=document.createElement("i");
                etIcon.setAttribute("aria-hidden","true")
                etIcon.classList.add("fa","fa-times","xIcon","xIconH");

                image.src=URL.createObjectURL(imageFile);
                image.alt="imageTest";
                image.width=304;
                image.height=304;
                image.id="addedImg";
                image.data=count;
                count+=1;
                
                
                etDivImg.appendChild(image)
                etDivImg.appendChild(etIcon);

                 image.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                etIcon.addEventListener("mouseover",function(e){
                    this.parentNode.lastChild.classList.remove("xIconH")
                });

                 etIcon.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH")
                });

                 etIcon.addEventListener("click",function(e){
                    delete dicImages[this.previousSibling.data];
                    this.parentNode.remove();
                });

                 image.addEventListener("mouseleave",function(e){
                    this.parentNode.lastChild.classList.add("xIconH");
                });

                
                imgDiv.appendChild(etDivImg);
            });
            
        }
 
    }
    
});


form.addEventListener("submit",function(e){
    var imgCont=Object.keys(dicImages).length;
    if(prodName.value=="" || (prodQuantity.value=="" || prodQuantity.value<=0) || (prodPrice.value=="" || prodPrice.value<=0) || prodDesc=="" || imgCont==0)
    {
        e.preventDefault();
        console.log("name: ",prodName.value=="",
            "\n quantity: ",prodQuantity.value.match("[A-Z]"),
            "\n Price: ",prodPrice.value=="",
            "\n Desc: ",prodDesc.value=="",
            "\n Images count: ",imgCont==0
        );
        return;
    }
    
     e.preventDefault();
    
    // var fo=new FormData(form);
    formdata.append("_token",document.querySelector('input[name=_token]').value)
    formdata.append("prodName",prodName.value);
    formdata.append("prodQU",prodQuantity.value);
    formdata.append("prodPrice",prodPrice.value);
    formdata.append("prodDesc",prodDesc.value);
    if(prodAV.checked)
    {
         formdata.append("avButton","on");
    }
    
    for(i=0;i<count;i++)
    {
        if(dicImages[i]!=null)
        {
             formdata.append("prodImage[]",dicImages[i]);
        }
       
    }
    
//    var xhttp=new XMLHttpRequest();
//     xhttp.open("POST","/addProd");
//     xhttp.responseType="json";
//    xhttp.onload=()=>{
//     console.log(xhttp.response["success"]);
//     console.log("success" in xhttp.response);
//    }
//    xhttp.send(formdata);

    // for(i of formdata)
    // {
    //     console.log(i[0],i[1]);
    // }
    
    fetch("/addProd",{
        method:"POST",
        body:formdata,
        // headers:{
        //     // 'Content-Type': 'application/json',
        //     // 'Accept': 'application/json',
        //     // 'url': '/addProd',
        //     // "X-CSRF-Token": document.querySelector('input[name=_token]').value
        // }
    })
    .then(res=>{
        if(!res.ok)
        {
            console.log("حدث خطأ");
            return;
        }
        return res.json();
       
        
    })
    // .then(res=>res.json())
    .then(resData=>{
            if(resData.success)
            {
                // alert(resData.success);
                //  if(document.body.contains(document.getElementsByClassName("success")))
                // {
                //     document.getElementsByClassName("success")[0].remove();
                // }
                // else if(document.body.contains(document.getElementsByClassName("error")))
                // {
                //     document.getElementsByClassName("error")[0].remove();
                // }


                if(document.body.contains(document.getElementById("divImages")))
                {
                    document.getElementById("divImages").remove();
                }
                dicImages={};
                count=0;
                formdata=new FormData();
                form.reset();
                mes.innerText=resData.success;
                if(document.contains(document.getElementsByClassName("error")[0]))
                {
                    mes.classList.remove("error")
                }
                mes.classList.add("success");
                addDiv.insertAdjacentElement("beforebegin",mes);
            }
            else if(resData.error)
            {
                // alert(resData.error);
                // if(document.body.contains(document.getElementsByClassName("success")))
                // {
                //     document.getElementsByClassName("success")[0].remove();
                // }
                // else if(document.body.contains(document.getElementsByClassName("error")))
                // {
                //     document.getElementsByClassName("error")[0].remove();
                // }

                if(document.body.contains(document.getElementById("divImages")))
                {
                    document.getElementById("divImages").remove();
                }
                dicImages={};
                count=0;
                formdata=new FormData();
                form.reset();
                if(document.contains(document.getElementsByClassName("error")[0]))
                {
                    mes.classList.remove("success")
                }
                mes.innerText=resData.error;
                mes.classList.add("error");
                addDiv.insertAdjacentElement("beforebegin",mes)
            }
        })
    .then(res=>console.log(res))

    .catch(er=>{
        return console.log(er);
        
    })
})
