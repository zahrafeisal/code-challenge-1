function speedDetect() {
    const enterSpeed = document.getElementById("promptbutton");  

    enterSpeed.addEventListener('click', function() {      // enables user to enter speed of car upon clicking the button
        let enteredSpeed = prompt("Enter the speed of the car (km/s):");

        let speed = parseInt(enteredSpeed, 10);        // converts speed into integers
        const speedLimit = 70;
        const maxPoints = 12;
    
        // if else statements to ensure condition is true before running the code block in the statement
        
        if (speed <= speedLimit) {          // no demerit points if the speed is less than or equal to 70
            alert("Ok");
        } else {
            let points = Math.floor(((speed - speedLimit) / 5));      // for every 5 km/s above the speed limit, one demerit point is gained
            if (points > maxPoints) {
                alert("License suspended");       // alert when the demerit points exceed 12
            } else {
                alert(`Points: ${points}`);      // alert when demerit points calculated are less than 12
            }
        }
    });
}

speedDetect();        // function call