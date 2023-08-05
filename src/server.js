import http from "node:http";

import mysql from "mysql2/promise";

const server = http.createServer(async (req, res) => {
  const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
  };


  if (req.method === "GET" && req.url === "/") {
    console.log("executed request")
    const connection = await mysql.createConnection(config);

    await connection.query(
      "CREATE TABLE IF NOT EXISTS users (name VARCHAR(255))"
    );

    connection.query(`INSERT INTO users(name) VALUES('John Doe')`);

    const [rows, _] = await connection.execute("SELECT * FROM users");

    connection.end();

    const users = rows.map((user) => `<li>${user.name}</li>`);

    res.end(`<h1>Full Cycle Rocks!</h1>
  </br>
  <ul>
    ${users}
  </ul>
  `);
  } 
});

server.listen(3000, "0.0.0.0", () =>
  console.log("Server running on port 3000")
);
