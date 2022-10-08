<script setup lang="ts">
import { def } from "@vue/shared";
import {defineProps} from "vue"
import { type Invities, GENDER} from "../types";

defineProps<{
    invitee: Invities
}>()
</script>

<template>
    <div :style="{backgroundColor: invitee.gender === GENDER.MALE ? 'rgb(8, 111, 111)' : 'rgb(111, 18, 8)'}">
        {{ invitee.name }}
    </div>
</template>

<style scoped>
div {
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 3px;
    color: white
}
</style>