function studentGrade() {
    const enterMarks = document.getElementById("promptbutton");  

    enterMarks.addEventListener('click', function() { 
        let enteredMarks = prompt("Enter marks here (0-100):");   // prompt allowing user to input data when button is clicked, stored in variable
        let marks = parseInt(enteredMarks, 10);           // converts marks entered into integers

        if (marks < 0) {
           return alert("Please enter a valid mark(0-100)");  // ensures marks entered are 0 or more

           } else if (marks > 100) {
            return alert("Please enter a valid mark(0-100)");  // ensures marks entered are less than 100
           }
        

    let gradedMark;     // grade allocation for marks using if...else...if statements
    
    if (marks > 79) {
        gradedMark = "A";
    } else if (marks >= 60) {
        gradedMark = "B";
    } else if (marks >= 50) {
        gradedMark = "C";
    } else if (marks >= 40) {
        gradedMark = "D";
    } else {
        gradedMark = "E";
    }

    return alert(`The student's grade is ${gradedMark}`);    // alert to be returned to user indicating student's grade
    });
}

studentGrade();    // function call