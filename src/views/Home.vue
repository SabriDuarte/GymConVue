<template>
    <div class="home">
        <new-miembro @agregar-miembro='agregarUnMiembro'></new-miembro>
    </div>
</template>

<script>

import NewMiembro from '@/components/NewMiembro';


export default {
    name: 'Home',
    components:{
        NewMiembro
    },
    methods: {
        agregarUnMiembro (nuevoMiembro){
            this.$emit('add-miembro',nuevoMiembro);
        }
    },




}
</script>