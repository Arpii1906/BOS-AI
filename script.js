function processImage() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p><b>⏳ AI sedang memproses desain kamu...</b></p>";

  setTimeout(() => {
    resultDiv.innerHTML = `
      <p><b>✅ Desain berhasil diperbaiki oleh BOS Ai!</b></p>
      <p style="color: gray;">(Simulasi berhasil - versi AI nanti bisa ditambah)</p>
    `;
  }, 2000);
}