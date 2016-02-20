var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/covalent';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE partnerships(userId1 STRING not null, userId2 STRING not null, partnerShipId SERIAL PRIMARY KEY, text VARCHAR(40) not null)');
query.on('end', function() { client.end(); });
