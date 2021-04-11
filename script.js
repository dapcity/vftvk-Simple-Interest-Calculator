function compute()
//Calculates the interest and outputs it to page
{
    principle = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principle * rate * years / 100
    var currentYear = 2021;
    
    noOfYears = +currentYear + +years;

    var result = document.getElementById('result');
    result = "If you deposit " + principle + ", <br> at an interest rate of " + rate + "%. <br> You will receive an amount of " + interest + ", <br> in the year " + noOfYears

    document.getElementById("result").innerHTML = result

    
}

function validateForm(){
//validates that there field is not blank or has a 0
    principle = document.getElementById("principal").value;

    if (principle == "" || principle == "0") {
        alert("Enter numnber greater than 0");
        return false;
        }

}
