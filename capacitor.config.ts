import { type CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.qwikcap.loc",
  appName: "qwik-cap",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    Geolocation: {},
  },
};

export default config;
