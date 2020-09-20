### Ejercicio 1.5 - respuestas

1. El clousere se produce cuando se instancian las variables `size8`, `size16` y `size24` incorporando la funcion `cambiarDimensionFuente(size)` que retorna una nueva funcion que utiliza el parametro `size`.

2. Que fuente-8 cambie el tamaño de fuente de pagina se establece en la funcion `setClicks()` en la linea de `document.getElementById('fuente-8').onclick = size8;`.

3. El mensaje de error que lanza es `setClicks is not defined at onload`. Este mansaje aparece porque la función `setClicks()` se llama al cargar la pagina en la etiqueta body con el parametro `onload="setClicks()"` y como la borre no la encuentra al cargar la página.

4. Se escribe `document.getElementById('fuente-8').onclick = size8`. Porque `size8` es un objeto ya instanciado con la funcion `cambiarDimensionFuente(8)` y lo estamos referenciando para llamarlo al momento en que se produzca el evento de hacer click al elemento con id=`fuente-8`.

5. Para que al cargar la pagina tengamos el tamaño de fuente en 8 debemos colocar en la funcion setClicks `size8();`. Porque queremos que la funcion se ejecute al momento en que la funcion `setClicks()` se llame.