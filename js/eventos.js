document.addEventListener("DOMContentLoaded", () => {

  const eventos = [
    { id: "contador-TLP-hero", fecha: "2025-12-31T21:30:00" },
  ];

  eventos.forEach(evento => {
    const contenedor = document.getElementById(evento.id);
    const fechaEvento = new Date(evento.fecha).getTime();

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaEvento - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
        contenedor.textContent = "¡El evento ha comenzado!";
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      contenedor.textContent = `${dias}D: ${horas}H: ${minutos}M: ${segundos}S`;
    }, 1000);
  });
});


function link(){
  window.location.href="eventos.html";
}
function link2(){
  window.location.href="eventos.html";
}
function link3(){
  window.location.href="eventos.html";
}