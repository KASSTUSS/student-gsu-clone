import React from "react";

export interface IRoutingContextValue {
  willNavigate: boolean;
  animationDone: React.Dispatch<React.SetStateAction<boolean>>;
  callback: () => void;
  setCallback: React.Dispatch<React.SetStateAction<() => void>>;
}
