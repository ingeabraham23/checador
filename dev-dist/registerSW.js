if('serviceWorker' in navigator) navigator.serviceWorker.register('/checador/dev-sw.js?dev-sw', { scope: '/checador/', type: 'classic' })