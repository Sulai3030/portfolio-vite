import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react({
    // Add this line to enable importing SVGs as React components
    svgr: true,
  })],
});
