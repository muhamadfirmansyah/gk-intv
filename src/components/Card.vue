<template>
    <router-link :to="item.path" class="h-full" :title="item.title">
        <article
            class="rounded-xl bg-white/75 hover:bg-white shadow-sm hover:shadow h-full flex flex-col overflow-hidden">
            <div class=" select-none pointer-events-none aspect-video bg-gray-200 overflow-hidden">
                <picture>
                    <img :src="item.medias[0].url" class="aspect-video w-full object-cover" v-if="item.medias[0]"
                        loading="lazy" />
                </picture>
            </div>
            <div class="mt-4 px-4 pb-4">
                <p
                    class="font-normal mb-1 text-teal-600 bg-teal-50 border border-teal-400 inline-block rounded-full px-2 text-xs py-1 max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
                    {{ item?.category }}</p>
                <h3 class="font-medium text-md">{{ item.title }}</h3>
            </div>
        </article>
    </router-link>
</template>

<script>
export default {
    name: 'ComponentCard',
    props: {
        item: {
            id: String,
            medias: [],
            title: String,
        }
    }
}
</script>

<style>

</style>