<template>
    <div>
        <form @submit.prevent='agregarMiembro'>
            <input type="text" v-model='nombre' placeholder="Nombre">
            <input type="number" v-model="dni" placeholder="Dni">
            <input type="email" v-model="email" placeholder="Email">
            <input type="date" v-model='vencimiento' placeholder="Vencimiento">
            <input type="submit" value="Agregar">
        </form>
    </div>


</template>

<script>
export default {
    name: 'NewMiembro',
    data() {
        return {
            nombre:'',
            dni:'',
            email:'',
            vencimiento:'',

        }
    },
    methods: {
        agregarMiembro(){
            let nuevoMiembro = {
                nombre:this.nombre,
                dni:this.dni,
                email:this.email,
                vencimiento:this.vencimiento
            }
            this.$emit('agregar-miembro',nuevoMiembro);

            this.nombre ='',
            this.dni='',
            this.email='',
            this.vencimiento=''
        }
    },
}
</script>

<style>

form {
    display:flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
}

input{
    margin-top: 15px;
    margin-bottom: 0;
}
</style>

