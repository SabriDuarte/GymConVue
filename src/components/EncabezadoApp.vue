<template>
    <header>
        <h1>
            <slot></slot>
        </h1>
    </header>
</template>

<script>
export default {
    name:'EncabezadoApp'
}
</script>

<style scoped>
    header{
        background-color: rgb(26, 141, 26);
        padding:20px 0 ;
    }
    h1{
        text-align: center;
        color: rgb(34, 31, 31);
        text-shadow: 1px 1px 5px white;
    }
</style>