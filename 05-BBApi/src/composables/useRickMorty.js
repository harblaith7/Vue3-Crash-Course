import {onBeforeMount, ref, watch} from "vue"
import axios from "axios"

export function useRickMorty() {
    const characters = ref(null)
    const page = ref(1)
    onBeforeMount(async () => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=1`);
        characters.value = res.data.results;
    })
    
    watch(page, async () => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page.value}`);
        characters.value = res.data.results
    })

    return {characters, page}
}

