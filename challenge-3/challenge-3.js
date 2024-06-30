function netSalary() { 
    const input = document.getElementById("promptbutton");   

    input.addEventListener('click', function() {
        let salary = prompt("Enter your gross salary(basic salary plus benefits, if any):"); // prompt upon clicking the button, enabling user to input data
        let basicSalary = parseInt(salary, 10); 


        let payee;  // calculation of payee according to the respective tax bracket the user's income will fall under
        if (basicSalary <= 24000) {
            payee = (basicSalary * 10.0) / 100;
        } else if (basicSalary >= 24001 && basicSalary <= 32333) {
            payee = (basicSalary * 25.0) / 100;
        } else if (basicSalary >= 32334 && basicSalary <= 500000) {
            payee = (basicSalary * 30.0) / 100;
        } else if (basicSalary >= 500001 && basicSalary <= 800000) {
            payee = (basicSalary * 32.5) / 100;
        } else {
            payee = (basicSalary * 35.0) / 100;
        }


        let nhif;   // calculation of nhif deductions according to the respective income bracket the user's data will fall under
        if (basicSalary <= 5999) {
            nhif = 150;
        } else if (basicSalary >= 6000 && basicSalary <= 7999) {
            nhif = 300;
        } else if (basicSalary >= 8000 && basicSalary <= 11999) {
            nhif = 400;
        } else if (basicSalary >= 12000 && basicSalary <= 14999) {
            nhif = 500;
        } else if (basicSalary >= 15000 && basicSalary <= 19999) {
            nhif = 600;
        } else if (basicSalary >= 20000 && basicSalary <= 24999) {
            nhif = 750;
        } else if (basicSalary >= 25000 && basicSalary <= 29999) {
            nhif = 850;
        } else if (basicSalary >= 30000 && basicSalary <= 34999) {
            nhif = 900;
        } else if (basicSalary >= 35000 && basicSalary <= 39999) {
            nhif = 950;
        } else if (basicSalary >= 40000 && basicSalary <= 44999) {
            nhif = 1000;
        } else if (basicSalary >= 45000 && basicSalary <= 49999) {
            nhif = 1100;
        } else if (basicSalary >= 50000 && basicSalary <= 59999) {
            nhif = 1200;
        } else if (basicSalary >= 60000 && basicSalary <= 69999) {
            nhif = 1300;
        } else if (basicSalary >= 70000 && basicSalary <= 79999) {
            nhif = 1400;
        } else if (basicSalary >= 80000 && basicSalary <= 89999) {
            nhif = 1500;
        } else if (basicSalary >= 90000 && basicSalary <= 99999) {
            nhif = 1600;
        } else {
            nhif = 1700;
        }


        const tier1max = 7000;      // maximum pensionable pay for tier I
        const tier2max = 36000;    // maximum pensionable pay for tier II

        let tier1 = 0;      // tier I and II contributions as deductibles
        let tier2 = 0;
        let tier2Salary = basicSalary - tier1max;   // remainder from tier I pensionable pay, to be used in tier 2


        let nssf;
        // tier I pension deductions
        if (basicSalary <= tier1max) {        // when pay is less than or equal to 7000
            tier1 = (basicSalary * 6) / 100;
        } else {
            tier1 = (tier1max * 6) / 100;     // pay above 7000
        }

        // tier II deductions
        if (basicSalary > tier1max) {           // pensionable income is more than 7000
            if (basicSalary <= tier2max) {
                tier2 = (tier2Salary * 6) / 100;
            } else if (basicSalary > tier2max && tier2Salary <= tier2max) {     // gross income more than 36000 but tier II pensionable pay less than 36000
                tier2 = (tier2Salary * 6) / 100;       // calculated with remainder pensionable pay from tier I
            } else if (basicSalary > tier2max && tier2Salary > tier2max) {       // both income and tier II pensionable pay more than 36000
                tier2 = (tier2max * 6) / 100;          // calculated with maximum tier II pensionable pay
            }
        }
        
        nssf = tier1 + tier2;

        let netSalary = basicSalary - (payee + nhif + nssf);    // mutable variable storing net salary with all deductions made
        return alert(`Your net salary is: ${netSalary}`);      // return value displaying user's net salary
    });
}

netSalary();  // function call