function netSalary() { 
    const input = document.getElementById("promptbutton");   

    input.addEventListener('click', function() {
        let salary = prompt("Enter your gross salary (basic salary plus benefits) :");    // prompt upon clicking the button, enabling user to input data
        let basicSalary = parseInt(salary, 10); 


        let payee;                 // calculation of PAYE according to the respective tax bracket the user's income will fall under
        if (basicSalary <= 24000) {                    // PAYE calculation code block runs in statement whose condition returns true
            payee = (basicSalary * 10.0) / 100;
        } else if (basicSalary <= 32333) {             // ensures condition is true before running code block
            payee = (basicSalary * 25.0) / 100;        // if false, code block is ingored and js engine moves to the next statement
        } else if (basicSalary <= 500000) {
            payee = (basicSalary * 30.0) / 100;
        } else if (basicSalary <= 800000) {
            payee = (basicSalary * 32.5) / 100;
        } else {                                        // salary above Ksh. 800000
            payee = (basicSalary * 35.0) / 100;
        }


        let nhif;             // calculation of nhif deductions according to the respective income bracket the user's data will fall under
        if (basicSalary <= 5999) {          // code block of statement whose condition returns true runs hence deducting NHIF contribution
            nhif = 150;
        } else if (basicSalary <= 7999) {    
            nhif = 300; 
        } else if (basicSalary <= 11999) {      // Relational operators used to define tax brackets
            nhif = 400;
        } else if (basicSalary <= 14999) {
            nhif = 500;
        } else if (basicSalary <= 19999) {
            nhif = 600;
        } else if (basicSalary <= 24999) {
            nhif = 750;
        } else if (basicSalary <= 29999) {
            nhif = 850;
        } else if (basicSalary <= 34999) {
            nhif = 900;
        } else if (basicSalary <= 39999) {
            nhif = 950;
        } else if (basicSalary <= 44999) {
            nhif = 1000;
        } else if (basicSalary <= 49999) {
            nhif = 1100;
        } else if (basicSalary <= 59999) {
            nhif = 1200;
        } else if (basicSalary <= 69999) {
            nhif = 1300;
        } else if (basicSalary <= 79999) {
            nhif = 1400;
        } else if (basicSalary <= 89999) {
            nhif = 1500;
        } else if (basicSalary <= 99999) {
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
                tier2 = (tier2Salary * 6) / 100;                 // and operator ensures both conditions true before running code block
            } else if (basicSalary > tier2max && tier2Salary <= tier2max) {   // gross income more than 36000 but tier II pensionable pay less than 36000
                tier2 = (tier2Salary * 6) / 100;       // calculated with remainder pensionable pay from tier I
            } else if (basicSalary > tier2max && tier2Salary > tier2max) {      // both income and tier II pensionable pay more than 36000
                tier2 = (tier2max * 6) / 100;          // calculated with maximum tier II pensionable pay
            }
        }
        
        nssf = tier1 + tier2;

        let netSalary = basicSalary - (payee + nhif + nssf);    // mutable variable storing net salary with all deductions made
        return alert(`Your net salary is: ${netSalary}`);      // return value displaying user's net salary
    });
}

netSalary();  // function call