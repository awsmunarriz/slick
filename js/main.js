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
    <p class="card-text">Raza: ${data[i].raza}</p>
    <a href="#" class="btn btn-primary">Ver mas</a>
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
