function submitFeedback() {
    // Obtener los valores de los campos del formulario
    var userName = document.getElementById("name").value;
    var userAge = document.getElementById("age").value;
    var userEmail = document.getElementById("email").value;
    var userJob = document.getElementById("job").value;
    var userDesignation = document.getElementById("designation").value;
    var userProductChoice = document.getElementById("productType").value;
    var userFeedback = document.getElementById("feedbackText").value;
  
    // Verificar que todos los campos estén completos
    if (userName && userAge && userEmail && userJob && userDesignation && userProductChoice && userFeedback) {
      // Mostrar la sección de información del usuario
      document.getElementById("userInfo").style.display = "block";
  
      // Asignar los valores de los campos del formulario a los elementos de la información del usuario
      document.getElementById("userName").innerHTML = userName;
      document.getElementById("userAge").innerHTML = userAge;
      document.getElementById("userEmail").innerHTML = userEmail;
      document.getElementById("userJob").innerHTML = userJob;
      document.getElementById("userDesignation").innerHTML = userDesignation;
      document.getElementById("userProductChoice").innerHTML = userProductChoice;
      document.getElementById("userFeedback").innerHTML = userFeedback;
  
      // Limpiar los campos del formulario
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("email").value = "";
      document.getElementById("job").value = "";
      document.getElementById("designation").value = "";
      document.getElementById("productType").value = "";
      document.getElementById("feedbackText").value = "";
  
      // Mostrar mensaje de agradecimiento
      alert('Thank you for your valuable feedback');
    } else {
      // Si falta algún campo, mostrar un mensaje de advertencia
      alert("Please fill in all fields.");
    }
  }
  
  // Obtener el botón de enviar
  const submitButton = document.getElementById('submitBtn');
  
  // Asignar la función submitFeedback al evento onclick del botón
  submitButton.onclick = submitFeedback;
  