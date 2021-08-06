<?php include 'connection.php'; ?>
<?php

  session_start();
  $_SESSION['status'] = "fail";

  if(isset($_POST['uname']) AND isset($_POST['password']) == true)
  {
    $uname = $_POST['uname'];
    $password = $_POST['password'];
    // $enPassword = sha1($password);

    $dbQuery = "SELECT * FROM user WHERE username='$uname' AND password='$password'";
    $result = mysqli_query($con, $dbQuery);


    if($result)
    {
      $count = mysqli_num_rows($result);

      if($count==1)
      {
        $_SESSION['status'] = "success";
        echo $_SESSION['status'];
      }     
      else
      {
        echo "Invalid password";
      }
    }
    else
    {
      echo "Invalid credentials";
    }
  }

  if(isset($_POST['view']))
  {
    // if($_SESSION['status'] == $_POST['view'])
    // {
    $users = "SELECT * FROM user";
    $resultUsers = mysqli_query($con, $users);

    if($resultUsers)
    {
          while($row = mysqli_fetch_assoc($resultUsers))
          {
            echo "<pre>";
            print_r($row);
            echo "</pre><br>";
          }
    }
    // }
  }
      
?>
<?php mysqli_close($con); ?>