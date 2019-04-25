module.exports = {
    client: 'pg',
    connection: 'postgres://postgres:konejo387@localhost:5432/store',
    pool: {
      min: 2,
      max: 6,
      propagateCreateError: false
     }
};
