import React from "react";
import { Alert } from "react-bootstrap";
import $ from "jquery";

export default function AlertBrowser(props) {
  function closeAlert() {
    $(".alertBrowser").addClass("fadeOut")
  }

  return (
    <Alert
      className="alertBrowser"
      id="alert"
      variant="light"
      onClose={() => closeAlert()}
      dismissible
    >
      <p className="alertText">
        For a better desktop experience it's recommended to use <u>Chrome</u> or{" "}
        <u>Firefox</u>.
      </p>
    </Alert>
  );
}
