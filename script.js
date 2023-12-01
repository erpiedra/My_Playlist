const input = document.querySelector('input');

function agregar(){
    const li = document.createElement('li');
    const artista = document.createElement('p');
    const titulo = document.createElement('p');

    //Primero vamos a separar el artista del titulo
    //Para eso usamos el split pero debemos reconocer el separador
    var resultado = separarArtistaYTitulo(input.value);

    if(resultado.artista !== '' && resultado.titulo !== ''){
        artista.innerHTML = eliminarFeaturing(resultado.artista);
        titulo.innerHTML = eliminarFeaturing(eliminarParentesis(resultado.titulo));


        li.appendChild(artista);
        li.appendChild(titulo);
        document.querySelector('ul').appendChild(li);
        input.value = '';
    }else{
        alert('¿Seguro que eso es una cancion?');
    }
}

function separarArtistaYTitulo(cadena) {
    // Define la expresión regular para encontrar el separador entre artista y título
    const expresionRegular = /[-|;/:]/; 
  
    // Divide la cadena usando la expresión regular
    const resultado = cadena.split(expresionRegular);
  
    // Elimina espacios adicionales alrededor del artista y del título
    const artista = resultado[0].trim();
    const titulo = resultado[1].trim();
  
    // Devuelve un objeto con el artista y el título
    return { artista, titulo };
}

function eliminarFeaturing(cadena) {
    // Define la expresión regular para encontrar el separador entre artista y featuring
    const expresionRegularFeat = /\s+(ft\.|&|\bfeat\b)\s+(.+)/i;
    
    // Elimina el texto después de "feat", "ft.", o "&" si está presente en el artista
    const artistaSinFeat = cadena.replace(expresionRegularFeat, '');
  
    // Devuelve un objeto con el artista sin el featuring
    return artistaSinFeat;
}

function eliminarParentesis(cadena) {
    // Define la expresión regular para buscar detalles entre paréntesis
    const expresionRegularParentesis = /\([^)]*\)/g;

    // Elimina los detalles dentro de paréntesis
    return cadena.replace(expresionRegularParentesis, '');
}