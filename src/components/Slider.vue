<template>
    <div>
        <picture class="block bg-gray-200 rounded-3xl">
            <img :src="imageUrl" :alt="data?.title" class="aspect-video object-contain rounded-3xl w-full" />
        </picture>

        <div class="grid grid-cols-6 md:grid-cols-12 gap-2 mt-2">
            <div v-for="(item, index) in data?.medias" :key="item.url" @click="() => this.currentImage = index"
                class="rounded-lg" :class="index === this.currentImage ? 'ring-teal-600 ring-2' : ''">
                <img :src="item.thumbUrl" class="aspect-square rounded-lg object-cover cursor-pointer w-full" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponentSlider',
    data() {
        return {
            currentImage: 0,
        }
    },
    props: {
        data: {}
    },
    computed: {
        imageUrl() {
            return this.data?.medias[this.currentImage]?.url
        },
    }
}
</script>

<style>

</style>