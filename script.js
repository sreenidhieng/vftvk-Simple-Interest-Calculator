function Calculate()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = (principal * years * rate) /100;
    document.getElementById("result").innerHTML="Your simple interest is:" + interest;
}
   


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
