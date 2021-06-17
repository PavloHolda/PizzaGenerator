import cola from '../img/drinks/cola.png';
import colaZero from '../img/drinks/cola_zero.png';
import sprite from '../img/drinks/sprite.png';
import fanta from '../img/drinks/fanta.png';
import fuzeteaGreen from '../img/drinks/fuzetea_green.png';
import fuzeteaBlack from '../img/drinks/fuzetea_black.png';
import fuzeteaOrange from '../img/drinks/fuzetea_orange.png';
import pulpy from '../img/drinks/pulpy.png';
import water from '../img/drinks/water.png';

const toppings = [
    {
        id: 1,
        name: 'testo',
        price: 150,
        status: true,
        title: 'Тесто'
    },
    {
        id: 2,
        name: 'osnova',
        price: 150,
        status: true,
        title: 'Основа'
    },
    {
        id: 3,
        price: 25,
        title: 'Ветчина',
        name: 'vetchina',
        status: false
    },
    {
        id: 4,
        price: 25,
        title: 'Салями',
        name: 'kolbasa',
        status: false
    },
    {
        id: 5,
        price: 25,
        title: 'Бекон',
        name: 'bekon',
        status: false
    },
    {
        id: 6,
        price: 25,
        title: 'Шампиньоны',
        name: 'shampinion',
        status: false
    },
    {
        id: 7,
        price: 25,
        title: 'Курица',
        name: 'chiken',
        status: false
    },
    {
        id: 8,
        price: 25,
        title: 'Моцарелла',
        name: 'mozzarella',
        status: false
    },
    {
        id: 9,
        price: 25,
        title: 'Ананасы',
        name: 'ananas',
        status: false
    },
    {
        id: 10,
        price: 25,
        title: 'Болгарский перец',
        name: 'perec',
        status: false
    },
    {
        id: 11,
        price: 25,
        title: 'Томаты',
        name: 'tomat',
        status: false
    },
    {
        id: 12,
        price: 25,
        title: 'Оливки',
        name: 'olives',
        status: false
    }
];

const drinks = [
    {
        id: 1,
        price: 95,
        volume: 0.5,
        img: cola,
        status: false,
        title: 'Cola'
    },
    {
        id: 2,
        price: 95,
        volume: 0.5,
        img: colaZero,
        status: true,
        title: 'Cola Zero'
    },
    {
        id: 3,
        price: 95,
        volume: 0.5,
        img: sprite,
        status: false,
        title: 'Sprite'
    },
    {
        id: 4,
        price: 95,
        volume: 0.5,
        img: fanta,
        status: false,
        title: 'Fanta'
    },
    {
        id: 5,
        price: 95,
        volume: 0.5,
        img: fuzeteaGreen,
        status: false,
        title: 'Fuzetea Green'
    },
    {
        id: 6,
        price: 95,
        volume: 0.5,
        img: fuzeteaBlack,
        status: false,
        title: 'Fuzetea Black'
    },
    {
        id: 7,
        price: 95,
        volume: 0.5,
        img: fuzeteaOrange,
        status: false,
        title: 'Fuzetea Orange'
    },
    {
        id: 8,
        price: 95,
        volume: 0.5,
        img: pulpy,
        status: false,
        title: 'Pulpy'
    },
    {
        id: 9,
        price: 95,
        volume: 0.5,
        img: water,
        status: false,
        title: 'Water'
    }
];

export {
    toppings,
    drinks
}
