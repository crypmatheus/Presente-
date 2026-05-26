function mostrarMensagem() {

  const mensagem = document.getElementById("mensagem");
  const musica = document.getElementById("musica");

  mensagem.classList.add("show");

  musica.play();
}
