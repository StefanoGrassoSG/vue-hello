
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            say: 'Hello Vue!',
            marvel: 'img/marvel.jpg'
        }
    }
})


app.mount('#container')