var button = document.querySelector("#button");

button.addEventListener(
    "click", function(){
        let q1 = parseInt(document.querySelector("#q1").value);
        let q2 = parseInt(document.querySelector("#q2").value);
        let q3 = parseInt(document.querySelector("#q3").value);
        let operator = document.querySelector("#operator").value;

        if(operator === "+"){
            let qq = document.querySelector("#submit").value = q1 + q2 - q3;
        }
    }
)