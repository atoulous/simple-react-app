export default {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  localization: { timezone: process.env.TIMEZONE || 'Europe/Paris' },
};
