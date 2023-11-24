/*Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, 
peso e lunghezza. 
Calcola quanto pesano tutte le zucchine. */


const tipoDiZucchine=[
    {
        'tipo' : 'romanesco',
        'peso' : 4,
        'lunghezza':'20',
    },
    {
        'tipo' : 'tonda',
        'peso' : 6,
        'lunghezza':'22',
    },
    {
        'tipo' : 'fiorentino',
        'peso' : 15,
        'lunghezza':'52',
    },
    {
        'tipo' : 'storta',
        'peso': 8,
        'lunghezza':'37',
    },
    {
        'tipo' : 'trombetta',
        'peso' : 34,
        'lunghezza':'102',
    },
    {
        'tipo': 'napoletana',
        'peso' : 45,
        'lunghezza':'98',
    },
    {
        'tipo' : 'gigante',
        'peso': 56,
        'lunghezza':'32',
    },
    {
        'tipo' : 'rotta',
        'peso' : 24,
        'lunghezza':'65',
    },
    {
        'tipo' : 'piccola',
        'peso': 2,
        'lunghezza':'25',
    },
    {
        'tipo' : 'speciale',
        'peso' : 32,
        'lunghezza':'50',
    },

    
]
let sommaPeso=0;

for(let i=0; i < tipoDiZucchine.length;i++){
    sommaPeso=sommaPeso+tipoDiZucchine[i].peso
}

console.log(sommaPeso)