<template>
    <span
        class="font-normal mb-1 text-teal-600 bg-teal-50 border border-teal-400 inline-block rounded-full px-2 text-xs py-1 max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
        {{ text }}</span>
</template>

<script>
export default {
    name: 'ComponentTips',
    props: {
        text: String
    }
}
</script>