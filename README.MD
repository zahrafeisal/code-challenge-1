# PHASE 1 WEEK 1 CODE CHALLENGE 

## AUTHOR NAME 
### Zahra Feisal 

## ACESSING AND RUNNING THE FILES 
The folder "code-challenge-1" has 5 folders and 2 files in its root level. Each challenge has a folder named after it, within it a HTML and Javascript file.

### Running the files on the browser 
Upon visiting the website URL of the repository or opening index.html from the root level using Live Server, you'll encounter a page with three grey buttons, namely "Challenge 1", "Challenge 2" and "Challenge 3" respectively. Each button leads you to their respective challenge solutions when clicked. Each code challenge has its own button, that enables you to input data and the required output is displayed. They also have instructions on inputting data as well as what to expect as the output. You must input valid data.

## ABOUT THE PROJECT
The code challenge is made up of three questions ;

### Challenge 1 : Student Grade Generator
The page titled "Challenge 1" enables the user to the click the button "Enter marks here". The "challenge-1.js" file is then run as the event 'click' happens. A prompt that requires the student's marks is displayed. Once the user inputs marks (0 - 100), the file then looks for the group into which the marks fall under, and assings the appropriate grade. An alert is then displayed to the user indicating the student's grade.

### Challenge 2 : Speed Detector
The page titled "Challenge 2" enables the user to click the button "Input speed". The "challenge-2.js" file listens for the 'click' event and runs, displaying a prompt for the user to enter the car's speed. The file runs an alert indicating "Ok" if the data entered is below or equal to 70 km/s (speed limit). If the speed is above the limit, the file calculates 1 demerit point for every 5 km/s above it, and returns an alert indicating the total demerit points. If the total demerit points exceed 12, an alert indicating "License suspended" is returned to the user.

### Challenge 3 : Net Salary Calcutaor
The page titled "Challenge 3" enables the user to click the button "Click Me". The 'click' event runs the "challenge-3.js" file. A prompt is displayed to the user, requiring them to input their gross salary per month (basic salary plus benefits, if any). The javascript file then calculates the deductibles PAYE, NHIF and NSSF, according to the tax bracket into which the salary falls under. It then returns an alert to the user, indicating their net salary once the deductibles have been calculated and removed.