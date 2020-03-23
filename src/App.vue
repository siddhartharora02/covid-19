<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
export default {
  created () {
    this.fetchLatest()
    this.fetchDaily()
  },
  methods: {
    fetchLatest () {
      this.axios.get('https://api.rootnet.in/covid19-in/stats/latest').then((res) => {
          this.$store.dispatch('setLatest', res.data)
      })
    },
    fetchDaily () {
      this.axios.get('https://api.rootnet.in/covid19-in/stats/daily').then((res) => {
          this.$store.dispatch('setDaily', res.data)
      })
    }
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
};
</script>
