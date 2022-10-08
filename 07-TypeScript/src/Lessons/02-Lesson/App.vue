<script setup lang="ts">
    let name: string = "Laith";
    let age: number = 27;
    let sex: boolean = false;
    // let occupation: undefined | string = undefined
    let occupation: string | undefined = "3"

    occupation = undefined;

    // Type Inference
    // 1) Declaring and assigning a variable
    // 2) It is only type


    const arrayOfNumbers: number[] = []

    arrayOfNumbers.push(23)
    arrayOfNumbers.push(true)
    arrayOfNumbers.push("Laith")

    const employee = {
        name: "Laith",
        age: 25,
        sex: false,
    }

    employee.age = 26;
    employee.sex = "male"
    employee.occupation = "software engineer"

    const employee2: {
        name: string;
        age: number;
        sex: boolean;
        occupation?: string
    } = {
        name: "Laith",
        age: 25,
        sex: false
    }

    employee2.occupation = "Worker"

    enum GENDER {
        FEMALE,
        MALE,
        NONBINARY
    }

    interface Employee {
        name: string;
        age: number;
        sex: GENDER;
        occupation?: string
    }

    const employee3: Employee = {
        name: "Laith",
        age: 25,
        sex: GENDER.MALE       
    }

</script>

<template>
    <div>

    </div>
</template>