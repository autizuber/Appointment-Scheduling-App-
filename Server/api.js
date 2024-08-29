var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var ConectionString = "mongodb://127.0.0.1:27017";
const port = process.env.PORT ||  3030

app.get("/",(req,res)=>{
    res.send("<h1>Wellcome to api </h1>")
});

// Users Modules

app.get("/users",(req,res)=>{
  mongoClient.connect(ConectionString).then((ClientObj)=>{
    var databas = ClientObj.db("react-todo");
    databas.collection("tblusers").find({}).toArray().then((document)=>{
        res.send(document);
        res.end();
    })
  })
})

app.post("/rigister-user",(req,res)=>{

  var user = {
    UserId : req.body.UserId,
    UserName: req.body.UserName,
    Password : req.body.Password,
    Email : req.body.Email,
    Mobile : req.body.Mobile
  }
  mongoClient.connect(ConectionString).then((ClientObj)=>{
      var databas = ClientObj.db("react-todo");
      databas.collection("tblusers").insertOne(user).then(()=>{
          console.log("User Rigister");
          res.end();
      })
  })

})

app.put("/edit-user/:userid",(req,res)=>{
    mongoClient.connect(ConectionString).then((ClientObj)=>{
      var databas = ClientObj.db("react-todo");
      databas.collection("tblusers").updateOne({UserId:req.params.userid},{$set:{UserId:req.body.UserId,UserName:req.body.UserName,Password:req.body.Password,Email:req.body.Email,Mobile:req.body.Mobile}}).then(()=>{
        console.log("User Record Updated");
        res.end();
      })
    })
})

app.delete("/delete-user/:userid",(req,res)=>{
  mongoClient.connect(ConectionString).then((ClientObj)=>{
    var databas = ClientObj.db("react-todo");
    databas.collection("tblusers").deleteOne({UserId:req.params.userid}).then(()=>{
        console.log("User Details Deleted")
    })
  })
})


//Appoimentens Module

app.get("/appointments/:userid",(req,res)=>{
  mongoClient.connect(ConectionString).then((ClientObj)=>{
    var databas = ClientObj.db("react-todo");
    databas.collection("tblappointment").find({UserId:req.params.userid}).toArray().then((document)=>{
        res.send(document);
        res.end();
    })
  })
})

app.get("/get-appointments/:id",(req,res)=>{
  mongoClient.connect(ConectionString).then((ClientObj)=>{
    var databas = ClientObj.db("react-todo");
    databas.collection("tblappointment").find({Appointment_Id:parseInt(req.params.id)}).toArray().then((document)=>{
        res.send(document);
        res.end();
    })
  })
})

app.post("/add-appointments",(req,res)=>{

  var appointments = {
   Appointment_Id : parseInt(req.body.Appointment_Id),
   Title : req.body.Title,
   Discription : req.body.Discription,
   Date : new Date(req.body.Date),
   UserId : req.body.UserId
  }
  mongoClient.connect(ConectionString).then((ClientObj)=>{
      var databas = ClientObj.db("react-todo");
      databas.collection("tblappointment").insertOne(appointments).then(()=>{
          console.log("Appointment Add Successfuly");
          res.end();
      })
  })

})

app.put("/edit-appointments/:id",(req,res)=>{
  mongoClient.connect(ConectionString).then((ClientObj)=>{
    var databas = ClientObj.db("react-todo");
    databas.collection("tblusers").updateOne({Appointment_Id:parseInt(req.params.id)},{$set:{Appointment_Id:parseInt(req.body.Appointment_Id),Title:req.body.Title,Discription:req.body.Discription,Date:new Date(req.body.Date),UserId:req.body.UserId}}).then(()=>{
      console.log("Appointments Edit Successfuly");
      res.end();
    })
  })
})


app.delete("/delete-appointment/:id",(req,res)=>{

  mongoClient.connect(ConectionString).then((ClientObj)=>{
    var databas = ClientObj.db("react-todo");
    databas.collection("tblappointment").deleteOne({Appointment_Id:parseInt(req.params.id)}).then(()=>{
      console.log("Appointment deleted...");
      res.end();
    })
  })

})





app.listen(port)
console.log("App Started on http://127.0.0.1:3030")
