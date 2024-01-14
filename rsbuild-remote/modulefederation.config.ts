import { dependencies } from "./package.json";

const ecosystemMfeConfig = {
  name: 'app_02',
  filename: 'remoteEntry.js',
  exposes: {
    "./Remote": "./src/Remote.tsx"
  },
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};

export default ecosystemMfeConfig;
