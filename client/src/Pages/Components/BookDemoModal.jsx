
import React, { useState } from 'react';
import './Modal.css'; 

const BookDemoModal = ({ show, onClose }) => {
    const [formData, setFormData] = useState({
        studentName: '',
        studentClass: '',
        syllabus: '',
        state: '',
        parentName: '',
        contactNo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Demo request submitted! We will contact you soon.');
        onClose(); // Close the modal after submission
        // Optionally, clear the form fields after submission
        setFormData({
            studentName: '',
            studentClass: '',
            syllabus: '',
            state: '',
            parentName: '',
            contactNo: ''
        });
    };

    if (!show) {
        return null; 
    }

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Lakshadweep", "Delhi", "Puducherry"
    ];

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Book a Demo Session</h2>
                <form onSubmit={handleSubmit}>
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

                    <div className="form-group">
                        <label htmlFor="studentClass">Class:</label>
                        <input
                            type="text"
                            id="studentClass"
                            name="studentClass"
                            value={formData.studentClass}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="syllabus">Syllabus:</label>
                        <input
                            type="text"
                            id="syllabus"
                            name="syllabus"
                            value={formData.syllabus}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select your State</option>
                            {indianStates.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

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

                    <div className="form-group">
                        <label htmlFor="contactNo">Contact No:</label>
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

                    <button type="submit" className="submit-button">Book a Demo</button>
                </form>
            </div>
        </div>
    );
};

export default BookDemoModal;
