import "../css/style.scss";

function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype.addVertex = function(v){
    this.vertexes.push(v);
};

var g = new Graph();

console.dir(g);