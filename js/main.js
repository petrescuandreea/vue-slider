/*

1. istanzio VUE JS
    1.1 avvio vue 
    1.2 aggancio l'elemento dove VUE sarà utilizzato
2. creo una proprietà in data e inserisco l'array
3. stampo in pagina le 5 immagini => v-for
4. gestisco la classe active => ?
5. stampo la singola immagine
6. faccio funzionare i due pulsanti

*/


// ISTANZIO VUE JS 

var carousel = new Vue({

    el: '#app',

    data: {
        // PROPRIETA' CHE CONTIENE L'ARRAY DI OGGETTI 
        photos: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
        ],
        // RIFERIMENTO ALLA POSIZIONE DELL'OGGETTO NELL'ARRAY
        activePhoto: 0,
    },
    methods: {
        prevPhoto: function(){
            if(this.activePhoto === 0){
                this.activePhoto = this.photos.length - 1;
            } else {
                this.activePhoto--;
            }
        },
        nextPhoto: function(){
            if(this.activePhoto === this.photos.length - 1){
                this.activePhoto = 0;
            } else {
                this.activePhoto ++;
            }
        }
    }

});

