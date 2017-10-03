<template>
    <section>
        <div v-for="shit in shits">
            {{ shit }}
        </div>
        <button @click="more">more</button>
    </section>
</template>

<script>
    export default {
        name: "Shit",
        data() {
            return {
                shits: [1]
            }
        },
        methods: {
            more() {
                this.shits = new Array(parseInt(Math.random() * 10)).fill(1);
            }
        }
    }
</script>