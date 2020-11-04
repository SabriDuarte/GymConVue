<template>
    <div>
        <select @change="selectMember" v-model="selectedMember">
            <option value="">Elige un miembro</option>
            <option :value="pos" v-for="(miembro,pos) in miembros" :key="miembro.dni">
                {{miembro.nombre}}
            </option>
        </select>
        <form @submit.prevent='editarMiembro'>
            <input type="text" v-model='nombre' placeholder="Nombre">
            <input type="number" v-model="dni" placeholder="Dni">
            <input type="email" v-model="email" placeholder="Email">
            <input type="date" v-model='vencimiento' placeholder="Vencimiento">
            <input type="submit" value="Modificar">
        </form>
    </div>
</template>

<script>
export default {
    name:'FormModificar',
    props:{
        miembros: Array
    },
    data() {
        return {
            nombre:'',
            dni:'',
            email:'',
            vencimiento:'',
            selectedMember:'',
        }
    },
    methods: {
        selectMember(){
            this.nombre = this.miembros[this.selectedMember].nombre;
            this.dni= this.miembros[this.selectedMember].dni;
            this.email= this.miembros[this.selectedMember].email;
            this.vencimiento= this.miembros[this.selectedMember].vencimiento;
        },
        editarMiembro(){
            let miembroModificado = {
                nombre:this.nombre,
                dni:this.dni,
                email:this.email,
                vencimiento:this.vencimiento
            }
            let datosNuevos ={
                posicion:this.selectedMember,
                miembro:miembroModificado
            }
            this.$emit('modificar-usuario',datosNuevos);
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