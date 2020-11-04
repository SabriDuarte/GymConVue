<template>
  <div id="app">
    <encabezado-app>FULL⚡️MINE</encabezado-app>
    <div id="nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/login'>Login</router-link>
      <router-link to="/modificar">Modificar</router-link>
      <router-link to="/eliminar">Eliminar</router-link>
    </div>
    <router-view :miembros='listaMiembros' @eliminar-miembro='eliminar' @iniciar-sesion='ingresar' @actualizar-miembro='actualizar'  @add-miembro='addMiembro'></router-view>
    <div>
      <p>{{mensajeVerificar}}</p>
    </div>
  </div>
</template>

<script>
import EncabezadoApp from '@/components/EncabezadoApp';


export default {
  name: 'App',
  components: {
    EncabezadoApp,
  },
  methods: {
    addMiembro(nuevoMiembro){
      this.listaMiembros.push(nuevoMiembro);
    },
    actualizar(datosNuevos){
      this.listaMiembros.splice(datosNuevos.posicion,1,datosNuevos.miembro);
    },
    eliminar(pos){
      this.listaMiembros.splice(pos,1)
    },
    ingresar(integrante){
      let login = this.listaMiembros.find(miembro=>{
        return integrante.nombre == miembro.nombre && integrante.dni == miembro.dni;
      })
      if(login){
        let hoy = new Date();
        let fechaVencimiento = new Date(`${login.vencimiento} 00:00`);
        if(hoy <= fechaVencimiento){
          this.logged = true;
          this.mensajeVerificar = "La suscripción está habilitada";
        }else{
          this.mensajeVerificar= "La suscripción está vencida";
        }
      }

    }
  },
  data(){
    return{
      logged:false,
      mensajeVerificar:null,
      listaMiembros:[
        {
          "nombre": "Juan Pérez",
          "dni": 12312312,
          "email": "juanperez@gmail.com",
          "vencimiento": "2020-09-10"
        },
        {
          "nombre": "Manjula Pérez",
          "dni": 36936936,
          "email": "manjulaperez@gmail.com",
          "vencimiento": "2020-09-10"
        },
        {
          "nombre": "Pablo Pérez",
          "dni": 45645645,
          "email": "pabloperez@gmail.com",
          "vencimiento": "2020-09-10"
        },
        {
          "nombre": "Cristina Pérez",
          "dni": 789789789,
          "email": "cristinaperez@gmail.com",
          "vencimiento": "2020-09-10"
        },
        {
          "nombre": "María Pérez",
          "dni": 14714714,
          "email": "mariaperez@gmail.com",
          "vencimiento": "2020-09-10"
        }
      ],
    }
  },
}
</script>

<style>
  body{
    font-family:'verdana' ;

  }
  .router-view{
    margin: 4rem 0;
  }
  a{
    color: rgb(48, 105, 48);
    text-decoration: none;
    padding: 5px 10px;
  }
  #nav{
    margin-top: 10px;
  }
  .router-link-exact-active{
    background-color: rgb(26, 141, 26);
    color: rgb(34, 31, 31);
  }

</style>
