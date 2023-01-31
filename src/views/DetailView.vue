<template>
    <default-layout :isPageLoading="isPageLoading">
        <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-2 mb-8">
                <button @click="$router.go(-1)" class="inline-block text-gray-600 rounded-full cursor-pointer">
                    &LongLeftArrow;
                    Back
                </button>
            </div>
            <div class="col-span-12 md:col-span-8">
                <article>
                    <Tips :text="data?.category" />

                    <h1 class="text-2xl font-bold leading-normal">{{ data?.title }}</h1>


                    <div
                        class="flex justify-between items-end flex-col gap-y-4 gap-x-2 sm:items-end sm:flex-col md:items-center md:flex-row mt-3">
                        <div class="w-full">
                            <p class="font-medium text-teal-600">{{ data?.username }}</p>

                            <div class="text-gray-400 text-sm mt-1 break-after-all">
                                <address class="not-italic inline">{{ data?.address.trim() }}</address>
                                <span class="mx-1">&bullet;</span>
                                <time>{{ formatedDate.trim() }}</time>
                            </div>
                        </div>

                        <div>
                            <Button text="Upvote" />
                        </div>
                    </div>

                    <div class="mt-8" v-if="data.medias.length > 0">
                        <Slider :data="data" />
                    </div>


                    <div class="mt-8 leading-7">
                        <p>{{ data?.content }}</p>
                    </div>
                </article>
            </div>
        </div>
    </default-layout>
</template>

<script>

import api from '@/graphql';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Slider from '@/components/Slider.vue';
import Tips from '@/components/Tips.vue';
import Button from '@/components/Button.vue';

export default {
    name: 'DetailView',
    data() {
        return {
            data: {},
            isPageLoading: true,
        }
    },
    computed: {
        formatedDate() {
            let options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };

            return new Date(this.data?.createdAt).toLocaleDateString('en-US', options);
        }
    },
    components: { Slider, Tips, Button, DefaultLayout },
    methods: {
        async fetchByPath() {
            const query = `
                query ticketByPath($path: String!) {
                    ticketByPath(path: $path) {
                        items {
                        path
                        address
                        isAnon
                        id
                        createdAt
                        content
                        category
                        projectID
                        replyID
                        status
                        title
                        updatedAt
                        username
                        userID
                        medias {
                            thumbUrl
                            type
                            url
                        }
                        leader {
                            id
                            name
                            title
                            path
                        }
                        info
                        leaderID
                        subCategory
                        owner
                        location {
                            lat
                            lon
                        }
                        _version
                        info
                    }
                }
            }`;

            const variables = {
                "filter": {},
                "sort": {},
                "limit": 100,
                "path": this.$route.params.id
            };

            const response = await api.post('/graphql', { query, variables });

            this.data = response.data.data.ticketByPath.items[0];
            this.isPageLoading = false;
        }
    },
    mounted() {
        this.fetchByPath();
    }
}
</script>
