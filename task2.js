function jumpingJimmy(tower, jumpHeight) {
   return  tower.reduce(([acc,en], el) => (en = en && (jumpHeight >= el))? [(acc+ el),en] : [acc,en],
    [0,true])[0];
}

console.log(jumpingJimmy([1,2,5],5));

class Engine {
    start() {
        console.log('shit');
    }
}

class Kola {}
function classMixin(cls, ...src) {
    for (let _cl of src) {
        for (var key of Object.getOwnPropertyNames(_cl.prototype)) {
            cls.prototype[key] = _cl.prototype[key]
        }
    }
}
classMixin(Kola, Engine);

let  shit = new Kola();

shit.start();