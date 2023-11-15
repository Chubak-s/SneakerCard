const App={
    data(){
        return{
            cart: 0,
            photoSrc: 'img/black.webp',
            headerBackground: 'linear-gradient(to right, #000, #A9A9A9)',
            modelImg: ['img/black.webp','img/blue.webp','img/green.webp','img/lightblue.webp', 'img/white.webp'],
        }
    },
    methods: {
        AddToCart(){
            this.cart++;
        },
        chooseColor(color){
            switch(color){
                case 'black':
                    this.photoSrc = this.modelImg[0];
                    this.headerBackground = 'linear-gradient(to right, #000, #A9A9A9)';
                    break;
                case 'blue':
                    this.photoSrc = this.modelImg[1];
                    this.headerBackground = 'linear-gradient(to right, #4B0082, #87CEEB)';
                    break;
                case 'green':
                    this.photoSrc = this.modelImg[2];
                    this.headerBackground = 'linear-gradient(to right, #3CB371, #FFFF00)';
                    break;
                case 'lightblue':
                    this.photoSrc = this.modelImg[3];
                    this.headerBackground = 'linear-gradient(to right, #191970, #007de8)';
                    break;
                case 'white':
                    this.photoSrc = this.modelImg[4];
                    this.headerBackground = 'linear-gradient(to right, #FFE4E1, #F5FFFA)';
                    break;
                default:
                    console.log("error with color")
                    break;
            }
        },
    }
}
Vue.createApp(App).mount('#app')