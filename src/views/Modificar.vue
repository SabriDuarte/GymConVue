<template>
    <div>
        <form-modificar @modificar-usuario='actualizar' :miembros='miembros' @eliminar-miembro='eliminar'></form-modificar>
    </div>
</template>


<script>
import FormModificar from '@/components/FormModificar';


export default {
    name:'Modificar',
    components: {
        FormModificar
    },
    props:{
        miembros: Array

    },
    methods: {
        actualizar(datosNuevos){
            this.$emit('actualizar-miembro',datosNuevos)
        },


    },

}
</script>