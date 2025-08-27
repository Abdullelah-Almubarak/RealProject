var imageInput=document.getElementById("prodImage");
// var formProdcut=document.getElementById("addProduct");
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

var gpu=document.getElementById("gpus");

prodQuantity.pattern="[0-9]";
prodPrice.pattern="[0-9]";

var addDiv=document.getElementsByClassName("addProd")[0];
var mes=document.createElement("h1");

var pcPartsBT=document.getElementById("pr");
var pcAccoBT=document.getElementById("ac");
var partsType=document.getElementsByClassName("parts")[0];
var gpuCompany=document.getElementById("gpuCompany");
var gpuBrand=document.getElementById("gpuBrand");
var compList=document.getElementById("compList");
var companySearch=document.getElementById("companySearch");

var hr=document.createElement("hr");
    hr.id="prHR";

    var compVal=document.getElementById("compVal");


    

compList.getElementsByTagName("p")[0].addEventListener("click",function(e){
    compVal.placeholder=this.innerText;
    compVal.value=this.innerText;
    compVal.data=this.innerText;
    if(gpuBrand.length>1)
    {
        var brandLength=gpuBrand.length;
        for(i=1;i<brandLength;i++)
        {
            gpuBrand.children[1].remove();
        }
                            
    }
});


gpu.addEventListener("change",e=>{
    fetch("js/companyInfo.json")
    .then(res=>res.json())
    .then(res=>{
        console.log(res[gpu.id]["Nvidia"][0]);
        for(i=0;i<Object.keys(res[gpu.id]).length;i++)
        {
             var op=document.createElement("p");
            op.innerText=Object.keys(res[gpu.id])[i];
            op.data=Object.keys(res[gpu.id])[i].toLowerCase();
            op.realName=Object.keys(res[gpu.id])[i];
            // console.log(res.gpu[i]);
            op.addEventListener("click",function(e){
                compVal.data=this.realName;
                compVal.value=this.realName;
                compVal.placeholder=this.realName;

                if(gpuBrand.childElementCount>1)
                {
                    gpuBrandLEngth=gpuBrand.childElementCount;
                    for(i=1;i<gpuBrandLEngth;i++)
                    {
                        gpuBrand[1].remove();
                    }
                }

                for(i=0;i<Object.keys(res[gpu.id][compVal.data]).length;i++)
                {
                    if(Object.keys(res[gpu.id][compVal.data])[i]=="brand")
                    {
                        arayName=Object.keys(res[gpu.id][compVal.data])[i];


                        for(j=0;j<res[gpu.id][compVal.data][arayName].length;j++)
                        {

                            var op=document.createElement("option");
                            op.value=res[gpu.id][compVal.data][arayName][j];
                            op.innerText=res[gpu.id][compVal.data][arayName][j];
                            gpuBrand.appendChild(op);

                        }
                    }
                }
            })
            compList.appendChild(op);
        }
    })
})

// gpu.addEventListener("change",function(e){
//     fetch("js/companyInfo.json")
//     .then(res=>res.json())
//     .then(res=>{
//         console.log(res[gpu.id]["Nvidia"]);
//         for(i=0;i<res.gpu.length;i++)
//         {
            
//             var op=document.createElement("p");
//             op.innerText=res.gpu[i];
//             op.data=res.gpu[i].toLowerCase();
//             op.realName=res.gpu[i];
//             // console.log(res.gpu[i]);
//             op.addEventListener("click",function(e){
//                 // compVal.value=this.innerText;
//                 compVal.data=this.realName;
//                 compVal.placeholder=this.innerText;

//                  if(compVal.data=="Nvidia")
//                 {
//                     fetch("js/companyInfo.json")
//                     .then(res=>res.json())
//                     .then(res=>{
//                         if(gpuBrand.length>1)
//                         {
//                             var brandLength=gpuBrand.length;
//                             for(i=1;i<brandLength;i++)
//                             {
//                                 gpuBrand.children[1].remove();
//                             }

//                             for(i=0;i<res.nvidia_brand.length;i++)
//                             {
//                                 var op=document.createElement("option");
//                                 op.value=res.nvidia_brand[i];
//                                 op.innerText=res.nvidia_brand[i];
//                                 gpuBrand.appendChild(op);
//                             }
//                         }
//                         else
//                         {
//                             for(i=0;i<res.nvidia_brand.length;i++)
//                             {
//                                 var op=document.createElement("option");
//                                 op.value=res.nvidia_brand[i];
//                                 op.innerText=res.nvidia_brand[i];
//                                 gpuBrand.appendChild(op);
//                             }
//                         }
                        
//                     })
//                 }
//                 else if(compVal.data=="AMD")
//                 {
//                     if(gpuBrand.length>1)
//                         {
//                             var brandLength=gpuBrand.length;
//                             for(i=1;i<brandLength;i++)
//                             {
                                
//                                 gpuBrand.children[1].remove();
//                             }
                            
//                         }
//                 }
//                 else if(compVal.data=="")
//                 {
//                     if(gpuBrand.length>1)
//                         {
//                             var brandLength=gpuBrand.length;
//                             for(i=1;i<brandLength;i++)
//                             {
//                                 gpuBrand.children[1].remove();
//                             }
                            
//                         }
//                 }

//             });
//             compList.appendChild(op);
           
//         }
        
//     });
    
// });


companySearch.addEventListener("input",function(e){
    var comLen=compList.childElementCount;
    // console.log(compList.childElementCount);
    for(i=2;i<compList.childElementCount;i++)
    {
        if(!compList.children[i].data.includes(companySearch.value.toLowerCase()))
        {
            compList.children[i].classList.add("hide");
        }
        else
        {
            compList.children[i].classList.remove("hide");
        }
    }
    // console.log(companySearch.value.includes("n"));
})



gpuCompany.addEventListener("click",function(e){
    if(e.target.id!="companySearch")
    {
        compList.classList.toggle("hide");
    }
});
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





form.addEventListener("submit",function x(e){
    var imgCont=Object.keys(dicImages).length;
    

    if(prodName.value=="" || (prodQuantity.value=="" || prodQuantity.value<=0) || (prodPrice.value=="" || prodPrice.value<=0) || prodDesc.value=="" || imgCont==0)
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
    

});

document.addEventListener("click",e=>{
    // console.log(e.target.parentNode.parentNode.id);
    if(e.target.id!="compVal" && e.target.id!="companySearch" && !compList.classList.contains("hide"))
    {
        compList.classList.add("hide");
    }
})
