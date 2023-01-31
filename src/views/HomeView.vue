<template>
  <default-layout :isPageLoading="isPageLoading">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in currentData" :key="item.id">
        <Card :item="item" />
      </div>
    </div>

    <div class="mt-12 text-center" v-if="data.length > 0 && this.loadAmount < data.length">
      <Button text="Load more" :onClickHandler="handleLoadMore" />
    </div>
  </default-layout>
</template>

<script>

import api from '@/graphql/index';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      data: [],
      isPageLoading: true,
      loadAmount: 10,
    }
  },
  components: { Card, Button, DefaultLayout },
  computed: {
    currentData() {
      return this.data.slice(0, this.loadAmount)
    }
  },
  methods: {
    async fetchData() {
      const query = `
      query ticketsByStatus($status: StatusEnum!, $sortDirection: ModelSortDirection, $nextToken: String) {
        ticketByStatus(
          status: $status
          sortDirection: $sortDirection
          nextToken: $nextToken
        ) {
          items {
            info
            id
            address
            category
            content
            createdAt
            leaderID
            status
            title
            type
            isAnon
            updatedAt
            username
            userID
            projectID
            replyID
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
            subCategory
            owner
            location {
              lat
              lon
            }
            path
            _lastChangedAt
            _version
          }
          nextToken
          startedAt
        }
      }`;

      const variables = {
        filter: {},
        sort: {},
        limit: 10,
        status: "FINISHED",
        sortDirection: "DESC"
      };

      const result = await api.post('/graphql', { query, variables });

      this.data = result.data.data.ticketByStatus.items;
      this.isPageLoading = false;
    },
    handleLoadMore() {
      this.loadAmount = parseInt(this.loadAmount) + 10;
      this.$router.push({
        query: {
          limit: this.loadAmount
        }
      })
    }
  },
  mounted() {
    this.fetchData();
    this.loadAmount = this.$route.query.limit || 10;
  }
}
</script>
