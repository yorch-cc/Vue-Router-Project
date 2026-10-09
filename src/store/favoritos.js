import{defineStore}from 'pinia'
import {ref} from 'vue'

export const useFavoritosStore = defineStore('favoritos', () => {
    const favoritos = ref([])

    const addFav = (poke) => {
        favoritos.value.push(poke)
        }

    return {
        favoritos,
        addFav,
    }
})