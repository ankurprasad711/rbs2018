const express = require('express')
const app = express()
var mysql = require('mysql');

var connection = mysql.createConnection({
        host     : "retailbanking.cu1eaqjaoadd.us-east-2.rds.amazonaws.com",
        user     : "pgupta1312",
        password : "pgupta1312",
        port     : "3306",
        database : "Retail"
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
        res.sendFile('C:/Users/Administrator/Downloads/RBS2018-master/RBS2018-master/index.html');
})
app.get('/1.png', (req, res) => {
        res.sendFile('/home/ubuntu/node-server/1.PNG');
})
app.get('/2.png', (req, res) => {
        res.sendFile('/home/ubuntu/node-server/2.PNG');
})
app.get('/page/', (req, res) => {
        var cin = parseInt(req.query.custid);
        console.log(cin);
        console.log("new");
    
        //res.send(custid);
        var query = 'select * from account where CIN=' + cin;
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
        var q="select transaction_id,type,amount,date from transactions where account_number="+acc_no;
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