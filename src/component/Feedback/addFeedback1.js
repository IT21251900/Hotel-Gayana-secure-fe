import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addfeedback() {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [NIC, setNIC] = useState("");
  const [hearAboutHotel, setHearAboutHotel] = useState("");
  const [reservationMethod, setReservationMethod] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("");
  const [serviceQuality, setServiceQuality] = useState("");
  const [cleanliness, setCleanliness] = useState("");
  const [food, setFood] = useState("");
  const [staff, setStaff] = useState("");
  const [overallExperience, setOverallExperience] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const [errors, setErrors] = useState({});
  
  function validateForm() {
    let formIsValid = true;
    let errors = {};

    if (!customerName) {
      formIsValid = false;
      errors["customerName"] = "Please enter name";
    }
    
    if (!NIC) {
      formIsValid = false;
      errors["NIC"] = "Please enter NIC";
    }
    
    if (!hearAboutHotel) {
      formIsValid = false;
      errors["hearAboutHotel"] = "Please provide information on how you heard about the hotel";
    }

    if (!reservationMethod) {
      formIsValid = false;
      errors["reservationMethod"] = "Please enter a reservation method";
    }

    if (!visitPurpose) {
      formIsValid = false;
      errors["visitPurpose"] = "Please enter a visit purpose";
    }

    if (!serviceQuality) {
      formIsValid = false;
      errors["serviceQuality"] = "Please select Service Quality";
    }

    if (!cleanliness) {
      formIsValid = false;
      errors["cleanliness"] = "Please select a cleanliness rating";
    }

    if (!food) {
      formIsValid = false;
      errors["food"] = "Please rate the food";
    }
    
    if (!staff) {
      formIsValid = false;
      errors["staff"] = "Please rate the staff";
    }
    
    if (!overallExperience) {
      formIsValid = false;
      errors["overallExperience"] = "Please rate your overall experience";
    }
    
    if (!suggestions) {
      formIsValid = false;
      errors["suggestions"] = "Please enter your suggestions";
    }

    setErrors(errors);
    return formIsValid;
  }

  function sendData(e) {
    e.preventDefault();

    if (validateForm()) {
    const newfeedback = {
      customerName,
      NIC,
      hearAboutHotel,
      reservationMethod,
      visitPurpose,
      serviceQuality,
      cleanliness,
      food,
      staff,
      overallExperience,
      suggestions
    };
    
    console.log("New feedback:", newfeedback); // Log the feedback data

      axios
        .post("http://localhost:8000/api/feedback/save", newfeedback)
        .then(() => {
          alert("New feedback added");
          navigate("/nav/");
        })
        
      .catch((err) => {
        console.log("Error:", err);    
      });
    }
  }
  
  return (
    <div className='container dashboard' >
      <div className='dashboard-app'>
        <div className='dashboard-content'>
          <div className='container' style={{ paddingLeft: '15rem',paddingRight: '15rem' ,paddingTop:'5rem',paddingBottom:'5rem'}}>
            
            <div style={{ backgroundColor: 'rgba(144, 238, 144, 0.05',padding:'3rem',boxShadow: '0px 0px 50px 0px rgba(0, 0, 0, 0.1)'}}>
            <br/>
            
            <h2><center>Add New Feedback</center></h2>
            <br/>
            <form onSubmit={sendData} >          
             <div className="mb-3" style={{ display: 'flex', gap: '1rem'}}>
              <div style={{ flex: '1' }}>
                <label className="form-label" style={{marginLeft: '5px'}}>Customer Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                  placeholder='Enter your name' 
                  name='customerName'
                  onChange={(e) => {
                    console.log("Customer Name:", e.target.value);
                    setCustomerName(e.target.value);
                  }}
                  style={{ width: '100%' }}
                /> 
               {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
               </div>
               
              <div style={{ flex: '1' }}>
                <label className="form-label"style={{marginLeft: '5px'}}>NIC</label>
                <input
                  type="text"
                  className={`form-control ${errors.NIC ? 'is-invalid' : ''}`}
                  placeholder='Enter your NIC' 
                  name='NIC'
                  onChange={(e) => {
                    console.log("NIC:", e.target.value);
                    setNIC(e.target.value);
                  }}
                  style={{ width: '100%' }}
                /> 
               {errors.NIC && <div className="invalid-feedback">{errors.NIC}</div>}               
              </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label"style={{marginLeft: '5px'}}>How did you hear about our hotel?</label>
               <input
                  type="text"
                  className={`form-control ${errors.hearAboutHotel ? 'is-invalid' : ''}`}
                  placeholder='Enter your answer' 
                  name='hearAboutHotel'
                  onChange={(e) => {
                    console.log("Hear about hotel:", e.target.value);
                    setHearAboutHotel(e.target.value);
                  }}
                />
               {errors.hearAboutHotel && <div className="invalid-feedback">{errors.hearAboutHotel}</div>}
                </div>

                <div className="mb-3">
                <label className="form-label"style={{marginLeft: '5px'}}>How did you make your reservation?</label>
                  <input
                  type="text"
                  className={`form-control ${errors.reservationMethod ? 'is-invalid' : ''}`}
                  placeholder='Enter your answer'
                  name='reservationMethod'
                  onChange={(e) => {
                    console.log("Reservation method:", e.target.value);
                    setReservationMethod(e.target.value);
                  }}
                />
               {errors.reservationMethod && <div className="invalid-feedback">{errors.reservationMethod}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label"style={{marginLeft: '5px'}}>What was the purpose of your visit?</label>
                  <input
                  type="text"
                  className={`form-control ${errors.visitPurpose ? 'is-invalid' : ''}`}
                  placeholder='Enter your answer'
                  name='visitPurpose'
                  onChange={(e) => {
                    setVisitPurpose(e.target.value);
                  }}
                />
               {errors.visitPurpose && <div className="invalid-feedback">{errors.visitPurpose}</div>}
              </div><br/>

              <h5>How would you rate these:</h5> <br/> 

              <div className="mb-3" >
                <label className="form-label">Service Quality</label>
                <div className="rbutton" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'  }}>
                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.serviceQuality ? 'is-invalid' : ''}`}
                      name='serviceQuality'
                      id='excellent'
                      value='excellent'
                      onChange={(e) => {
                        console.log('Selected value:', e.target.value);
                        setServiceQuality(e.target.value);
                      }}
                    />
                    <label className="form-check-label" style={{paddingRight: '50px',paddingLeft: '10px' }}>Excellent</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.serviceQuality ? 'is-invalid' : ''}`}
                      name='serviceQuality'
                      id='veryGood'
                      value='veryGood'
                      onChange={(e) => {
                        setServiceQuality(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Very Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.serviceQuality ? 'is-invalid' : ''}`}
                      name='serviceQuality'
                      id='good'
                      value='good'
                      style={{ marginRight: '10px' }}
                      onChange={(e) => {
                        setServiceQuality(e.target.value);
                      }}
                    />
                    <label className="form-check-label" style={{paddingRight: '50px',paddingLeft: '10px' }}>Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.serviceQuality ? 'is-invalid' : ''}`}
                      name='serviceQuality'
                      id='satisfactory'
                      value='satisfactory'
                      onChange={(e) => {
                        setServiceQuality(e.target.value);
                      }}
                    />
                    <label className="form-check-label" style={{paddingRight: '50px',paddingLeft: '10px' }}>Satisfactory</label>
                  </div>

                  <div className="form-check" >
                    <input
                      type="radio"
                      className={`form-check-input ${errors.serviceQuality ? 'is-invalid' : ''}`}
                      name='serviceQuality'
                      id='poor'
                      value='poor'
                      onChange={(e) => {
                        setServiceQuality(e.target.value);
                      }}
                    />
                    <label className="form-check-label" style={{paddingRight: '50px',paddingLeft: '10px'  }}>Poor</label>
                  </div></div>
                
                {errors.serviceQuality && <div className="invalid-feedback">{errors.serviceQuality}</div>}
              </div>

  
              <div className="mb-3">
                <label className="form-label">Cleanliness</label>
                <div className="rbutton" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.cleanliness ? 'is-invalid' : ''}`}
                      name='cleanliness'
                      id='excellent'
                      value='excellent'
                      onChange={(e) => {
                        setCleanliness(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Excellent</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.cleanliness ? 'is-invalid' : ''}`}
                      name='cleanliness'
                      id='veryGood'
                      value='veryGood'
                      onChange={(e) => {
                        setCleanliness(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Very Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.cleanliness ? 'is-invalid' : ''}`}
                      name='cleanliness'
                      id='good'
                      value='good'
                      onChange={(e) => {
                        setCleanliness(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.cleanliness ? 'is-invalid' : ''}`}
                      name='cleanliness'
                      id='satisfactory'
                      value='satisfactory'
                      onChange={(e) => {
                        setCleanliness(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Satisfactory</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.cleanliness ? 'is-invalid' : ''}`}
                      name='cleanliness'
                      id='poor'
                      value='poor'
                      onChange={(e) => {
                        setCleanliness(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Poor</label>
                  </div></div>
                
                {errors.cleanliness && <div className="invalid-feedback">{errors.cleanliness}</div>}
              </div>
              
 
              <div className="mb-3">
                <label className="form-label">Food</label>
                <div className="rbutton" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.food ? 'is-invalid' : ''}`}
                      name='food'
                      id='excellent'
                      value='excellent'
                      onChange={(e) => {
                        setFood(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Excellent</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.food ? 'is-invalid' : ''}`}
                      name='food'
                      id='veryGood'
                      value='veryGood'
                      onChange={(e) => {
                        setFood(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Very Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.food ? 'is-invalid' : ''}`}
                      name='food'
                      id='good'
                      value='good'
                      onChange={(e) => {
                        setFood(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.food ? 'is-invalid' : ''}`}
                      name='food'
                      id='satisfactory'
                      value='satisfactory'
                      onChange={(e) => {
                        setFood(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Satisfactory</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.food ? 'is-invalid' : ''}`}
                      name='food'
                      id='poor'
                      value='poor'
                      onChange={(e) => {
                        setFood(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Poor</label>
                  </div></div>
                
                {errors.food && <div className="invalid-feedback">{errors.food}</div>}
              </div>
              

              <div className="mb-3">
                <label className="form-label">Staff</label>
                <div className="rbutton" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.staff ? 'is-invalid' : ''}`}
                      name='staff'
                      id='excellent'
                      value='excellent'
                      onChange={(e) => {
                        setStaff(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Excellent</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.staff ? 'is-invalid' : ''}`}
                      name='staff'
                      id='veryGood'
                      value='veryGood'
                      onChange={(e) => {
                        setStaff(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Very Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.staff ? 'is-invalid' : ''}`}
                      name='staff'
                      id='good'
                      value='good'
                      onChange={(e) => {
                        setStaff(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.staff ? 'is-invalid' : ''}`}
                      name='staff'
                      id='satisfactory'
                      value='satisfactory'
                      onChange={(e) => {
                        setStaff(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Satisfactory</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.staff ? 'is-invalid' : ''}`}
                      name='staff'
                      id='poor'
                      value='poor'
                      onChange={(e) => {
                        setStaff(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Poor</label>
                  </div></div>
                
                {errors.staff && <div className="invalid-feedback">{errors.staff}</div>}
              </div>
              
 
              <div className="mb-3">
                <label className="form-label">Overall experience in our hotel </label>
                <div className="rbutton" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.overallExperience ? 'is-invalid' : ''}`}
                      name='overallExperience'
                      id='excellent'
                      value='excellent'
                      onChange={(e) => {
                        setOverallExperience(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Excellent</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.overallExperience ? 'is-invalid' : ''}`}
                      name='overallExperience'
                      id='veryGood'
                      value='veryGood'
                      onChange={(e) => {
                        setOverallExperience(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Very Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.overallExperience ? 'is-invalid' : ''}`}
                      name='overallExperience'
                      id='good'
                      value='good'
                      onChange={(e) => {
                        setOverallExperience(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Good</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.overallExperience ? 'is-invalid' : ''}`}
                      name='overallExperience'
                      id='satisfactory'
                      value='satisfactory'
                      onChange={(e) => {
                        setOverallExperience(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Satisfactory</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className={`form-check-input ${errors.overallExperience ? 'is-invalid' : ''}`}
                      name='overallExperience'
                      id='poor'
                      value='poor'
                      onChange={(e) => {
                        setOverallExperience(e.target.value);
                      }}
                    />
                    <label className="form-check-label"style={{paddingRight: '50px',paddingLeft: '10px' }}>Poor</label>
                  </div></div>
                
                {errors.overallExperience && <div className="invalid-feedback">{errors.overallExperience}</div>}
              </div>
              <br/>

              <div className="mb-3">
                <label className="form-label"style={{marginLeft: '5px'}}>Any other suggestions or recommendations for us?</label>
                <textarea
                  className={`form-control ${errors.suggestions ? 'is-invalid' : ''}`}
                  rows="3"
                  placeholder='Enter your suggestions'
                  name='suggestions'
                  onChange={(e) => {
                    setSuggestions(e.target.value);
                  }}
                />
                {errors.suggestions && <div className="invalid-feedback">{errors.suggestions}</div>}

              </div>
              <br/>
              {/* Submit button */}
              <input type='submit' className='btn btn-outline-success btn-block mt-4'/>
            </form>
          </div></div>
        </div>
      </div>
    </div>
  );
  
}