    let num1 = document.getElementById("numberOne");
    let num2 = document.getElementById("numberTwo");
    let ans = document.getElementById("answer");

    document.getElementById("add").addEventListener("click", function(){
        ans.value=parseInt(num1.value)+parseInt(num2.value);
    });
    document.getElementById("subtract").addEventListener("click", function(){
        ans.value=parseInt(num1.value)-parseInt(num2.value);
    });
    document.getElementById("multiply").addEventListener("click", function(){
        ans.value=parseInt(num1.value)*parseInt(num2.value);
    });
    document.getElementById("divide").addEventListener("click", function(){
        ans.value=parseInt(num1.value)/parseInt(num2.value);
    });
