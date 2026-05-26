function mostrarMensagem() {

  const mensagem = document.getElementById("mensagem");
  const musica = document.getElementById("musica");

  mensagem.classList.add("show");

  musica.volume = 0.5;

  musica.play().catch((erro) => {
    console.log("Erro ao tocar música:", erro);
  });

}
