import React from "react";
import "./HomePage.css";
import hospitalImage from "../assets/images/hospital.jpg"; // Adjust the path

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Welcome to the Hospital Management System</h1>
            <p>
              Efficiently manage your hospital operations with ease and precision.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="homepage-main">
        {/* Image Section */}
        <section className="image-section">
          <img
            src={hospitalImage}
            alt="Hospital"
            className="homepage-image"
          />
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Our Core Features</h2>
          <div className="feature-list">
            <div className="feature-card">
              <h3>Patient Management</h3>
              <p>
                Seamlessly manage patient records, appointments, and history.
              </p>
            </div>
            <div className="feature-card">
              <h3>Appointment Scheduling</h3>
              <p>
                Efficiently schedule and manage patient appointments in real-time.
              </p>
            </div>
            <div className="feature-card">
              <h3>Staff Management</h3>
              <p>
                Streamline your staff operations with detailed management features.
              </p>
            </div>
            <div className="feature-card">
              <h3>Billing & Payments</h3>
              <p>
                Accurate billing and payment tracking for a smooth patient
                experience.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
