import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DoctorCard from ". ./DoctorCard";

describe("DoctorCard", () => {
  const mockProps = {
    imageSrc: "test-image.jpg",
    doctorName: "Dr. John Smith",
    specialty: "Cardiology",
  };

  it("renders doctor information correctly", () => {
    render(<DoctorCard {...mockProps} />);

    // Check doctor name and specialty
    expect(screen.getByText(mockProps.doctorName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.specialty)).toBeInTheDocument();

    // Check View Profile button/link exists
    expect(screen.getByText(/View Profile/i)).toBeInTheDocument();

    // Check image
    const image = screen.getByRole("img", { name: `Doctor ${mockProps.doctorName}` });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.imageSrc);
  });
});
