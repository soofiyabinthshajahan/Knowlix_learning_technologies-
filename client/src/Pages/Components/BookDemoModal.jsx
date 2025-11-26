import React, { useState, useCallback, useRef } from "react";
import "./Modal.css"

// --- Configuration Data ---
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbLwA-FpD3uYamOyDgq8g2lrvnIFuYSEuSWPNGKi37aUeOXoLGPRD4QqsD5z7q3EVN/exec"; 

const statesByCountry = {
  India: [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
  ],
  US: ["California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan"],
  UAE: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"],
  Bahrain: ["Capital", "Muharraq", "Northern", "Southern"],
  Kuwait: ["Al Asimah", "Hawalli", "Farwaniya", "Mubarak Al-Kabeer", "Jahra", "Ahmadi"],
  Oman: ["Muscat", "Dhofar", "Musandam", "Al Batinah North", "Al Batinah South", "Ad Dakhiliyah", "Ash Sharqiyah North", "Ash Sharqiyah South", "Al Dhahirah", "Al Buraimi", "Al Wusta"],
  Qatar: ["Doha", "Al Rayyan", "Al Wakrah", "Umm Salal", "Al Khor", "Al Daayen", "Madinat ash Shamal"],
  "Saudi Arabia": ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Hail", "Northern Borders", "Jazan", "Najran", "Al Bahah", "Al Jawf"],
  UK: ["England", "Scotland", "Wales", "Northern Ireland"],
};

const countryData = {
  India: { code: "+91", flag: "🇮🇳" },
  US: { code: "+1", flag: "🇺🇸" },
  UAE: { code: "+971", flag: "🇦🇪" },
  Bahrain: { code: "+973", flag: "🇧🇭" },
  Kuwait: { code: "+965", flag: "🇰🇼" },
  Oman: { code: "+968", flag: "🇴🇲" },
  Qatar: { code: "+974", flag: "🇶🇦" },
  "Saudi Arabia": { code: "+966", flag: "🇸🇦" },
  UK: { code: "+44", flag: "🇬🇧" },
  Other: { code: "", flag: "" }, // Placeholder for custom country
};
// --- End Configuration Data ---


const initialFormData = {
  studentName: "",
  studentClass: "",
  syllabus: "",
  customSyllabus: "",
  country: "",
  customCountry: "",
  state: "",
  customState: "",
  parentName: "",
  contactNo: "",
};


const BookDemoModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Ref for the hidden iframe
  const iframeRef = useRef(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      
      // Reset state/customState if country changes
      if (name === 'country' && prevData.country !== value) {
        newData.state = '';
        newData.customState = '';
      }
      return newData;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent re-submission
    if (isSubmitting) return;

    setIsSubmitting(true);
    console.log("Submission started...");

    const selectedCountry = countryData[formData.country] || countryData['Other'];
    
    // 1. Prepare Contact Number with Country Code
    const finalContact = selectedCountry.code
      ? `${selectedCountry.code} ${formData.contactNo}`
      : formData.contactNo;

    // 2. Resolve 'Other' inputs and gather all data
    const finalData = {
      studentName: formData.studentName,
      studentClass: formData.studentClass,
      syllabus: formData.syllabus === "Other" ? formData.customSyllabus : formData.syllabus,
      country: formData.country === "Other" ? formData.customCountry : formData.country,
      // If country is 'Other', use customState for 'state' column. If country is known but state is 'Other', use customState. Otherwise, use state.
      state: formData.country === "Other" ? formData.customState : (formData.state === "Other" ? formData.customState : formData.state),
      parentName: formData.parentName,
      contactNo: finalContact, // Final contact number with country code/prefix
    };
    
    // --- GUARANTEED SUBMISSION LOGIC (HIDDEN FORM) ---
    const formId = "apps-script-submit-form";
    let form = document.getElementById(formId);

    // Create form if it doesn't exist
    if (!form) {
      form = document.createElement('form');
      form.id = formId;
      form.action = APPS_SCRIPT_URL;
      form.method = 'POST';
      form.target = 'hidden_iframe_target'; // Targets the hidden iframe
      form.style.display = 'none';
      document.body.appendChild(form);
    } else {
      // Clear previous inputs
      form.innerHTML = '';
    }

    // Add data fields as hidden inputs to the form
    Object.keys(finalData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = finalData[key];
      form.appendChild(input);
    });

    // Function to handle the form completion (Success or Timeout)
    const handleCompletion = (isSuccess) => {
      if (isSuccess) {
        console.log("Submission successful via iframe onload.");
        // Use user's preferred alert method
        alert("Demo request successfully submitted! We will contact you shortly.");
        setFormData(initialFormData); // Reset form
        onClose(); 
      } else {
        console.warn("Submission timed out or failed to trigger onload.");
        alert("Submission timed out. The request might have been sent, but please check the data sheet or try again.");
      }
      
      // Cleanup and UI reset
      if (iframeRef.current) {
        iframeRef.current.onload = null; // Remove listener
      }
      clearTimeout(timeoutId); // Clear the hanging timeout
      setIsSubmitting(false); // Stop the spinner/message
    };

    let timeoutId;

    // Setup onload listener on the iframe
    if (iframeRef.current) {
      // Important: Use an arrow function to preserve 'this' and ensure fresh state access (though in this implementation, handleCompletion handles the cleanup)
      iframeRef.current.onload = () => handleCompletion(true);
    }

    // Setup Timeout (e.g., 10 seconds)
    timeoutId = setTimeout(() => {
        // Only run timeout if the onload listener is still active (i.e., hasn't fired yet)
        if (iframeRef.current && iframeRef.current.onload !== null) { 
            handleCompletion(false);
        }
    }, 10000); // 10 seconds

    // Submit the hidden form
    form.submit();
    console.log("Hidden form submitted to iframe.");
    // --- END GUARANTEED SUBMISSION LOGIC ---
  };

  if (!show) return null;

  const classes = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  const syllabusOptions = ["CBSE","ICSE","State Board","IB","Cambridge","Other"];
  const countryOptions = Object.keys(statesByCountry).filter(c => c !== "Other"); // Exclude internal 'Other'
  const selectedCountry = countryData[formData.country];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Book a Demo Session</h2>
        <form onSubmit={handleSubmit}>
          
          {/* Student Name */}
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Class */}
          <div className="form-group">
            <label htmlFor="studentClass">Class:</label>
            <select
              id="studentClass"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>

          {/* Syllabus */}
          <div className="form-group">
            <label htmlFor="syllabus">Syllabus:</label>
            <select
              id="syllabus"
              name="syllabus"
              value={formData.syllabus}
              onChange={handleChange}
              required
            >
              <option value="">Select Syllabus</option>
              {syllabusOptions.map((syll) => (
                <option key={syll} value={syll}>{syll}</option>
              ))}
            </select>
            {formData.syllabus === "Other" && (
              <input
                type="text"
                name="customSyllabus"
                className="custom-input"
                placeholder="Enter your syllabus"
                value={formData.customSyllabus}
                onChange={handleChange}
                required
              />
            )}
          </div>

          {/* Country */}
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {countryOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
              <option value="Other">Other</option>
            </select>
            {formData.country === "Other" && (
              <input
                type="text"
                name="customCountry"
                className="custom-input"
                placeholder="Enter your country"
                value={formData.customCountry}
                onChange={handleChange}
                required
              />
            )}
          </div>

          {/* State */}
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              disabled={!formData.country || formData.country === "Other"}
            >
              <option value="">Select your State</option>
              {/* Only show states if a known country is selected */}
              {formData.country && statesByCountry[formData.country] && formData.country !== "Other" && (
                <>
                  {statesByCountry[formData.country].map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                  <option value="Other">Other</option>
                </>
              )}
            </select>
            {/* Show custom state input if 'Other' state is selected OR if 'Other' country is selected */}
            {((formData.state === "Other" && formData.country && formData.country !== "Other") || formData.country === "Other") && (
              <input
                type="text"
                name="customState"
                className="custom-input"
                placeholder="Enter your state/region"
                value={formData.customState}
                onChange={handleChange}
                required
              />
            )}
          </div>

          {/* Parent Name */}
          <div className="form-group">
            <label htmlFor="parentName">Parent Name:</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="contactNo">Contact No:</label>
            <div className="phone-input">
              {/* Added a fallback check for selectedCountry to avoid errors */}
              {selectedCountry && selectedCountry.code && (
                <span className="phone-prefix">
                  {selectedCountry.flag} {selectedCountry.code}
                </span>
              )}
              <input
                type="tel"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit contact number"
                required
                // Note: The original submission logic will prefix this number with the code regardless of pattern
              />
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Book a Demo'}
          </button>
        </form>

        {/* This hidden iframe is the key to reliable cross-origin form submission */}
        {/* The onload event on this iframe is used to detect completion. */}
        <iframe 
          id="hidden_iframe_target" 
          name="hidden_iframe_target" 
          ref={iframeRef}
          style={{ display: 'none' }}
          title="Google Apps Script Submission Target"
        ></iframe>

      </div>
    </div>
  );
};

export default BookDemoModal;