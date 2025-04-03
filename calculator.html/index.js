var outputScreen=document.getElementById("output-screen");
function display(num){
    outputScreen.value +=num;
}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value)
    }
    catch(err){
        alert("invalid")
    }
}
function cancel(){
    outputScreen.value=""
}
function del(){
    outputScreen.value=outputScreen.value.slice(1,-1)
}
