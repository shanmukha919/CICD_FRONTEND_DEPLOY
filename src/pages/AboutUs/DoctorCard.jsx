export function DoctorCard({ image, name, specialty }) {
  return (
    <article className="doctor-card">
      <img loading="lazy" src={image} className="doctor-image" />
      <div className="info-section">
        <div className="info-content">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-specialty">{specialty}</p>

        </div>
      </div>
      <div className="profile-link">
        <span className="link-text">View Profile</span>
      </div>

      <style jsx>{`
        .doctor-card {
          flex: 1;
        }
        .doctor-image {
          aspect-ratio: 0.91;
          object-fit: contain;
          width: 100%;
          border-radius: 5px 5px 0px 0px;
        }
        .info-section {
          background: #bfd2f8;
          padding: 24px 32px;
        }
        .info-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .doctor-name {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
        }
        .doctor-specialty {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin-top: 8px;
        }
        .social-links {
          display: flex;
          margin-top: 16px;
          gap: 20px;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 24px;
          fill: #1f2b6c;
        }
        .profile-link {
          background: #1f2b6c;
          border-radius: 0px 0px 5px 5px;
          padding: 12px 32px;
          text-align: center;
        }
        .link-text {
          color: #bfd2f8;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
        }
        @media (max-width: 991px) {
          .info-section {
            padding: 24px 20px;
          }
          .profile-link {
            padding: 12px 20px;
          }
        }
      `}</style>
    </article>
  );
}
