import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertBrowser(props) {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert
        className="alertBrowser"
        id="alert"
        variant="light"
        onClose={() => setShow(false)}
        dismissible
      >
        <p className="alertText">
          For a better experience it's recommended to use <u>Chrome</u> or{" "}
          <u>Firefox</u>.
        </p>
      </Alert>
    );
  }
  return <div></div>;
}
