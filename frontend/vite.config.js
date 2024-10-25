import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000, // Specify any port you prefer
    proxy: {
      "/api": {
        target: "http://209.58.188.249", // Replace with your VPN API address
        changeOrigin: true, // Change the origin header to match the target
        secure: false, // If the backend uses self-signed SSL certificates, you might need this
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: if needed for your setup
      },
    },
  },
  plugins: [react()],
});
