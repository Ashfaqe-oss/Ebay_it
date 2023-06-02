import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        includeAssets: ['favicon-96x96.png', 'android-icon-192x192.png'],
        manifest: {
            name: 'Ebayy',
            short_name: 'Ebayy',
            description: 'Decentralized E-commerce Marketplace',
            theme_color: '#000',
            icons: [{
                    src: 'android-chrome-192x192',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'android-chrome-512x512',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ],
            // start_url: '/'
        }
    })],
    define: {
        global: "globalThis",
        "process.env": {},
    },
});