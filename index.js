//  calculate marks function
const calculate = () => {

    // student input.
    let names= document.querySelector("#NAMES").value;
    let mark= document.querySelector("#MARKS").value;
   
    let grades = ""
//condition for providing the grade according to marks keyed in
    let marks= mark;
    if (marks<= 100 && marks >= 80) {
        grades = "A";
    } else if (marks <= 79 && marks >= 60) {
        grades = "B";
    } else if (marks<= 59 && marks >= 49) {
        grades = "C";
    } else  if(marks<= 49 && marks >= 40){
        grades = "D";
    }
    else{
        grades = "E";

    }
        
    
    // Condition if any of the input is empty
    if (names == "" || mark == ""
                ) {
        document.querySelector("#data").innerHTML
            = "yoh! fill all  the fields";
    } else {
    

    if(marks=mark) {document.querySelector("#data").innerHTML =
            ` HI ${names} <br>
            Your grade  is ${grades}. `;
    
    
        
        } 
    }}
 