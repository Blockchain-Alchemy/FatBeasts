import React from "react";
import { NotificationsProvider } from "@mantine/notifications";
import { FractalProvider } from "./components/FractalContext";

const Providers = ({ children }: { children: any }) => {
  return (
    <FractalProvider>
      <NotificationsProvider>{children}</NotificationsProvider>
    </FractalProvider>
  );
};

export default Providers;
