module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      "vercel-deploy": {
        enabled: true,
        config: {
          deployHook:
            env("VERCEL_DEPLOY_PLUGIN_HOOK"),
          apiToken: env("VERCEL_DEPLOY_PLUGIN_API_TOKEN"),
          appFilter: env("VERCEL_DEPLOY_PLUGIN_APP_FILTER"),
          teamFilter: "prj_I83PgxoyO7ve0TIzQW89V9v8Bon7",
          roles:  [ "strapi-super-admin" ],
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
