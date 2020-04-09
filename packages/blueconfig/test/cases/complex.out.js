module.exports = {
  env: 'production',
  URL: 'https://browserid.org',
  use_minified_resources: true,
  var_path: '/home/browserid/var',
  database: {
    driver: 'mysql',
    user: 'browserid',
    create_schema: true,
    may_write: false
  },
  statsd: {
    enabled: true
  },
  bcrypt_work_factor: 12,
  authentication_duration: 1209600000,
  certificate_validity: 86400000,
  min_time_between_emails: 60000,
  max_compute_duration: 10000,
  disable_primary_support: false,
  enable_code_version: false,
  default_lang: ['en-US'],
  supported_languages: ['en-US'],
  locale_directory: 'locale',
  express_log_format: 'default',
  regex: /en-US/
}
