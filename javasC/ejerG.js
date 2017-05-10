function intersection(l1, l2){
  var l3 = [];

  for(var i = 0; i < l1.length; i++){
    for(var k = 0; k < l2.length; k++){
      if(l1[i] == l2[k]){
        l3.push(l1[i]);
      }
    }
  }
    return l3;
}

function intersectionSet2(l1, l2){
  return l1.filter(function(n)){
    return l2.indexOf(n) !== -1
  });
};

var productos = [
  {
    nombre: 'pijama',
    tipo: 'ropa'
  },
  {
    nombre: 'nevera',
    tipo: 'electrodoméstico'
  },
  {
    nombre: 'asus',
    tipo: 'computador'
  },
  {
    nombre: 'macbook',
    tipo: 'computador'
  },
  {
    nombre: 'pijama',
    tipo: 'ropa'
  },
  {
    nombre: 'tochiba',
    tipo: 'computador'
  },
];

var computadores = [];
for(var f = 0; f < productos.length; f++){
  if(productos[f].tipo == 'computador'){
      computadores.push(productos[f]);
  }
}

var computadores2 = productos.filter(function(producto){
  return producto.tipo === 'computador';
});
