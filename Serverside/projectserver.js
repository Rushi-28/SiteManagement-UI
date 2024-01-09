var exp=require('express');
var sq=require('mysql2');
var bp=require('body-parser');
var cor=require('cors');

var ap=exp();
ap.use(bp.json());
ap.use(cor());

var conn=sq.createConnection({
host:"localhost",
user:"root",
password:"root",
database:"project"
});

conn.connect(function(err){
if(!err)
console.log("database connected successfully");
});

ap.listen(9000,function(){
console.log("server at 9000");
});


ap.post("/login",function(req,res){
	var nm=req.body.username;
	var ps=req.body.password;
	const query = "SELECT * FROM user WHERE username = ? AND password = ?";
	conn.query(query, [nm, ps],function(err,data){
		if (!err && data.length>0 ) {
	    	  res.send("Login successful");
	   	} else {
		console.log(err);
	      	  res.status(401).send("Invalid credentials");
	        }
	});	
});

ap.post("/update",function(req,res){
	
	var pno=req.body.contactNo;
	var ps=req.body.currentPassword;
	var newps=req.body.newPassword;
	const query = "update user set password= ? WHERE contactNo = ? AND password = ?;";
	const q1="SELECT * FROM user WHERE contactNo = ? AND password = ?";
	conn.query(query, [newps ,pno, ps],function(err,data){
		if (!err) {
		conn.query(q1,[pno,newps],function(err,data){
			if(!err &&  data.length>0 )
			{ res.send("Password updated successfully"); }
			 else {
			console.log(err);
	      		res.status(401).send("Invalid User");}
})
	    	  
	   	} else {
	      	  res.status(401).send("Failed");
	        }
	});	
});

ap.post("/registration",function(req,res){
	var nm=req.body.username;
	var eml=req.body.email;
	var ps=req.body.password;
	var pno=req.body.contactNo;
	var query="insert into user(username,email,password,contactNo) values(?,?,?,?);";

	conn.query(query,[nm,eml,ps,pno],function(err){
		if(!err)
		{
		res.send("Registered Successfully...Please Proceed to Login...");
		}
		else
		res.send("Registration Failed");
	})
})

ap.all('*',function(req,res){
	res.send("Wrong url....")
})