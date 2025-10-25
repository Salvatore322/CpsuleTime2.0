<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyCwlnJdN5S6w0qB_7eyurrZ_XmbK5Ng4Wo",
    authDomain: "capsuletime-eba69.firebaseapp.com",
    databaseURL: "https://capsuletime-eba69-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "capsuletime-eba69",
    storageBucket: "capsuletime-eba69.firebasestorage.app",
    messagingSenderId: "410116365403",
    appId: "1:410116365403:web:38e19fc7a8e1a14706b37e",
    measurementId: "G-Q7VPPFDFPM"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  function saveCapsule(data) {
    db.ref('capsule').push(data);
  }
</script>
