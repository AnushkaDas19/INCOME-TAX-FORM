function taxableincome() {
    event.preventDefault();
    function tax() {
        if (incomefinal <= 300000) {
            return 0;
        } else if (incomefinal <= 600000) {
            return (incomefinal - 300000) * (5 / 100);
        } else if (incomefinal <= 900000) {
            return 15000 + ((10 / 100) * (incomefinal - 600000));
        } else if (incomefinal <= 1200000) {
            return 45000 + ((15 / 100) * (incomefinal - 900000));
        } else if (incomefinal <= 1500000) {
            return 90000 + ((20 / 100) * (incomefinal - 1200000));
        } else {
            return 150000 + ((30 / 100) * (incomefinal - 1500000));
        }
    }
    function income() {
        var salary = document.getElementById('salary').value;
        var houseproperty = document.getElementById('houseincome').value;
        var othersources = document.getElementById('othersource').value;
        return parseInt(salary) + parseInt(houseproperty) + parseInt(othersources);
    }
    function deduction() {
        var d80c = parseInt(document.getElementById('d80c').value);
        if (d80c > 150000) {
            var a = 150000;
        }
        else {
            a = d80c;
        }
        var nps = parseInt(document.getElementById('dnps').value);
        if (nps > 50000) {
            var b = 50000;
        } else {
            b = nps;
        }
        var medicalinsurance = parseInt(document.getElementById('medicalinsurance').value);
        if (medicalinsurance > 25000) {
            var c = 25000;
        } else {
            c = medicalinsurance;
        }
        console.log(a, b, c);
        return a + b + c;
    }
    function capitalgain() {
        var capitalgain = document.getElementById('capitalgain').value;
        return (10 / 100) * parseInt(capitalgain);
    }
    var incomefinal = income() - deduction();
    var capitalgain = capitalgain();
    var taxfinal = tax();
    var final = incomefinal - taxfinal + capitalgain
    console.log(final);
}


