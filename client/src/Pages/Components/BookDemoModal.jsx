import React, { useState } from "react";
import "./Modal.css";

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
  India: { code: "+91" },
  US: { code: "+1" },
  UAE: { code: "+971"  },
  Bahrain: { code: "+973" },
  Kuwait: { code: "+965" },
  Oman: { code: "+968" },
  Qatar: { code: "+974" },
  "Saudi Arabia": { code: "+966" },
  UK: { code: "+44" },
};

const BookDemoModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
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
  });

   const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCountry = countryData[formData.country];
    const finalContact = selectedCountry
      ? `${selectedCountry.code}${formData.contactNo}`
      : formData.contactNo;

    const finalData = {
      ...formData,
      syllabus: formData.syllabus === "Other" ? formData.customSyllabus : formData.syllabus,
      country: formData.country === "Other" ? formData.customCountry : formData.country,
      state: formData.state === "Other" ? formData.customState : formData.state,
      contactNo: finalContact, // ✅ with country code
    };

    console.log("Form Submitted:", finalData);
    alert("Demo request submitted! We will contact you soon.");
    onClose();

    // Reset
    setFormData({
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
    });
  };

  if (!show) return null;

  const classes = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  const syllabusOptions = ["CBSE","ICSE","State Board","IB","Cambridge","Other"];
  const countryOptions = Object.keys(statesByCountry);
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
              disabled={!formData.country}
            >
              <option value="">Select your State</option>
              {formData.country &&
                statesByCountry[formData.country]?.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
            </select>
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
              {selectedCountry && (
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
              />
            </div>
          </div>

          <button type="submit" className="submit-button">Book a Demo</button>
        </form>
      </div>
    </div>
  );
};

export default BookDemoModal;
