import * as React from "react";
import InfoCard from "./InfoCard.jsx";

function InfoSection() {
  return (
    <>
      <section className="info-section">
        <InfoCard
          title="Book an Appointment"
          line1="Commit to quality, nurture growth, and lead with purpose."
          line2="Progress with focus and dedication."
        />
        <InfoCard
          title="Emergency Service"
          line1="Always ready to handle medical emergencies efficiently."
          line2="Turning challenges into opportunities with care and precision."
        />
        <InfoCard
          title="24/7 Support"
          line1="Available 24/7 to provide reliable care and ensure your safety."
          line2="Step forward with confidence and support."
        />
      </section>
      <style jsx>{`
        .info-section {
          display: flex;
          gap: 20px;
          justify-content: space-around;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .info-section {
            flex-direction: column;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default InfoSection;
