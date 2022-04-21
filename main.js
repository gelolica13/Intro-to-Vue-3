const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'NIKE',
            brand: 'world brand',
            image: './assets/images/socks_green.jpg',
            imglink: 'https://www.pexels.com/photo/red-dahlia-flower-60597/',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color:'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            size: ['small', 'medium', 'large'],
                
        }
    },

    methods:{
        addToCart(){
            this.cart +=1
        },
        lessToCart(){
            this.cart -=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },

    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
})