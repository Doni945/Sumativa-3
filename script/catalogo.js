function mostrarCatalogo() {
    const catalogoDiv = document.getElementById('catalogo');
    catalogo.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Disponibilidad: ${producto.disponibilidad}</p>
            <button class="add-to-cart-btn" onclick="agregarAlCarrito('${producto.codigo}')">Agregar al Carrito</button>
        `;
        catalogoDiv.appendChild(productoDiv);
    });
}

document.addEventListener('DOMContentLoaded', mostrarCatalogo);


/*----------------------------CATALOGO-------------------------*/

const catalogo = [
    { 
        codigo: 'P0001', 
        categoria: 'juego de rol',
        nombre: 'Planescape',
        descripcion: 'Juego de rol.',
        imagen: './images/PLANESCAPE.jpg',
        precio: 15000,
        disponibilidad: 32,
        
    },
    { 
        codigo: 'P0002', 
        categoria: 'Juego de rol',
        nombre: 'STEAM STATES',
        descripcion: 'Juego de rol.',
        imagen: './images/STEAM STATES.png',
        precio: 12500,
        disponibilidad: 9,
        
    },
    { 
        codigo: 'P0003', 
        categoria: 'juego de mesa',
        nombre: 'Juego de Ajedrez',
        descripcion: 'juego de mesa.',
        ubicacion: 'Renca',
        imagen: './images/ajedrez.png',
        precio: 2800,
        disponibilidad: 18,
       
    },
    { 
        codigo: 'P0004', 
        categoria: 'Diseño de Jardines',
        nombre: 'Ludo',
        descripcion: 'Juego de mesa.',
        ubicacion: 'Renca',
        imagen: './images/ludo.jpg',
        precio: 6000,
        disponibilidad: 13,
        
    },
    { 
        codigo: 'P0005', 
        categoria: 'juego de mesa',
        nombre: 'Dominos',
        descripcion: 'Juego de mesa.',
        ubicacion: 'Renca',
        imagen: './images/dominoes.jpg',
        precio: 7000,
        disponibilidad: 22,
       
    },
    { 
        codigo: 'P0006', 
        categoria: 'juego de rol',
        nombre: 'LAS TIERRAS MÁS ALLÁ DE BRUJALUZ',
        descripcion: 'Juego de rol.',
        ubicacion: 'santiago Centro',
        imagen: './images/LAS TIERRAS MÁS ALLÁ DE BRUJALUZ.jpg',
        precio: 32700,
        disponibilidad: 14,
      
    },
    { 
        codigo: 'P0007', 
        categoria: 'juego de cartas',
        nombre: 'Doblar',
        descripcion: 'dobble un juego con mas de 50 simbolos, 55 cartas, con uno y solamente un simbolo identico entre cada carta.',
        ubicacion: 'Renca',
        imagen: './images/P0007.jpg',
        precio: 8000,
        disponibilidad: 7,
      
    },
    { 
        codigo: 'P0008', 
        categoria: 'juego de Estrategia',
        nombre: 'Catan, El Juego',
        descripcion: 'Catan es un juego de mesa para toda la familiaque se ha convertido en un fenomeno mundial. Desde su aparición en Alemania se han vendido mas que mucho de los juegos mas tradicionales.',
        ubicacion: 'Santiago centro',
        imagen: './images/P0008.jpg',
        precio: 26000,
        disponibilidad: 2,
      
    },
    { 
        codigo: 'P0009', 
        categoria: 'juego Cooperativos',
        nombre: 'Horror de Arkham',
        descripcion: 'Arkham Horror es un juego Cooperativo. todos los jugadores colaboran entre si y ganan o pierden la partida como equipo',
        ubicacion: 'Renca',
        imagen: './images/P0009.jpg',
        precio: 60000,
        disponibilidad: 6,
      
    },
    { 
        codigo: 'P0010', 
        categoria: 'juego de Cartas',
        nombre: 'cronologia - evento',
        descripcion: 'A caso Julio César había sido nombrado dictador cuando ocurrio el gran incendio en Roma? ¿había comenzado ya la construcción de la gran muralla china? ¿La fiebre del oro de California tuvo lugar al mismo tiempo? Para ganar la partida, se el primero en colocar correctamente todas tus cartas.',
        ubicacion: 'Renca',
        imagen: './images/P0010.jpg',
        precio: 12000,
        disponibilidad: 15,
      
    },
];



