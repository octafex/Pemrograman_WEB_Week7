// Pop-up selamat datang
document.getElementById('welcomeBtn').addEventListener('click', function() {
  alert('Selamat datang di CyberGuard! 🛡️\nTetap aman di dunia digital.');
});

// Validasi form sederhana (opsional tambahan)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
    e.preventDefault();
    alert('Nama dan email tidak boleh kosong!');
  } else {
    alert('Terima kasih telah menghubungi kami!');
  }
});