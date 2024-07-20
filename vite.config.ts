import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 443,
  //   host: true,
  //   hmr: {
  //       host: 'open-space-ai-web-app.local',
  //       port: 443,
  //   },
  //   https: {
  //     key: fs.readFileSync('./open-space-ai-web-app.local-key.pem'),
  //     cert: fs.readFileSync('./open-space-ai-web-app.local.pem'),
  //   },
  // },
})
