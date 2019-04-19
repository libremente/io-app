const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    "node_modules/(?!react-native|react-navigation|react-native-device-info|jail-monkey|native-base|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui)"
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
  testMatch: [
    "**/__e2e__/*.e2e.ts?(x)"
  ],
  forceExit: true,
  verbose: true
};
