module.exports = ({ config }) => ({
  name: config.name,
  slug: "health_check",
  owner: "nutria",
  extra: {
    eas: {
      projectId: "da5fcd64-80a0-4f95-8c31-ca08901bb27b",
    },
  },
  android: {
    package: "com.healthCheck.healthCheck",
  },
  sdkVersion: "48.0.0",
});
