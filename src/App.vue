<!-- My HTML -->
<template>
    <div class="container">
        <h1 v-once>Mi primera App en {{title}}</h1>
        <p>Hola esta es mi primera app Vue3</p>
        <input v-model="title" type="text">
        <h2>{{title}}</h2>
        <h3 v-if="showTitle">{{title}}</h3>
        <img :src="imgData.img" :alt="imgData.alt" :title="imgData.title">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur quo soluta dolores dignissimos ad, possimus veritatis atque itaque perferendis earum exercitationem optio ab quae! Aut corporis aliquid quo quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos sed, numquam et officia, consequuntur, expedita nulla aspernatur culpa nobis iure magni itaque nihil! Aliquam ipsam fugit odio! Repellendus, expedita.</p>
    </div>
</template>




<script>
    export default {
        name:"App",
        data(){
            return {
                title:"Vue 3.0",
                imgData:{
                    title:"Hola soy la imagen del Github Icon",
                    img: "https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Simbolo.png",
                    alt:"Github"
                },
                showTitle: false,
              
            }
        }

    }
</script>

<!-- My styles -->
<style>
body{
    background-color:rgb(55, 11, 179);
}
.container{
    background-color:#11d31b;
    padding: 20px;
    border-radius: 7px;
}
img{
    width: 40%;
}
h1{
    color:red;
}

</style>