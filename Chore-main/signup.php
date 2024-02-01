<?php
include('db.php');


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $gender = $_POST["gender"];
    $familyRole = $_POST["family_role"];
    $dob = $_POST["d_o_b"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); 

    $sql = "INSERT INTO people (fname, lname, gender, dob, tel, email, passwd, fid) VALUES ('$fname', '$lname', '$gender', '$dob', '$phone', '$email', '$password', '$familyRole')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


$conn->close();
?>
