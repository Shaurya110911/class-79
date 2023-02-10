array=[];
function submit(){
    var n1=document.getElementById("name_1").value ;
    var n2=document.getElementById("name_2").value ;
    var n3=document.getElementById("name_3").value ;
    var n4=document.getElementById("name_4").value ;
    array.push(n1);
    array.push(n2);
    array.push(n3);
    array.push(n4);
    console.log(array);
    document.getElementById("display").innerHTML=array;
    document.getElementById("sor").style.display="inline-block";
    document.getElementById("sub").style.display="none";
}
function sorting(){
    array.sort();
    console.log(array);
    document.getElementById("display").innerHTML=array;
}
