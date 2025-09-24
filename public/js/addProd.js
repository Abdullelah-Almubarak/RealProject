var imageInput=document.getElementById("prodImage");
// var formProdcut=document.getElementById("addProduct");
var count=0;
var dicImages={};
var detailsValues={};

var dropImage=document.getElementsByClassName("dropImage")[0];
var formdata=new FormData();
var form=document.getElementById("addProduct");
var prodName=document.getElementById("prodName");
var prodQuantity=document.getElementById("prodQU");
var prodPrice=document.getElementById("prodPrice");
var prodDesc=document.getElementById("prodDesc");
var prodAV=document.getElementById("avButton");

var prodType=null;
var gpu=document.getElementById("gpus");
var cpu=document.getElementById("cpus");
var storage=document.getElementById("storage");
var ram=document.getElementById("rams");

prodQuantity.pattern="[0-9]";
prodPrice.pattern="[0-9]";

var addDiv=document.getElementsByClassName("addProd")[0];
var mes=document.createElement("h1");

var pcPartsBT=document.getElementById("pr");
var pcAccoBT=document.getElementById("ac");
var partsType=document.getElementsByClassName("parts")[0];
var Company=document.getElementById("Company");
var Brand=document.getElementById("Brand");
var selectList=document.getElementById("selectList");
var inputSearch=document.getElementById("inputSearch");

var prdouctdetails=document.getElementsByClassName("details")[0];

var hr=document.createElement("hr");
    hr.id="prHR";

var selectValue=document.getElementById("selectValue");

var acc=document.getElementsByClassName("acco")[0];

function detailsDiv(){
    details=document.createElement("div");
    details.classList.add("details");

    return details;
}

function Input(text,inputName,inputType,spanText){
    
    labelInput=document.createElement("label");
    labelInput.setAttribute("for","Size");
    // size.innerText=" حجم الذاكرة ";
    // size.placeholder=text;
    labelInput.title=text;

    input=document.createElement("input");
    input.id="Size";
    // sizeInp.type="number";
    input.type=inputType;
    input.placeholder=text
    input.title=text;
    // sizeInp.name="size";
    input.name=inputName,

    span=document.createElement("span");
    // span.innerText=" GB"
    span.innerText=spanText;

    labelInput.appendChild(input);
    labelInput.appendChild(span);
    return labelInput;
}



function Select(inputName,nullText)
{
    
    selectDiv=document.createElement("div");
    selectDiv.id="selectDiv";
    selectDiv.classList.add("Select")
    selectDiv.listFor=inputName;

    selectValue=document.createElement("input");
    selectValue.id="selectValue";
    selectValue.readOnly=true;
    selectValue.type="text";
    selectValue.placeholder=nullText;
    selectValue.name=inputName;


    selectIcon=document.createElement("i")
    selectIcon.id="inIcon";
    selectIcon.classList.add("fa");
    selectIcon.classList.add("fa-caret-down");
    
    selectIcon.setAttribute("aria-hidden",true);

    selectList=document.createElement("div");
    selectList.id="selectList";
    selectList.classList.add("selectList");
    selectList.classList.add("hide");

    inputSearch=document.createElement("input");
    inputSearch.id="inputSearch";
    inputSearch.type="text"

    inputSearch.addEventListener("input",e=>{
        // console.log(listContainer.childElementCount)
    var comLen=listContainer.childElementCount;
    // console.log(selectList.childElementCount);
    for(i=1;i<listContainer.childElementCount;i++)
    {
        if(!listContainer.children[i].data.includes(inputSearch.value.toLowerCase()))
        {
            listContainer.children[i].classList.add("hide");
        }
        else
        {
            listContainer.children[i].classList.remove("hide");
        }
    }
    // console.log(inputSearch.value.includes("n"));
    });
    
    selectDiv.addEventListener("click",e=>{
            if(e.target.id!="inputSearch")
            {   
                // e.currentTarget.count=i;
                // console.log(e.currentTarget.count);
                // console.log(e.currentTarget.listFor);
                // selectList=com[i].getElementsByClassName("selectList")[0];
                if(!selectList.classList.contains("hide") && e.currentTarget.querySelector('#selectList').classList.contains("hide"))
                {
                    
                    selectList.classList.add("hide");
                    selectList.classList.remove("openSelect");
                }
                selectList=e.currentTarget.querySelector('#selectList');
                listContainer=e.currentTarget.querySelector("#listContainer");
                // if(e.currentTarget.count==0)
                // {
                //     selectList.count=0;
                    
                // }
                // console.log(gpu.parentNode.name);
                inputSearch=e.currentTarget.querySelector("#inputSearch");
                // console.log(selectList.childElementCount);
                selectValue=e.currentTarget.querySelector('#selectValue');

                 selectList.getElementsByTagName("p")[0].addEventListener("click",function(e){
                    
                    
                    selectValue.placeholder=this.innerText;
                    selectValue.value=null;
                    selectValue.data=null;
                 });    

                e.currentTarget.querySelector('#selectList').classList.toggle("hide");
                e.currentTarget.querySelector('#selectList').classList.toggle("openSelect");
            }
    });
    // companyDiv.addEventListener("click",function(e){
        
    //     if(e.target.id!="inputSearch")
    //     {
    //         selectList.classList.toggle("hide");
    //     }
    // });

    nullValue=document.createElement("p");
    nullValue.innerText=nullText;
    
    listContainer=document.createElement("div");
    listContainer.classList.add("listContainer");
    listContainer.id="listContainer";

    

    

    selectList.appendChild(inputSearch);
    // selectList.appendChild(nullValue);
    selectList.appendChild(listContainer);
    listContainer.appendChild(nullValue);
    
    
    selectDiv.appendChild(selectValue);
    selectDiv.appendChild(selectIcon);
    selectDiv.appendChild(selectList);

    
    return selectDiv;
}



gpu.addEventListener("change",e=>{
    prodType="gpu";
    // console.log(size.querySelector("#Size").value);
    var prdouctdetails=document.getElementsByClassName("details")[0];
    if(document.body.contains(prdouctdetails))
    {
        prdouctdetails.remove();
        // console.log("yes")
    }

    var prdouctdetails=acc.insertAdjacentElement("afterend",detailsDiv());

    // var co=prdouctdetails.insertAdjacentElement("afterbegin",company());

    // var brc=co.getElementsByClassName("selectList")[0];

    // var Brandc=co.insertAdjacentElement("afterend",company());

    var co=prdouctdetails.appendChild(Select("brand","-- البراند --"));
     
    var brc=co.getElementsByClassName("listContainer")[0];

    var Brandc=prdouctdetails.appendChild(Select("company_name","-- الشركة --"));
    

    prdouctdetails.appendChild(Input(" الذاكرة","size","number"," GB"));

    

    // prdouctdetails.insertAdjacentElement("beforeend",sizeInput("حجم الذاكرة","size","number"," GB"));
    

    var com=document.getElementsByClassName("Select");
    for(i=0;i<com.length;i++)
    {
        // com[0].count=0;
        com[i].addEventListener("click",e=>{
        //     if(e.target.id!="inputSearch")
        //     {   
        //         // e.currentTarget.count=i;
        //         // console.log(e.currentTarget.count);
        //         // console.log(e.currentTarget.listFor);
        //         // selectList=com[i].getElementsByClassName("selectList")[0];
        //         if(!selectList.classList.contains("hide") && e.currentTarget.querySelector('#selectList').classList.contains("hide"))
        //         {
                    
        //             selectList.classList.add("hide");
        //         }
        //         selectList=e.currentTarget.querySelector('#selectList');
        //         // if(e.currentTarget.count==0)
        //         // {
        //         //     selectList.count=0;
                    
        //         // }
        //         // console.log(gpu.parentNode.name);
        //         inputSearch=e.currentTarget.querySelector("#inputSearch");
        //         // console.log(selectList.childElementCount);
        //         selectValue=e.currentTarget.querySelector('#selectValue');
                selectList.getElementsByTagName("p")[0].addEventListener("click",function(e){
                    
                    
                    // selectValue.placeholder=this.innerText;
                    // selectValue.value=null;
                    // selectValue.data=null;
                    // console.log(selectValue.data);
                    if(brc.childElementCount>1 && selectList.parentNode.listFor=="company_name")
                    {
                        var brandInp=co.querySelector("#selectValue");
                        // console.log(brc.children[0]);
                        brandInp.value=null;
                        brandInp.data=null;
                        brandInp.placeholder="-- البراند --";

                        var brandLength=brc.childElementCount;
                        for(i=1;i<brandLength;i++)
                        {
                            brc.children[1].remove();
                        }
                                            
                    }
                });

        //         // console.log(e.currentTarget.children[1]);
        //         e.currentTarget.querySelector('#selectList').classList.toggle("hide");
        //     }
        });
    }

    fetch("js/productDetails.json")
    .then(res=>res.json())
    .then(res=>{
        
        for(i=0;i<Object.keys(res[gpu.id]).length;i++)
        {
            var op=document.createElement("p");
            op.innerText=Object.keys(res[gpu.id])[i];
            op.data=Object.keys(res[gpu.id])[i].toLowerCase();
            op.realName=Object.keys(res[gpu.id])[i];
            // console.log(res.gpu[i]);
            op.addEventListener("click",function(e){
                selectValue.data=this.realName;
                selectValue.value=this.realName;
                selectValue.placeholder=this.realName;

                if(brc.childElementCount>1)
                {
                    var brandInp=co.querySelector("#selectValue");
                    brandInp.value=null;
                    brandInp.data=null;
                    brandInp.placeholder="-- البراند --";

                    gpuBrandLEngth=brc.childElementCount;
                    for(i=1;i<gpuBrandLEngth;i++)
                    {
                        // console.log(brc.childElementCount)
                        
                        brc.children[1].remove();
                    }
                }

                for(i=0;i<Object.keys(res[gpu.id][selectValue.data]).length;i++)
                {
                    if(Object.keys(res[gpu.id][selectValue.data])[i]=="brand")
                    {
                        arayName=Object.keys(res[gpu.id][selectValue.data])[i];


                        for(j=0;j<res[gpu.id][selectValue.data][arayName].length;j++)
                        {
                            // console.log("ff");
                            var op=document.createElement("p");
                            // op.value=res[gpu.id][selectValue.data][arayName][j];
                            op.innerText=res[gpu.id][selectValue.data][arayName][j];
                            op.data=res[gpu.id][selectValue.data][arayName][j].toLowerCase();
                            op.realName=res[gpu.id][selectValue.data][arayName][j];
                            op.addEventListener("click",e=>{
                                selectValue.data=e.currentTarget.realName;
                                selectValue.value=e.currentTarget.realName;
                                selectValue.placeholder=e.currentTarget.realName;
                            })
                            brc.appendChild(op);

                        }
                    }
                }
            })
            Brandc.querySelector("#listContainer").appendChild(op);
        }
    })
})



storage.addEventListener("click",e=>{
    detailsValues={};
    prodType="storage";
    var prdouctdetails=document.getElementsByClassName("details")[0];
    if(document.body.contains(prdouctdetails))
    {
        prdouctdetails.remove();
        // console.log("yes")
    }

    detailsValues["size"]=null;
    detailsValues["type"]=null;
    detailsValues["unite_size"]=null;
    detailsValues["company"]=null;

    var prdouctdetails=acc.insertAdjacentElement("afterend",detailsDiv());

    var type=prdouctdetails.appendChild(Select("type","-- النوع --"));

    var unit=prdouctdetails.appendChild(Select("unite_size","-- وحدة القياس --"));

    var size=prdouctdetails.appendChild(Input("مساحة الذاكرة","size","number",""));

    size.querySelector("#Size").addEventListener("input",e=>{
        // console.log(Object.keys(detailsValues).length);
        // console.log(e.currentTarget.value)
        detailsValues["size"]=e.currentTarget.value;
        // console.log(detailsValues["size"]);
        // console.log(Object.keys(detailsValues).length);

    })

    // var list=company.getElementsByClassName("selectList")[0];

    var company=prdouctdetails.appendChild(Select("company_name","-- الشركة --"));

     fetch("js/productDetails.json")
    .then(res=>res.json())
    .then(res=>{
        var keys=Object.keys(res[storage.id]);
        var values=res[storage.id];
        for(i=0;i<keys.length;i++)
        {
           switch(keys[i])
           {
            case "type":{
                for(j=0;j<values[keys[i]].length;j++)
                {
                    // console.log(values[keys[i]][j])
                    var op=document.createElement("p");
                    op.innerText=values[keys[i]][j];
                    op.data=values[keys[i]][j].toLowerCase();
                    op.realName=values[keys[i]][j];
                     op.addEventListener("click",function(e){
                        selectValue.data=this.realName;
                        selectValue.value=this.realName;
                        selectValue.placeholder=this.realName;
                        detailsValues["type"]=this.realName;
                     });    
                    type.querySelector("#listContainer").appendChild(op);
                }
                break;
            }

            case "size_unit":{
                for(j=0;j<values[keys[i]].length;j++)
                {
                    var op=document.createElement("p");
                    op.innerText=values[keys[i]][j];
                    op.data=values[keys[i]][j].toLowerCase();
                    op.realName=values[keys[i]][j];
                    op.addEventListener("click",function(e){
                        selectValue.data=this.realName;
                        selectValue.value=this.realName;
                        selectValue.placeholder=this.realName;
                        detailsValues["unite_size"]=this.realName;
                        // console.log(size.querySelector("#Size").value);
                     });    
                    unit.querySelector("#listContainer").appendChild(op);
                }
                break;
            }

            case "Company":{
                for(j=0;j<values[keys[i]].length;j++)
                {
                    var op=document.createElement("p");
                    op.innerText=values[keys[i]][j];
                    op.data=values[keys[i]][j].toLowerCase();
                    op.realName=values[keys[i]][j];
                    op.addEventListener("click",function(e){
                        selectValue.data=this.realName;
                        selectValue.value=this.realName;
                        selectValue.placeholder=this.realName;
                        detailsValues["company"]=this.realName;
                     });    
                    company.querySelector("#listContainer").appendChild(op);
                }
                break;
            }

           }
        }
    });

})


ram.addEventListener("click",e=>{
    var prdouctdetails=document.getElementsByClassName("details")[0];
    if(document.body.contains(prdouctdetails))
    {
        prdouctdetails.remove();
        // console.log("yes")
    }

    var prdouctdetails=acc.insertAdjacentElement("afterend",detailsDiv());

    

    var company=prdouctdetails.appendChild(Select("company_name","-- الشركة --"));

    prdouctdetails.appendChild(Input("مساحة الذاكرة","size","number",""));

    prdouctdetails.appendChild(Input("سرعة الرام","speed","number"," MHz"));


    var type=prdouctdetails.appendChild(Select("type","-- النوع --"));

    var color=prdouctdetails.appendChild(Select("color","-- اللون --"));
    

    // var list=company.getElementsByClassName("selectList")[0];

    

     fetch("js/productDetails.json")
    .then(res=>res.json())
    .then(res=>{
        var keys=Object.keys(res[ram.id]);
        var values=res[ram.id];
        for(i=0;i<keys.length;i++)
        {
           switch(keys[i])
           {
            case "type":{
                for(j=0;j<values[keys[i]].length;j++)
                {
                    // console.log(values[keys[i]][j])
                    var op=document.createElement("p");
                    op.innerText=values[keys[i]][j];
                    op.data=values[keys[i]][j].toLowerCase();
                    op.realName=values[keys[i]][j];
                     op.addEventListener("click",function(e){
                        selectValue.data=this.realName;
                        selectValue.value=this.realName;
                        selectValue.placeholder=this.realName;
                     });    
                    type.querySelector("#listContainer").appendChild(op);
                }
                break;
            }

            case "color":{
                for(j=0;j<values[keys[i]].length;j++)
                {
                    var op=document.createElement("p");
                    op.innerText=values[keys[i]][j];
                    op.data=values[keys[i]][j].toLowerCase();
                    op.realName=values[keys[i]][j];
                    op.addEventListener("click",function(e){
                        selectValue.data=this.realName;
                        selectValue.value=this.realName;
                        selectValue.placeholder=this.realName;
                     });    
                    color.querySelector("#listContainer").appendChild(op);
                }
                break;
            }

            case "Company":{
                for(j=0;j<values[keys[i]].length;j++)
                {
                    var op=document.createElement("p");
                    op.innerText=values[keys[i]][j];
                    op.data=values[keys[i]][j].toLowerCase();
                    op.realName=values[keys[i]][j];
                    op.addEventListener("click",function(e){
                        selectValue.data=this.realName;
                        selectValue.value=this.realName;
                        selectValue.placeholder=this.realName;
                     });    
                    company.querySelector("#listContainer").appendChild(op);
                }
                break;
            }

           }
        }
    });

})


cpu.addEventListener("click",e=>{
    var prdouctdetails=document.getElementsByClassName("details")[0];
    if(document.body.contains(prdouctdetails))
    {
        prdouctdetails.remove();
        // console.log("yes")
    }

    var prdouctdetails=acc.insertAdjacentElement("afterend",detailsDiv());

    var company=prdouctdetails.appendChild(Select("company_name","-- الشركة --"));
    var overClock=prdouctdetails.appendChild(Input("","overclockable","checkbox","قابل للكسر"));
    var numOfCores=prdouctdetails.appendChild(Input("عدد الأنوية","cores","number",""));
    numOfCores.setAttribute("min",1);
    var gen=prdouctdetails.appendChild(Select("generation","-- الجيل --"));
    var series=prdouctdetails.appendChild(Select("series","-- سلسلة --"));
    var socket=prdouctdetails.appendChild(Select("socket","-- السوكيت --"));

    company.addEventListener("click",e=>{
        selectList.getElementsByTagName("p")[0].addEventListener("click",e=>{

               if(gen.querySelector("#listContainer").childElementCount>1 )
                    {
                        var listValue=gen.querySelector("#selectValue");
                        listValue.data=null;
                        listValue.value=null;
                        listValue.placeholder="-- الجيل --";

                        var listLength=gen.querySelector("#listContainer").childElementCount;
                        for(g=1;g<listLength;g++)
                        {
                            // console.log(gen.querySelector("#selectList").childElementCount)
                            gen.querySelector("#listContainer").children[1].remove();
                        }
                    }

                    if(socket.querySelector("#listContainer").childElementCount>1)
                    {
                        var listValue=socket.querySelector("#selectValue");
                        listValue.data=null;
                        listValue.value=null;
                        listValue.placeholder="-- السوكيت --";

                        var listLength=socket.querySelector("#listContainer").childElementCount;

                        for(so=1;so<listLength;so++)
                        {
                            socket.querySelector("#listContainer").children[1].remove();
                        }
                    }

                    if(series.querySelector("#listContainer").childElementCount>1)
                    {
                        var listValue=series.querySelector("#selectValue");
                        listValue.data=null;
                        listValue.value=null;
                        listValue.placeholder="-- سلسلة --";

                        var listLength=series.querySelector("#listContainer").childElementCount;
                        for(se=1;se<listLength;se++)
                        {
                            series.querySelector("#listContainer").children[1].remove();
                        }
                    }
        })
    })
    
    fetch("js/productDetails.json")
    .then(res=>res.json())
    .then(res=>{
        
        var keys=Object.keys(res[cpu.id]);
        values=Object.keys(res[cpu.id][keys[0]]);
        // console.log(Object.keys(res[cpu.id][keys[0]][values[0]]));
        for(i=0;i<values.length;i++)
        {
            var op=document.createElement("p");
                op.innerText=values[i];
                op.data=values[i].toLowerCase();
                op.realName=values[i];
                op.addEventListener("click",function(e){
                    selectValue.data=this.realName;
                    selectValue.value=this.realName;
                    selectValue.placeholder=this.realName;
                    
                    // console.log(gen.querySelector("#selectList").childElementCount)

                    if(gen.querySelector("#listContainer").childElementCount>1 )
                    {
                        var listLength=gen.querySelector("#listContainer").childElementCount;
                        for(g=1;g<listLength;g++)
                        {
                            // console.log(gen.querySelector("#selectList").childElementCount)
                            gen.querySelector("#listContainer").children[1].remove();
                        }
                    }

                    if(socket.querySelector("#listContainer").childElementCount>1)
                    {
                        var listLength=socket.querySelector("#listContainer").childElementCount;

                        for(so=1;so<listLength;so++)
                        {
                            socket.querySelector("#listContainer").children[1].remove();
                        }
                    }

                    if(series.querySelector("#listContainer").childElementCount>1)
                    {
                        var listLength=series.querySelector("#listContainer").childElementCount;
                        for(se=1;se<listLength;se++)
                        {
                            series.querySelector("#listContainer").children[1].remove();
                        }
                    }
                    // console.log(i)
                    var etKeys=Object.keys(res[cpu.id][keys[0]][selectValue.data]);
                    
                    for(j=0;j<etKeys.length;j++)
                    {
                        var curArray=res[cpu.id][keys[0]][selectValue.data][etKeys[j]]
                        // console.log(curArray.length)

                        switch(etKeys[j]){
                            case"generation":{
                                for(k=0;k<curArray.length;k++)
                                {
                                    var op=document.createElement("p");
                                        op.innerText=curArray[k];
                                        op.data=curArray[k].toLowerCase();
                                        op.realName=curArray[k];
                                        op.addEventListener("click",function(e){
                                            selectValue.data=this.realName;
                                            selectValue.value=this.realName;
                                            selectValue.placeholder=this.realName;
                                    });
                                    gen.querySelector("#listContainer").appendChild(op);
                                }
                                break;
                            }

                             case"series":{
                                for(k=0;k<curArray.length;k++)
                                {
                                    var op=document.createElement("p");
                                        op.innerText=curArray[k];
                                        op.data=curArray[k].toLowerCase();
                                        op.realName=curArray[k];
                                        op.addEventListener("click",function(e){
                                            selectValue.data=this.realName;
                                            selectValue.value=this.realName;
                                            selectValue.placeholder=this.realName;
                                    });
                                    series.querySelector("#listContainer").appendChild(op);
                                }
                                break;
                            }

                             case"socket":{
                                for(k=0;k<curArray.length;k++)
                                {
                                    var op=document.createElement("p");
                                        op.innerText=curArray[k];
                                        op.data=curArray[k].toLowerCase();
                                        op.realName=curArray[k];
                                        op.addEventListener("click",function(e){
                                            selectValue.data=this.realName;
                                            selectValue.value=this.realName;
                                            selectValue.placeholder=this.realName;
                                    });
                                    socket.querySelector("#listContainer").appendChild(op);
                                }
                                break;
                            }
                        }
                    }
                });
            company.querySelector("#listContainer").appendChild(op);
                
        }
    });    
})

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
    formdata.append("prodType",prodType);

    switch(prodType){
        case "storage":{
            formdata.append("size",detailsValues["size"]+" "+detailsValues["unite_size"]);
            formdata.append("type",detailsValues["type"]);
            formdata.append("company_name",detailsValues["company"]);
        }
    }

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
                prodType=null;
                dicImages={};
                detailsValues={};
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
                prodType=null;
                dicImages={};
                detailsValues={};
                count=0;
                formdata=new FormData();
                form.reset();
                if(document.contains(document.getElementsByClassName("error")[0]))
                {
                    mes.classList.remove("success")
                }
                console.log(resData.error);
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
    if(e.target.id!="selectValue" && e.target.id!="inputSearch" && !selectList.classList.contains("hide"))
    {
        // console.log(e.currentTarget)
        // console.log(e.querySelector("#selectList"))
        selectList.classList.add("hide");
        selectList.classList.remove("openSelect");
    }
})
