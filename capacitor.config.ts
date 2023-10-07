import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'meme-mory-game',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    "cleartext": true
  }
};

export default config;
