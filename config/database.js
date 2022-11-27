module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd3k6u1gp3jtevon8ojg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'portafolio_yqjw'),
      user: env('DATABASE_USERNAME', 'ricardo'),
      password: env('DATABASE_PASSWORD', 'lW7sVsiaSGl0u53brvnomjF3Vf5xY1Pv'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
