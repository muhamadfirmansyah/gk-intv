<template>
    <div class="bg-gray-50 min-h-screen">
        <Navigation />
        <div class="container pt-8 pb-16">
            <div v-if="isPageLoading">
                <p>Please wait ...</p>
            </div>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
    name: 'DefaultLayout',
    props: {
        isPageLoading: Boolean
    },
    components: { Navigation }
}
</script>

<style>

</style>