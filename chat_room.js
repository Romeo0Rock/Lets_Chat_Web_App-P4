function addUser()
  {
     localStorage.setItem("user_name", user_name);
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ 
          purpose : "having riz"
      });
  }   
 