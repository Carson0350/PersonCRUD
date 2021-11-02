const express = require('express');
const app = express();
const PORT = 3001;
const mysql = require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Person',
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${db.threadId}`);
});


app.post("/create", (req, res) => {
  console.log(req.body)
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const subStart = req.body.subStart
  const subEnd = req.body.subEnd

  db.query(
    "INSERT INTO Person (firstName, lastName, subStart, subEnd) VALUES (?,?,?,?)",
    [firstName, lastName, subStart, subEnd],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get('/getPeople', (req, res) => {
  db.query('SELECT * FROM Person', (err, result) => {
    if (err) {
      res.status(400);
    } else {
      res.send(200).json({
        result,
      });
    }
  });
});

app.put('/updatePerson', (req, res) => {
  const id = req.body.id
  const firstName = req.body.newFirstName
  db.query('UPDATE SET Person firstName = ? WHERE id = ?', [firstName, id], (err, result) => {
    if (err) {
      res.status(400);
    } else {
      res.send(200).json({
        result,
      });
    }
  })
})

// app.delete()


app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});