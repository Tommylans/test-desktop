const nodeenv = process.env.NODE_ENV
const isProd = nodeenv === 'production'


module.exports = {
  packagerConfig: {
    name: 'Test',
    executableName: 'test-desktop',
    appBundleId: 'nl.devv.test',
    osxSign: isProd && {
      identity: 'Developer ID Application: Tom Lanser (R74MU8J55F)',
      hardenedRuntime: true,
      entitlements: 'entitlements.mac.plist',
      entitlementsInherit: 'entitlements.mac.plist',
      gatekeeperAssess: false,
    },
    osxNotarize: isProd && {
      appBundleId: 'nl.devv.test',
      tool: 'notarytool',
      appleApiKey: process.env.APPLE_API_KEY_PATH,
      appleApiKeyId: process.env.APPLE_API_KEY_ID,
      appleApiIssuer: process.env.APPLE_API_ISSUER,
    },
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'test-desktop',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          bin: 'test-desktop',
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          bin: 'test-desktop',
        },
      },
    },
  ],
};
