module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '817b1ffd9455004cd601760f354af649'),
  },
});
