import { useState } from "react";

function StudentMarks() {

    const [m1, setMarks1] = useState();
    const [m2, setMarks2] = useState();
    const [m3, setMarks3] = useState();
    const [tot, setTot] =  useState(); // take tot in a state
    const [average, setAvg] =  useState(); // take tot in a state
    const [gradee, setGrade] =  useState(); // take tot in a state
    var total;
    var grade;
    var avg;
function handleClick()
{
 // setTot(Number(num1) + Number(num2)); // set number to the state
  total= Number(m1) + Number(m2) + Number(m3);
  setTot(total); 

  avg =  Number(total/3);

  setAvg(avg); 

  if(avg > 70)
  {
    grade = "A"
  }
  else if(avg > 50)
  {
    grade = "B"
  }
  else if(avg > 35)
  {
    grade = "C"
  }

  else
  {
    grade = "F"
  }

  setGrade(grade); 

}

    return (
      <div  className="container gpa">
   
        <h1>Student Marks Calculation</h1>
       <div className="form-group">
        <label>Marks 1</label>
        <input className="input" type="text" name="m1"  onChange={(event) =>
                {
                  setMarks1(event.target.value);      
                }}>
        </input>
        </div>

        <div className="form-group">
        <label>Marks 2</label>
        <input className="input" type="text" name="m2"   onChange={(event) =>
                {
                  setMarks2(event.target.value);      
                }}>
         </input> 
         </div>


         <div className="form-group">
        <label>Marks 3</label>
        <input className="input" type="text" name="m3"   onChange={(event) =>
                {
                  setMarks3(event.target.value);      
                }}>
         </input> 
         </div>

         <div className="form-group">
         <label>Total</label>

        <input className="input" type="text"   value={ tot }></input>   
        </div>
        <div className="form-group">
        <label>Average</label>
        <input className="input" type="text"  value={ average }></input>   
        </div>
        <div className="form-group">
        <label>Grade</label>
        <input className="input" type="text"   value={ gradee }></input>   
        </div>
        <button onClick={handleClick}  className="btn btn-warning mt-4 btnn1"> Click Me</button>
      </div>
    );
            
}
  export default StudentMarks;