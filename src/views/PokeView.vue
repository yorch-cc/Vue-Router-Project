<script setup>
import {useRoute, useRouter} from 'vue-router';
import{useGetData} from '@/composables/getData';
import{useFavoritosStore} from '@/store/favoritos'

const route = useRoute()
const router = useRouter()

const useFavoritos = useFavoritosStore()

const{addFav} = useFavoritos

const {getData, data, loading, errorData} = useGetData()




const back = () => {
    router.push('/pokemons')
}



getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`) 

</script>

<template>
     <p v-if="loading">Cargando informacion</p>
     <div class="alert alert-danger mt-2" v-if="errorData">No existe el pokemon</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default"/>
        <h1>Poke name: {{ $route.params.name }}</h1>
        <button class="btn btn-primary mb-2" @click="addFav(data)">Agregar a Favoritos</button>
    </div>  
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>