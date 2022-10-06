var cad = `
<div class="container">
<div class="row">
  <div class="col-lg-12">
    <div class="card mb-3">
      <h5 class="card-header text-center">Animales en adopción</h5>
      <div class="card-body">
        <section class="card-carousel">
`;
for (let i = 0; i < data.length; i++) {
  cad += `
  <div class="card">
  <img src="${data[i].image}" alt="foto">
  <div class="card-body">
  <h4>Nombre: ${data[i].nombre}</h4>
    <h6 class="card-text">Edad: ${data[i].edad_aprox}</h6>
    <h6 class="card-text">Raza: ${data[i].raza}</h6>
    <h6 class="card-text">Tamaño: ${data[i].tamaño}</h6>
  </div>
</div>
       `;
}
cad += `
</section>
</div>
</div>
</div>
</div>
</div>
`;
document.getElementById("gatos").innerHTML = cad;
