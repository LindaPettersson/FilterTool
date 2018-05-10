module.exports = function(app){
	var multer = require('multer'); //npm install multer --save
	var upload = multer({dest: __dirname + '/uploads'});
	
	app.post("/api/file/upload", upload.single('stacktraceFile'), uploadFile);
	
	//callback function
	function uploadFile(req, res){
		var myFile = req.file;
		
		var originalname = myFile.originalname; //file name on user computer
		var filename = myFile.filename; //new random file name from api
		var path = myFile.path; //full path of uploaded file
		var destination = myFile.destination; //folder where file is saved
		var size = myFile.size; //file size
		
		res.send(myFile);
	};
	
};