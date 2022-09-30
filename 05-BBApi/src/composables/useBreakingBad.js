import { ref, onBeforeMount, watch } from 'vue'
import axios from "axios"

export function useBreakingBad() {
    const characters = ref(null)
    const page = ref(0);

    onBeforeMount(async () => {
        const res = await axios.get(`https://www.breakingbadapi.com/api/characters?limit=8`);
        characters.value = res.data;
    })

    watch(page, async () => {
        const res = await axios.get(`https://www.breakingbadapi.com/api/characters?limit=8&offset=${8 * page.value}`);
        characters.value = res.data;
    });

    const updatePage = (isIncrement) => {
        if(isIncrement) page.value++;
        else page.value--
    }

    return {characters, page, updatePage}
}