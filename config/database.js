module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfdsd1cgqg45rnv0aq0g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_b9m7'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'l85cZnqnqgqYHZcSb93GpS2TzHs18UF2'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
