document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;
    if (!name || !email || !alamat) {
        alert('Harap isi semua field');
    } else {
        alert('Form berhasil dikirim');
    }
});


