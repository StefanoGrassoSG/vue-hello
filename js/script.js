
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            say: 'Hello Vue!',
            marvel: 'img/marvel.jpg',
            width: 'measures',
            img: 'photo'
        }
    }
})


app.mount('#container')