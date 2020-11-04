<template>
    <div>
        <select @change="selectMiembro" v-model="selectedMiembro">
            <option value="">Elige un miembro</option>
            <option :value="pos" v-for="(miembro,pos) in miembros" :key="miembro.nombre">{{miembro.nombre}}</option>
        </select>
        <form @submit.prevent="deleteMiembro" @click="eliminar (key)">
            <input type="text" v-model="nombre" placeholder="Nombre">
            <input type="number" v-model="dni" placeholder="Dni">
            <input type="email" v-model="email" placeholder="Email">
            <input type="date" v-model="vencimiento">
            <input type="submit" value="Eliminar">
        </form>
    </div>
</template>

<script>
export default {
    name:'Eliminar',
    props:{
        miembros:Array
    },
    data(){
        return{
            nombre:'',
            dni:'',
            email:'',
            vencimiento:'',
            selectedMiembro:''
        }
    },
    methods: {
        selectMiembro(){
            this.nombre = this.miembros[this.selectedMiembro].nombre;
            this.dni= this.miembros[this.selectedMiembro].dni;
            this.email= this.miembros[this.selectedMiembro].email;
            this.vencimiento= this.miembros[this.selectedMiembro].vencimiento;
        },
        eliminar(key){
            this.$emit('eliminar-miembro',key);
            this.nombre ='',
            this.dni='',
            this.email='',
            this.vencimiento=''
        }

    },
}
</script>

<style scoped>
select{
    margin-top: 10px;
    margin-left: 10px;

}

</style>