import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoadingSpinner;