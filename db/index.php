<?php

require 'Slim/Slim.php';

$app = new Slim();

//Gallery Users
$app->get('/galleryuser', 'getGalleryUsers');
$app->get('/galleryuser/:id',	'getGalleryUser');
$app->get('/galleryuser/search/:query', 'findByUserName');
$app->get('/galleryuser/search/:username/:password', 'findByUserNamePassword');
$app->post('/galleryuser', 'addGalleryUser');
$app->put('/galleryuser/:id', 'updateGalleryUser');
$app->delete('/galleryuser/:id',	'deleteGalleryUser');

//Gallery Photos
$app->get('/galleryphoto', 'getGalleryPhotos');
$app->get('/galleryphoto/:id',	'getGalleryPhoto');
$app->get('/galleryphoto/search/:query', 'findByPhotoTitle');
$app->post('/galleryphoto', 'addGalleryPhoto');
$app->put('/galleryphoto/:id', 'updateGalleryPhoto');
$app->delete('/galleryphoto/:id',	'deleteGalleryPhoto');

$app->run();

/***************************************************************************
								GALLERY USERS
***************************************************************************/

function getGalleryUsers() {
	$sql = "select * FROM galleryuser ORDER BY username";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);  
		$galleryusers = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		// echo '{"galleryuser": ' . json_encode($galleryusers) . '}';
		echo json_encode($galleryusers);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getGalleryUser($id) {
	$sql = "SELECT * FROM galleryuser WHERE userId=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$galleryuser = $stmt->fetchObject();  
		$db = null;
		echo json_encode($galleryuser); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function addGalleryUser() {
	//error_log('addGalleryUser\n', 3, '/var/tmp/php.log');
	$request = Slim::getInstance()->request();
	$galleryuser = json_decode($request->getBody());
	$sql = "INSERT INTO galleryuser (username, email, password) VALUES (:username, :email, :password)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("username", $galleryuser->username);
		$stmt->bindParam("email", $galleryuser->email);
		$stmt->bindParam("password", $galleryuser->password);
		$stmt->execute();
		$galleryuser->id = $db->lastInsertId();
		$db = null;
		echo json_encode($galleryuser); 
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateGalleryUser($id) {
	$request = Slim::getInstance()->request();
	$body = $request->getBody();
	$galleryuser = json_decode($body);
	$sql = "UPDATE galleryuser SET username=:username, email=:email, password=:password WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("username", $galleryuser->username);
		$stmt->bindParam("email", $galleryuser->email);
		$stmt->bindParam("password", $galleryuser->password);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo json_encode($galleryuser); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteGalleryUser($id) {
	$sql = "DELETE FROM galleryuser WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByUserName($query) {
	$sql = "SELECT * FROM galleryuser WHERE UPPER(username) LIKE :query ORDER BY username";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$query = "%".$query."%";  
		$stmt->bindParam("query", $query);
		$stmt->execute();
		$galleryusers = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($galleryusers);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByUserNamePassword($username, $password) {
	$sql = "SELECT * FROM galleryuser WHERE UPPER(username) LIKE :username AND UPPER(password) LIKE :password  ORDER BY username";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$username = "%".$username."%";  
		$password = "%".$password."%";  
		$stmt->bindParam("username", $username);
		$stmt->bindParam("password", $password);
		$stmt->execute();
		$galleryusers = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($galleryusers);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

/***************************************************************************
								GALLERY PHOTO
***************************************************************************/

function getGalleryPhotos() {
	$sql = "select * FROM galleryphoto ORDER BY photoTitle";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);  
		$galleryphotos = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		// echo '{"galleryphoto": ' . json_encode($galleryphotos) . '}';
		echo json_encode($galleryphotos);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getGalleryPhoto($id) {
	$sql = "SELECT * FROM galleryphoto WHERE photoId=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$galleryphoto = $stmt->fetchObject();  
		$db = null;
		echo json_encode($galleryphoto); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function addGalleryPhoto() {
	//error_log('addGalleryPhoto\n', 3, '/var/tmp/php.log');
	$request = Slim::getInstance()->request();
	$galleryphoto = json_decode($request->getBody());
	$sql = "INSERT INTO galleryphoto (photoTitle, photoCaption, userImage, userId) VALUES (:photoTitle, :photoCaption, :userImage, :userId)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("photoTitle", $galleryphoto->photoTitle);
		$stmt->bindParam("photoCaption", $galleryphoto->photoCaption);
		$stmt->bindParam("userImage", $galleryphoto->userImage);
		$stmt->bindParam("userId", $galleryphoto->userId);
		$stmt->execute();
		$galleryphoto->id = $db->lastInsertId();
		$db = null;
		echo json_encode($galleryphoto); 
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateGalleryPhoto($id) {
	$request = Slim::getInstance()->request();
	$body = $request->getBody();
	$galleryphoto = json_decode($body);
	$sql = "UPDATE galleryphoto SET photoTitle=:photoTitle, photoCaption=:photoCaption, userImage=:userImage, galleryId=:galleryId WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("photoTitle", $galleryphoto->photoTitle);
		$stmt->bindParam("photoCaption", $galleryphoto->photoCaption);
		$stmt->bindParam("userImage", $galleryphoto->userImage);
		$stmt->bindParam("galleryId", $galleryphoto->galleryId);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo json_encode($galleryphoto); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteGalleryPhoto($id) {
	$sql = "DELETE FROM galleryphoto WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByPhotoTitle($query) {
	$sql = "SELECT * FROM galleryphoto WHERE UPPER(photoTitle) LIKE :query ORDER BY photoTitle";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$query = "%".$query."%";  
		$stmt->bindParam("query", $query);
		$stmt->execute();
		$galleryphotos = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($galleryphotos);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}


function getConnection() {
	$dbhost="daneel";
	$dbuser="N00112462";
	$dbpass="N00112462";
	$dbname="n00112462";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

?>