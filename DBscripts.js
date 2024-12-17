function DBLog_In(argument) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://21theodicy:042124@cluster0.khtnn.mongodb.net/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      var dbo = db.db("portfoliodb_users");
      var UserName = document.getelementbyId("u_name");
      var Pass = document.getelementbyId("psw");

      dbo.collection("PortfolioDB").find(UserName).toArray(function(err, result) {
          if (err) throw err;
            console.log(result);
            db.close();
      });
  });
}
