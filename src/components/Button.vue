<template>
    <button @click="onClickHandler" class="border font-medium bg-white hover:text-teal-600 rounded-full" :class="`${getSize} ${isAnimate}`">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'ComponentButton',
    props: {
        text: String,
        onClickHandler: Function,
        size: {
            validator(value) {
                return ['sm', 'lg', ''].includes(value)
            }
        },
        animate: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        getSize() {
            return this.size === 'sm' ? 'px-4 py-2 text-sm' : this.size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'
        },
        isAnimate() {
            return this.animate ? 'hover:-translate-y-1  duration-150 hover:shadow-sm' : ''
        }
    }
}
</script>

<style>

</style>