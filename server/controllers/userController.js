const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.admin = (req, res) => {
  res.render('admin');
}

exports.home = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      res.render('home', { rows});
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.viewdrink = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM drink WHERE active = "active"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedDrink = req.query.removed;
      res.render('drinkmanagement', { rows, removedDrink });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.formdrink = (req, res) => {
  res.render('add-drink');
}

exports.createdrink = (req, res) => {
  const { name, brand, price_buy, price_intern, price_extern, box_size, stock } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query('INSERT INTO drink SET name = ?, brand = ?, price_buy = ?, price_intern = ?, price_extern = ?, box_size = ?, stock = ?', [name, brand, price_buy, price_intern, price_extern, box_size, stock], (err, rows) => {
    if (!err) {
      res.render('add-drink', { alert: 'Drink added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.editdrink = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM drink WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-drink', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.updatedrink = (req, res) => {
  const { name, brand, price_buy, price_intern, price_extern, box_size, stock } = req.body;
  // User the connection
  connection.query('UPDATE drink SET name = ?, brand = ?, price_buy = ?, price_intern = ?, price_extern = ?, box_size = ?, stock = ? WHERE id = ?', [name, brand, price_buy, price_intern, price_extern, box_size, stock, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      connection.query('SELECT * FROM drink WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-drink', { rows, alert: `${name} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from drink table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.viewalldrink = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM drink WHERE id = ? AND active = "active"', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-drink', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.deletedrink = (req, res) => {
  connection.query('UPDATE drink SET active = "notactive" WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      let removedDrink = encodeURIComponent('Drink successeflly removed.');
      res.redirect('/admin/drinkmanagement/?removed=' + removedDrink);
    } else {
      console.log(err);
    }
    console.log('The data from drink table are: \n', rows);
  });
}




exports.viewuser = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('usermanagement', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.finduser = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) {
      res.render('usermanagement', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.formuser = (req, res) => {
  res.render('add-user');
}

exports.createuser = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
    if (!err) {
      res.render('add-user', { alert: 'User added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.edituser = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.updateuser = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  // User the connection
  connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.deleteuser = (req, res) => {
  connection.query('UPDATE user SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
    if (!err) {
      let removedUser = encodeURIComponent('User successeflly removed.');
      res.redirect('/admin/usermanagement/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from beer table are: \n', rows);
  });
}

exports.viewalluser = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}



exports.sale = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM drink WHERE active = "active"', (err, rows) => {
    if (!err) {
      var user_id = parseInt(req.params.id);
      for(var i = 0; i < rows.length; i++){
        rows[i].user_id = user_id;
      }
      res.render('sale', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.makesale = (req, res) => {
  // User the connection
  var user_id = req.params.id;
  var drink_id = req.params.drink;
  connection.query('INSERT INTO sales SET user_id = ?, drink_id = ?', [user_id, drink_id], (err, rows) => {
    if (!err) {
      connection.query('UPDATE drink SET stock = stock - 1 WHERE id = ?', [drink_id], (err, rows) => {
        if (err) {
          console.log(err);
        }
      })
      connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        if (!err) {
          res.render('home', { rows });
        } else {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
    console.log('The data from drink table: \n', rows);
  });
}

exports.overview = (req, res) => {
  if(req.params.id == 0){
    var obj_drink;
    // User the connection
    connection.query('SELECT * FROM sales WHERE user_id = ? AND payed = 0', [req.params.id], (err, sales) => {
      // When done with the connection, release it
      if (!err) {
        if(sales.length >= 1){
        connection.query('SELECT * FROM drink', (err, drink) => {
          obj_drink = drink;
          sales[0].total_cost = 0;
          for(var i = 0; i < sales.length; i++){
            var j = 0;
            while(j < drink.length){
              if(sales[i].drink_id == drink[j].id){
                sales[i].drink_name = drink[j].name;
                sales[i].price = drink[j].price_extern;
                sales[0].total_cost += drink[j].price_extern;
                sales[0].user_id = req.params.id;
              }
              j++;
            }
          } 
        });
      }
        res.render('overview', { sales });
      } else {
        console.log(err);
      }
    });
  }
  var obj_drink;
  // User the connection
  connection.query('SELECT * FROM sales WHERE user_id = ? AND payed = 0', [req.params.id], (err, sales) => {
    // When done with the connection, release it
    if (!err) {
      if(sales.length >= 1){
      connection.query('SELECT * FROM drink', (err, drink) => {
        obj_drink = drink;
        sales[0].total_cost = 0;
        for(var i = 0; i < sales.length; i++){
          var j = 0;
          while(j < drink.length){
            if(sales[i].drink_id == drink[j].id){
              sales[i].drink_name = drink[j].name;
              sales[i].price = drink[j].price_intern;
              sales[0].total_cost += drink[j].price_intern;
              sales[0].user_id = req.params.id;
            }
            j++;
          }
        } 
      });
    }
      res.render('overview', { sales });
    } else {
      console.log(err);
    }
  });
}

exports.pay = (req, res) => {
  connection.query('UPDATE sales SET payed = 1 WHERE id = ?', req.params.id, (err, rows) => {
    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
          res.render('home', { rows,  });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
  });
}

exports.payall = (req, res) => {
  connection.query('UPDATE sales SET payed = 1 WHERE user_id = ?', req.params.user_id, (err, rows) => {
    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
          res.render('home', { rows});
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
  });
}