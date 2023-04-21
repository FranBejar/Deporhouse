# Deporhouse

Deporhouse es un eCommerce dedicado a la venta de articulos deportivos de diferentes disciplinas

Este eComemerce fue desarrollado utilizando la libreria React JS

A su vez, para el mismo se utilizo la libreria sweetalert2 para generar alertas con mejor estilo visual que las alertas regulares

A su vez, utiliza para el logo la libreria Tourney cursive de Google Fonts

## Instalacion

Para clonar el proyecto debe ejecutar el siguiente comando

```bash
git clone https://github.com/FranBejar/Deporhouse
```
A su vez debe tener npm descargado e instalado

Para utilizar la biblioteca sweetalert2 debe ejecutar el siguiente comando

```bash
$ npm install sweetalert2
```

Para dar inicio al proyecto ejecute el siguiente comando

```bash
npm start
```

## Como Funciona

El eCommerce se recorre a traves de rutas, las cuales se encuentran en App.js

El proyecto se ejecuta en su localhost:3000, al usar npm start los redirige automaticamente a esa pagina en su navegador

Todos los componentes se encuentran en la carpeta components/

Los componentes principales son los siguientes:

>Item -> Logica de productos

>Item Detail -> Detalle de productos

>Item List -> Listado de productos

>Item Count -> Contador para agregar o quitar cantidad de productos a comprar

>NavBar -> Barra de navegación entre las diferentes categorias

>Cart -> Listado de productos a comprar

>Checkout -> Este se ocupa de enviar los datos del formulario a la base de datos

## FireBase

El eCommerce utiliza Cloud Firestore como base de datos

Todo lo relacionado a Firebase se encuentra en la carpeta service\firebase

>firebaseConfig.js -> Esta inicializa la app y hace referencia a la base de datos

>orders.js -> Este proporciona el formulario de checkout y genera las ordenes que se van a enviar en Checkout.js

>products.js -> Proporciona el filtrado de productos por categoria o id de item a ItemListContainer e ItemDetailContainer respectivamente

## CoderHouse

Este proyecto fue creado durante el desarrollo de la comision 51550 del curso de React JS