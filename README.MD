# PHASE 1 WEEK 1 CODE CHALLENGE 


## AUTHOR NAME 
### Zahra Feisal 


## ACCESSING AND RUNNING THE FILES 
The folder <em>code-challenge-1</em> has 5 folders and 2 files in its root level . Each challenge has a folder named after it , within it a HTML and Javascript file .


### Running the files on the browser 
Upon visiting <a href="https://zahrafeisal.github.io/code-challenge-1/">Code Challenge 1</a> or opening <em>index.html</em> from the root level using Live Server , you'll encounter a page with 3 grey buttons, namely <em>Challenge 1</em>, <em>Challenge 2</em> and <em>Challenge 3</em> respectively . Each button leads you to their respective challenge solutions .


#### Challenge 1 : Student Grade Generator
The page titled <em>Challenge 1</em> enables the user to the click the button <em>Enter marks here</em> . The <em>challenge-1.js</em> file is then run as the event 'click' happens . A prompt that requires the student's marks is displayed . Once the user inputs marks (0 - 100) , the file then looks for the group into which the marks fall under , and assigns the appropriate grade . An alert is then displayed to the user indicating the student's grade . In the case where the user fails to enter a number among 0-100 , they are given an alert to input a valid number. For example , if the user enters a number above 100 .

#### Challenge 2 : Speed Detector
The page titled <em>Challenge 2</em> enables the user to click the button <em>Input speed</em> . The <em>challenge-2.js</em> file listens for the 'click' event and runs , displaying a prompt for the user to enter the car's speed . The file runs an alert indicating <strong>Ok</strong> if the data entered is below or equal to 70 km/s (speed limit) . If the speed is above the limit , the file calculates 1 demerit point for every 5 km/s above it , and returns an alert indicating the total demerit points . If the total demerit points exceed 12 , an alert indicating <strong>License suspended</strong> is returned to the user .

#### Challenge 3 : Net Salary Calcutaor
The page titled <em>Challenge 3</em> enables the user to click the button <em>Click Me</em> . The 'click' event runs the <em>challenge-3.js</em> file . A prompt is displayed to the user , requiring them to input their gross salary per month . The javascript file then calculates the PAYE , NHIF and NSSF deductibles , according to the tax bracket into which the salary falls under . It then returns an alert to the user , indicating their net salary once the deductibles have been calculated and removed .


## HOW THE CODE RUNS

### Challenge 1
The folder <em>challenge-1</em> has a HTML and Javascript file . The HTML file provides structuring , as well as a link to the JS file through a script tag . The JS file has an event listener that listens for the 'click' event on the button with the id <em>promptbutton</em> . A function is invoked , that provides a prompt to the user enabling them to input the student's marks . If the user inputs a number than isn't among 0-100 , the JS file executes a method that alerts the user to input a valid number . If the user inputs a number among 0-100 , the JS file then runs the <em>else...if</em> statements. It looks for the one whose condition returns true , and runs the block of code within it , hence assigning a grade to the entered marks . It then returns an alert to the user , indicating the student's assigned grade . This is all nested in a function , and the function call is made after the code block to enable the JS file to run accordingly .

### Challenge 2
The folder <em>challenge-2</em> has a HTML and Javascript file . The HTML file provides structuring , as well as a link to the JS file through a script tag . The JS file has an event listener that listens for the 'click' event on the button with the id <em>promptbutton</em> . A function is invoked , that provides a prompt to the user enabling them to input the car's speed . The file runs the <em>if...else</em> statements . If the speed is below or equal to 70 km/s (speed limit) , the condition in the 'if' statement returns true and the file runs the code block within it . The alert method is used to return <strong>Ok</strong> to the user . However , if the speed is above the limit , the 'if' statement condition returns false hence the JS file ignores it and runs the block of code within the 'else' statement. For every 5 km/s above the speed limit , 1 demerit point is gained . If the toal demerit points exceeds 12 , an alert is displayed to the user indicating <strong>License suspended</strong> . Otherwise , an alert will be displayed indicating the total demerit points calculated . This is nested in a function , and the function is called after the entire code block to enable the JS file to run accordingly .

### Challenge 3
The folder <em>challenge-3</em> has a HTML and Javascript file . The HTML file provides structuring , as well as a link to the JS file through a script tag . The JS file has an event listener that listens for the 'click' event on the button with the id <em>promptbutton</em> . A function is invoked , that provides a prompt to the user enabling them to input their gross salary per month . 

#### PAYE

The file then first calculates PAYE , stored in the variable <em>payee</em> . Using <em>else...if</em> statements and the AND operator , the file determines into which tax bracket the user's income will fall under . The file runs the statements , ignoring those whose conditions return false , and running the code of block of the statement whose condition returns true , thus calculating the PAYE . 

#### NHIF

After calculating the PAYE , the file then calculates the NHIF , stored in the variable <em>nhif</em> . Using <em>else...if</em> statements , the file determines which tax bracket the user's income falls under by the statement whose condition returns true. It executes the code block within it , hence determining the NHIF deductions .

#### NSSF
After calculating the PAYE and NHIF, the JS file then calculates the NSSF , stored in the variable <em>nssf</em> . 

<p>Starting with <strong><em>Tier I</em></strong> , whose maximum pensionable pay is Ksh. 7000 and a tax rate of 6% , an <em>if...else</em> statement is used. If the user's income is less than or equal to Ksh. 7000 , their income is deducted 6% . However , if the condition of the first statement returns false , that is the gross salary is more than 7000 , the file then executes the code block within the else statement , as it's condition returns true. The pensionable pay is then the maximum for tier I , 7000 , while the remaining income is then the pensionable pay for tier II .</p>

<p>The pensionable pay for <strong><em>Tier II</em></strong> is the user's income that's more than 7000 but less than 36000 . This requires the user's income to be more than tier I's maximum threshold . <em>else...if</em> statements are also used here and the rate is also 6% . If the salary is less than or equal to 36000 , the difference between the salary and tier I threshold is used to calculate tier II's pensionable pay . In the code , this difference is stored in the mutable variable <em>tier2Salary</em> for easier referencing . If the salary is above 36000 and tier II's pensionable pay is less than or equal to 36000 , <em>tier2Salary</em> is again used to calculate the deductions , thus executing the block of code within the first <em>else if</em> . However , if both the gross salary and <em>tier2Salary</em> are greater than 36000 , the pensionable pay is the threshold for tier II (36000) and it is the one used to calculate the deduction in this case .</p>

<p>The deductions from both tiers are added to get the total NSSF deductions . </p>

#### Net Salary
The results from calculating PAYE , NHIF and NSSF deductions , are then added and the result deducted from the gross salary , through string interpolation , to get the net salary. The user then gets an alert indicating the net salary . All this is nested in one function , hence for the code to execute the function is called after the code block .