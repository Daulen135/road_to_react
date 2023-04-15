import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['fsevents']
  }
})

//code below was added to fix error wtuh fsevents
///optimizeDeps: {
//   exclude: ['fsevents']
// }