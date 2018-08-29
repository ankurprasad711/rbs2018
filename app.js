const express = require('express')
const app = express()
var mysql = require('mysql');

var connection = mysql.createConnection({
        host     : "mydbinstance.cm4ggbovvhmk.us-east-2.rds.amazonaws.com",
        user     : "ankurprasad711",
        password : "ankur711",
        port     : "3306",
        database : "mydatabase"
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
        res.sendFile('index.html');
})

app.get('/page/', (req, res) => {
        var cin = parseInt(req.query.custid);
        console.log(cin);
        console.log("new");
    
        //res.send(custid);
        var query = 'select * from assets where CIN=' + cin;
        console.log(query);
        
        connection.query(query, function (error, results, fields) {
                if (error) {
                        console.error('Failed');
                } else {
                        console.log('Sent');
                        console.log(results);
                         
                         console.log(JSON.stringify(results));
                        
                         res.send(JSON.stringify(results));
                }
                
        


        
        });
    });
    app.get('/p/', (req, res) => {
        var acc_no = parseInt(req.query.acc_no);
        console.log(acc_no);
        var q="select transaction_id,type,amount from accounts where CIN="+acc_no;
     console.log(q);
         connection.query(q, function (error, results, fields) {
                if (error) {
                        console.error('Failed');
                } else {
                        console.log('Sent');
                        console.log(results);
                         res.send(JSON.stringify(results));
                       
                }
                
        });
        
        
       

        
});
app.listen(3000, () => console.log('Server running on port 3000'))