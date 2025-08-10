const video = document.getElementById('back-video');

// Tentativa de autoplay no carregamento
video.play().catch(() => {
  console.log('Autoplay bloqueado, aguardando interação do usuário...');
  
  // Se autoplay for bloqueado, inicia no primeiro toque
  const startVideo = () => {
    video.play();
    document.removeEventListener('touchstart', startVideo);
    document.removeEventListener('click', startVideo);
  };
  
  document.addEventListener('touchstart', startVideo);
  document.addEventListener('click', startVideo); } )