import React from "react";

export default interface IAlertProps {
  icon: string;
  text: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}
