import React, { useState } from "react";
import "./User.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the first selected file
  };

  const handleUpload = () => {
    if (file) {
      console.log("File to be uploaded:", file);
      // Here, you can send the file to a server using FormData and fetch/axios
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="user-form">
      <h2>Candidate Registration</h2>
      {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Experience:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
        <label>Skills:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
        <label>Resume:</label>
        <input  style={{ width: "100%", padding: "8px" }} type="file" onChange={handleFileChange} />
         {file && <p>Selected File: {file.name}</p>}
         </div>
        <button type="submit" style={{ padding: "10px", width: "100%" ,backgroundColor: "darkgray"}}>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
