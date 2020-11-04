<template>
    <div>
        <form @submit.prevent='login'>
            <input type="text" v-model="nombre" placeholder="Nombre">
            <input type="number" v-model="dni" placeholder="Dni">
            <input type="submit" value="Iniciar Sesión">
        </form>

    </div>
</template>

<script>


export default {
    name:'Login',
    data(){
        return{
            nombre:'',
            dni:'',
        }
    },
    methods: {
        login(){
            this.$emit('iniciar-sesion', {'nombre':this.nombre,'dni':this.dni})
            this.nombre='';
            this.dni=''
        }
    },

}


</script>