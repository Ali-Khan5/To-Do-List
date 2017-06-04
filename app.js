var arr=[];


function add1(){
    var value=document.getElementById("txt").value;
    var v=value;
     arr.push(v);
    var list1=document.createElement("H2");
    var txt=document.createTextNode(arr[arr.length-1]);
    list.appendChild(txt);
    document.getElementById("list").appendChild(list1);
   // arr.push=value;

}




function removeStart(){
    arr.shift();
    var list=document.getElementById("list");
    while (list.hasChildNodes()) {   
    list.removeChild(list.firstChild);
}
    for(var i=0;i<=arr.length-1;i++){

    var list1=document.createElement("H2");
    var txt=document.createTextNode(arr[i]);
    list.appendChild(txt);
    document.getElementById("list").appendChild(list1);
    
}

}

function removeEnd(){
    arr.pop();
    var list=document.getElementById("list");
    while (list.hasChildNodes()) {   
    list.removeChild(list.firstChild);
}
    for(var i=0;i<=arr.length-1;i++){

    var list1=document.createElement("H2");
    var txt=document.createTextNode(arr[i]);
    list.appendChild(txt);
    document.getElementById("list").appendChild(list1);
    
}

}
