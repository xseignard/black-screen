const packageJson = require("./package.json");

/**
 * @typedef {import('expo/config').ExpoConfig} ExpoConfig
 */

/**
 * @type {ExpoConfig}
 */
const config = {
  name: packageJson.name,
  slug: packageJson.name,
  version: packageJson.version,
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.xseignard.blackscreen",
    supportsTablet: true,
  },
  android: {
    package: "com.xseignard.blackscreen",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  plugins: [
    [
      "react-native-vision-camera",
      {
        cameraPermissionText: "$(PRODUCT_NAME) needs access to your Camera.",
      },
    ],
  ],
};

module.exports = config;
