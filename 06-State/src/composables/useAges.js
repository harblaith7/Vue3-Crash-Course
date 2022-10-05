import {ref} from "vue"

const useAges = () => {
    const ages = ref([14, 15, 16, 21, 22, 13, 19, 27, 25]);

    const filterAges = (minAge) => {
        return ages.value.filter((age) => age >= minAge)
    }

    const addAge = (age) => {
        ages.value.push(age)
    }

    return {ages, filterAges, addAge}
}

export default useAges