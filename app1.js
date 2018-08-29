
  var app = angular.module('app', []);
  




app.controller('homeCtrl', function($scope,$http) {
    
          $scope.demo=function(){
            var accno;
            var t=0;
            console.log("hello");
                $http.get('/page/?custid='+ $scope.custid)
                .then(function successCallback(response) {
                    console.log(response + 'daugd');
                        var result = response.data;
                          console.log(response.data);
                            $scope.account_number = result["0"].account_number;
                            $scope.balance = result["0"].balance;
                           $scope.credit = result["0"].total_credit;
                           $scope.debit = result["0"].total_debit;
                            console.log(result["0"].account_number);
                             accno=$scope.custid;
                        fn1(accno);
                            
            }); 

            
             
  
             }
             function fn1(accno){
     $http.get('/p/?acc_no='+ accno)
                .then(function successCallback(response) {
                            console.log(response.data);
                            var result=response.data;
                            console.log(result);
                           

                           /* for(var j = 0; j < result.length; j++) {
                               var arr=[];
                               
                                myBooks.push(result[j]);
                                console.log(myBooks);
                            }*/

                            var $table = $('#table');

                            $(function () {
                                  $('#table').bootstrapTable({
                                       columns: [{
                                            field: 'id',
                                            title: 'Transaction id'
                                        }, {
                                            field: 'name',
                                            title: 'amount'
                                        }, {
                                            field: 'price',
                                            title: 'type'
                                        }],
                                        data: [{
                                            id: result[0].transaction_id,
                                            name: result[0].amount,
                                            price: result[0].type,
                                            
                                        }]
                                  });
                              });

                });

}      


                
          
               

         


        
});






