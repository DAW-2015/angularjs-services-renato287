var app = angular.module('myApp', []);

app.factory('CarrinhoService', function() {
  var carrinhoService = {};
  carrinhoService.itens = [];

  carrinhoService.addItem = function(descricao, preco, qtd){
    this.itens.push({descricao: descricao, preco: preco, quantidade: qtd});
    console.log("teste");
  }

  carrinhoService.getLista = function(){
    return this.itens;
  }

  return carrinhoService;
  
});


app.controller('ComprasController', ['CarrinhoService', function(carrinhoService) {

  var descricao = "";
  var preco = 0;
  var quantidade = 0;

  this.adiciona = function() {
    carrinhoService.addItem(this.descricao,this.preco,this.quantidade);
  };

}]);

app.controller('CheckoutController', ['CarrinhoService', function(carrinhoService) {

  var itens = [];

  this.pegaLista = function() {
    this.itens = carrinhoService.getLista();
    return carrinhoService.getLista();
  };

  this.calculaValorTotal = function(){
    var valor = 0;
    for(var i = 0; i<this.itens.length; i++){
      valor = valor + (this.itens[i].preco * this.itens[i].quantidade);
    }
    return valor;
  }

}]);
