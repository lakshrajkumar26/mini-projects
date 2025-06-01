
import React, { useState } from 'react'
import './BmiCalculator.css'
const BmiCalculator = () => {
 
  // 1-->
    const[ weight , setWeight] = useState();
    const[ height , setHeight] = useState();
    
    const bmi = weight / ((height / 100) ** 2);
     const roundedBMI = bmi.toFixed(2);

    let category = '';
    if(roundedBMI < 18.5) category ='Underweight';
    else if(roundedBMI < 25 ) category ='Normal wight';
    else if (roundedBMI < 30) category = 'Overweigth';
    else category = 'obese';

    const handleChange = (event) => {
        // to understand why we did // console.log(event.target.value)
        setWeight(event.target.value);

    }
    const handleHeight = (e) => {
          
        setHeight(e.target.value);
    }
    
 
     // to prevent the defalut befavious of refreshing when submit 
    const submitHandler = (e) => {
         e.preventDefault()
         console.log(weight);
         console.log (height);
         
        //  setWeight(0);
        //  setHeight(0);
    }
  return (
    <div className='main-box'>
    <div className='container'> 
        
        <h1>Body Mass Index</h1>
        <p>Great Idea! BMI is a simplest way  to check if a person has a healthy body.</p>
         
         <h2>Enter your Weight (in kg)</h2>
         
         <form onSubmit={submitHandler}>
         
         <input type='number' value={weight} onChange={handleChange} placeholder="enter your weight (Kg)"/>
         <h2>Enter your Height (in cm)</h2>
        
        <input placeholder='Enter your height (cm)' value={height} onChange={handleHeight}/>
         
         <button >check my BMI</button>
         
        </form>

        <h2>Your BMI is {roundedBMI}</h2>
         <h2>your Category is</h2><h1 className='category'>{category}</h1>
         
        
        <p>
            <strong>BMI</strong> = 
            <span> weight(kg) / [height (m)]<sup>2</sup>
            </span>
        </p>


        <div className="bmi-table">
  <h2>BMI Categories</h2>
  <table>
    <thead>
      <tr>
        <th>BMI Range</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{'< 18.5'}</td>
        <td>Underweight</td>
      </tr>
      <tr>
        <td>18.5 – 24.9</td>
        <td>Normal weight</td>
      </tr>
      <tr>
        <td>25 – 29.9</td>
        <td>Overweight</td>
      </tr>
      <tr>
        <td>{'≥ 30'}</td>
        <td>Obese</td>
      </tr>
    </tbody>
  </table>
</div>

         
    </div>
    </div>
  )
}

export default BmiCalculator