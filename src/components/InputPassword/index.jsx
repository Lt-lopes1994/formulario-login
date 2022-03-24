import "./style.css";
import CloseEye from "../../assets/close-eye.svg";
import OpenEye from "../../assets/open-eye.svg";
import { useState } from "react";

function InputPassword({ state, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="containerInputPassword">
      <input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="password"
        value={state}
        onChange={(e) => handleChange(e)}
      />
      <img
        src={showPassword ? CloseEye : OpenEye}
        alt="Show password"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
}

export default InputPassword;
