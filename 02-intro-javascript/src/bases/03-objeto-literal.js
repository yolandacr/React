const persona = {
    nombre: 'Yolanda',
    apellido: 'Cordero',
    edad: 37,
    direccion:{
        ciudad: 'Málaga',
        cp:29001,
        latitud: 14.3245,
        lng: 34.9233
    }
};


const persona2 = {...persona};
persona2.nombre = 'Peter';
// console.table( persona );
console.log( persona );
console.log(persona2);