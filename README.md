# Proyecto Data Lovers POKÉMON GO

## Índice 

* [1. Definición del producto](#1-definicion-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Proceso de diseño](#3-proceso-de-diseño)
* [4. Decisiones de diseño](#4-decisiones-de-diseño)
* [5. Testeos de usabilidad](#5-testeos-de-usabilidad)
* [6. Proyecto finalizado](#6-proyecto-finalizado) 
* [7. Checklist](#7-checklist)

***

## 1. Definición del producto

Pokémon GO es un sitio web inspirado en el juego del mismo nombre, el cual ayudará a los jugadores a encontrar información relevante sobre los Pokémon y así poder progresar en su juego. 
El sitio web esta enfocado principalmente a personas que tengan un conocimiento previo de la aplicación y los términos de esta.
Tras la realización de entrevistas a usuarios recurrentes de Pokémon GO, se determinó que el principal problema de los jugadores era la falta de información específica de los Pokémon en general y no solo de los que se encuentran en su Pokédex, por esto se llegó a la conclusión que la manera más sencilla de conocer las características de los Pokémon era mediante filtros, por lo que se decidió incorporar los siguientes; tipos, huevos, caramelos y altura.   

## 2. Historias de usuario

Se realizaron entrevistas a diferentes jugadores, y surgieron las siguientes Historias de Usuario.

1.  Yo, Paula, jugadora de Pokémon Go, quiero ver la imagen de cada Pokémon, para conocer su aspecto.
2.  Yo, Vanessa, jugadora de Pokémon Go, quiero ver los tipos de Pokémones de la región de Kanto, para conocer sus nombres.
3.  Yo, Alan, jugador de Pokémon Go, quiero ver información detallada de los Pokémones de la región de Kanto, para conocer sus características.
4.  Yo, Paulo, jugador de Pokémon Go, quiero poder filtrar los huevos Pokémon por distancia, (2km, 5km y 10km), para saber cuál podría estar incubando.
5.  Yo, Vicente, jugador de Pokémon Go, quiero buscar mi Pokémon por nombre, para conocer más sobre el.
6.  Yo, Angelo, jugador de Pokémon Go, quiero ver la cantidad de caramelos que necesita mi Pokémon para saber con cuantos va a evolucionar. 

## 3. Proceso de diseño

#### Prototipo de baja fidelidad

Se realizaron bocetos en papel, para luego testearlo con usuarios.

![Prototipo](http://imgfz.com/i/fns6CZM.jpeg)

[Interacción en InVision](https://pamela319941.invisionapp.com/console/Data-Lovers-ck9akixf80mx1019mvda5v65j/ck9akjd602khx01b9dpxiu5q1/play)

#### Prototipo de alta fidelidad

Tras haber testeado con usuarios, estos sugirieron algunas modificaciones las cuales fueron incorporadas en un nuevo prototipo de alta fidelidad.

![Prototipo1](http://imgfz.com/i/IWSkA6G.jpeg)
![Prototipo2](http://imgfz.com/i/3cXAGLw.jpeg)
![Prototipo3](http://imgfz.com/i/E60nRYq.jpeg)
![Prototipo4](http://imgfz.com/i/SItpsXg.jpeg)

[Visita nuestro proyecto en Zeplin](https://scene.zeplin.io/project/5ebb073d13fe1e7925aa5a41)

## 4. Decisiones de diseño

Con respecto a las decisiones de diseño, se optó por seguir la línea gráfica del juego original de Pokémon GO. En relación a la paleta de colores se decidió incorporar blanco y azul marino, para generar contraste, y para la tipografía, se utilizó "Quicksand" medium, por su legibilidad y por ser amigable a la vista.

## 5. Testeos de usabilidad

Se entrevistó a 5 jugadores de Pokémon GO para testear el boceto de alta fidelidad y estos fueron los resultados.

1.  Angelo Castellani, 35 años, tras realizar el testeo, Angelo nos indicó que el sitio web le pareció intuitivo, entendió los filtros y consideró que el color de fondo del header era muy oscuro.

2.  Paulo Dávalos, 32 años, tras realizar el testeo, Paulo nos indicó que era un sitio intuitivo, fácil de usar y coherente con la línea gráfica del juego, señaló que las características de los Pokémon estaban bien, pero los subtítulos le parecieron poco claros y sugirió el siguiente para el ítem de “caramelos” : “Cantidad de caramelos para evolucionar”.

3.  Paula Flores, 26 años, tras realizar el testeo, Paula nos indicó que el sitio web le pareció fácil de utilizar, limpio y se le hacía sencillo encontrar la información que necesitaba; pudo realizar las tareas indicadas, y nos otorgó el siguiente feedback, nos sugirió incorporar un nuevo filtro para ordenar los Pokémones de acuerdo a su altura, también nos indico que en las fichas, el items “huevos”, podía ir separado de debilidades y resistencias.

4.  Daniel Flores, 29 años, tras realizar el testeo, Daniel nos indicó que el sitio web le pareció atractivo, limpio e intuitivo y consideró que un filtro que ordenara los Pokémon según altura le parecería bien.  

5.  Alan Schaeffer, 18 años, tras realizar el testeo, Alan nos indicó que el sitio web estaba ordenado y fácil de entender, pudo realizar las tareas indicadas, pero le pareció un poco confuso el título de “caramelos” y nos sugirió mayor claridad en esa información.

Tras la realización de estos test se realizó la siguiente lista de problemas por resolver, los cuales se verán solucionados en el sitio final.

* El color del header es poco dinámico.
* Los subtítulos deben reforzar el nombre de los filtros, por ejemplo en “caramelos” utilizar el subtitulo de “Cantidad de caramelos para evolucionar”. 
* Falta un filtro que ayude a ordenar los Pokémones de acuerdo a su altura.
* En las fichas de cada Pokémon el ítem "huevo" debe ir separado de debilidades y resistencia. 

## 6. Proyecto finalizado

Se implementaron las 6 Historias de usuario al sitio web y además añadimos algunas sugerencias que recibimos durante el proceso, en las siguientes imágenes se muestra el resultado.

![Final1](http://imgfz.com/i/oGKjJhu.jpeg)
![Final2](http://imgfz.com/i/Sm27eIJ.jpeg)
![Final3](http://imgfz.com/i/SLdkMwy.jpeg)
![Responsive1](http://imgfz.com/i/khfFrpd.jpeg)
![Responsive2](http://imgfz.com/i/WFtP5zq.jpeg)
![Responsive2](http://imgfz.com/i/d8uBQHW.jpeg)

## 7. Checklist

* [X] Usa VanillaJS.
* [X] No hace uso de `this`.
* [X] Pasa linter (`npm run pretest`)
* [X] Pasa tests (`npm test`)
* [X] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [X] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [X] Incluye historias de usuario en `README.md`.
* [X] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [X] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [X] Incluye link a Zeplin en `README.md`.
* [X] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [X] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [X] UI: Permite ordenar data por uno o más campos (asc y desc).
* [X] UI: Permite filtrar data en base a una condición.
* [X] UI: Es _responsive_.