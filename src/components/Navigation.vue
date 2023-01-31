<template>
    <nav class="py-3 md:py-4 bg-white border-b sticky top-0">
        <div class="container flex items-center justify-between">
            <router-link to="/">
                <img width="120" src="https://i.ibb.co/7y0P5Pc/download.png" />
            </router-link>

            <div>
                <a :href="githubLink" target="_blank`">
                    <Button size="sm" text="Source code" :animate="false" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'ComponentNavigation',
    components: { Button },
    computed: {
        githubLink() {
            return process.env.VUE_APP_SOURCE_CODE
        }
    }
}
</script>

<style>

</style>