import React, { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "danger",
  });

  const showAlert = ({ msg, type }) => setAlert({ show: true, msg, type });

  const hideAlert = () => setAlert({ show: false, msg: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
