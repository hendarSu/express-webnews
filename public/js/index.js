$(document).ready(function () {
  $("#create-news-form").submit(function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengambil data dari formulir
    let title = $("#title").val();
    let cover = $("#cover").val();
    let content = $("#content").val();

    // Mengirim data ke API menggunakan AJAX
    $.ajax({
      url: "/api/v1/news", // Ganti dengan URL API sesuai dengan struktur Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ title: title, cover: cover, content: content, isPublic: true, author: "Admin" }),
      success: function (response) {
        // Tindakan setelah berhasil
        alert("Berita berhasil ditambah.");
        // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
        window.location.href = "/";
      },
      error: function (error) {
        // Tindakan jika terjadi kesalahan
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal menyimpan berita.");
      },
    });
  });
});

$("#comment-form").submit(function (event) {
  event.preventDefault();

  const name = $("#name").val();
  const commentText = $("#comment").val();
  const newsId = $("#newsId").val(); // Ambil ID berita dari input tersembunyi

  $.ajax({
    url: "/api/v1/comments",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ name, comment: commentText, news_id: newsId }), // Sertakan ID berita
    success: function (response) {
      // $("#success-toast").toast("show");
      alert("Komentar berhasil ditambah.");

      window.location.href = "/news/" + newsId;
    },
    error: function (error) {
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menyimpan komentar.");
    },
  });

  $("#name").val("");
  $("#comment").val("");
});


// Menangani klik tombol "Edit"
$('.edit-btn').click(function () {
  // Dapatkan data yang sesuai dari tabel
  var row = $(this).closest('tr');

  var id = row.find('td:eq(0)').text();
  var nama = row.find('td:eq(1)').text();

  // ambil dari ajax
  $('#editModal #editData').val(nama);
  $('#editModal #idNews').val(id);
});

$("#registration-form").submit(function (event) {
  event.preventDefault();

  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const repassword = $("#repassword").val();

  if (password !== repassword) {
    alert("Maaf konfirmasi password yang and masukan tidak sesuai")
  } else {
    // Kirim data registrasi ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api//v1/users/register", // Ganti dengan rute API registrasi Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ name, email, password }),
      success: function (response) {
        // Tampilkan pesan sukses atau redirect ke halaman login
        alert("Registrasi berhasil! Silakan masuk.");
        window.location.href = "/";
      },
      error: function (error) {
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal mendaftar. Silakan coba lagi.");
      },
    });
  }
});

$(document).ready(function () {
  $("#login-form").submit(function (event) {
    event.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    // Kirim data login ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api/v1/login", // Ganti dengan rute API login Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ email, password }),
      success: function (response) {
        // Tampilkan pesan sukses atau redirect ke halaman utama
        alert("Login berhasil!");
        // window.location.href = "/"; // Redirect ke halaman utama jika diperlukan
      },
      error: function (error) {
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal login. Periksa kembali email dan password Anda.");
      },
    });
  });
});
