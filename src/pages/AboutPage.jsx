import React from "react";
import { DoctorCard } from "./AboutUs/DoctorCard";
import { ContactInfo } from "./AboutUs/ContactInfo";
import { WelcomeSection } from "./AboutUs/WelcomeSection";
import { TestimonialSection } from "./AboutUs/TestimonialSection";
import "./AboutPage.css"; // external CSS file

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">About Our Hospital</h1>
          <p className="hero-subtitle">
            Dedicated to providing trusted healthcare services with compassion
            and innovation.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <WelcomeSection />


      {/* Doctors Section */}
      <section className="doctors-section">
        <h3 className="section-subtitle">Meet Our Experts</h3>
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctors-grid">
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/bdc118d2fe3571dc8816367c80ef64c4ddf690841c8d7bc8e931f15459138021?placeholderIfAbsent=true"
            name="Dr. Gopal kumar"
            specialty="Cardiologist"
          />
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/10c01619eef3a414aa4655d12e2acd9a31bd700a38d3992dcfed22ef9a293e50?placeholderIfAbsent=true"
            name="Dr. Raghu Ram"
            specialty="Neurologist"
          />
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/a522fa64e597948571da6be9d7aa71799120ac0d854c96100591c0b953bf2ed1?placeholderIfAbsent=true"
            name="Dr. Ramya Devi"
            specialty="Pediatrician"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h3 className="section-subtitle">Get in Touch</h3>
        <h2 className="section-title">Contact Us</h2>
        <ContactInfo />
      </section>
    </main>
  );
}
