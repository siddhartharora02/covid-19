<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Dashboard</span>
        <h3 class="page-title">COVID - 19 | Statistics</h3>
      </d-col>
    </d-row>

    <!-- Small Stats Blocks -->
    <d-row>
      <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-4" :class="{'d-none d-md-block': !stats.mobile}">
        <small-stats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
      </d-col>
    </d-row>

    <d-row>
      <!-- Users Overview -->
<!--      <d-col lg="8" md="6" sm="12" class="mb-4">-->
<!--        <bo-users-overview />-->
<!--      </d-col>-->

      <!-- Users by Device (lite) -->
<!--      <d-col lg="4" md="6" sm="12" class="mb-4">-->
<!--        <bo-users-by-device />-->
<!--      </d-col>-->
    </d-row>

    <d-row>
      <!-- Top Referrals -->
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <bo-top-referrals />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import SmallStats from '@/components/common/SmallStats.vue';
import TopReferrals from '@/components/common/TopReferrals.vue';
import UsersOverview from '@/components/blog/UsersOverview.vue';
import UsersByDevice from '@/components/blog/UsersByDeviceLite.vue';
import NewDraft from '@/components/blog/NewDraft.vue';
import Discussions from '@/components/blog/Discussions.vue';

export default {
  components: {
    SmallStats,
    boUsersOverview: UsersOverview,
    boUsersByDevice: UsersByDevice,
    boNewDraft: NewDraft,
    boDiscussions: Discussions,
    boTopReferrals: TopReferrals,
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
    };
  },
  computed: {
    smallStats() {
      const summary = this.$store.state.latest ? this.$store.state.latest.data.summary : null
      return [{
        label: 'Total Cases',
        value: summary ? summary.total : '...',
        percentage: '4.7%',
        increase: true,
        mobile: true,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 2,
          backgroundColor: 'rgba(255,180,0,0.1)',
          borderColor: 'rgb(255,180,0)',
          data: [1, 2, 1, 3, 5, 4, 7],
        }],
      }, {
        label: 'Indian Cases (Confirmed)',
        value: summary ? summary.confirmedCasesIndian : '...',
        percentage: '12.4',
        increase: true,
        mobile: false,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 2,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 2, 3, 3, 3, 4, 4],
        }],
      }, {
        label: 'Foreign Cases (Confirmed)',
        value: summary ? summary.confirmedCasesForeign : '...',
        percentage: '3.8%',
        increase: false,
        decrease: true,
        mobile: false,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 2,
          backgroundColor: 'rgb(0,123,255,0.1)',
          borderColor: 'rgb(0,123,255)',
          data: [2, 3, 3, 3, 4, 3, 3],
        }],
      }, {
        label: 'Discharged',
        value: summary ? summary.discharged : '...',
        percentage: '2.71%',
        increase: false,
        decrease: true,
        mobile: true,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 2,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: [1, 7, 1, 3, 1, 4, 8],
        }],
      }, {
        label: 'Deaths',
        value: summary ? summary.deaths : '...',
        percentage: '2.4%',
        increase: false,
        decrease: true,
        mobile: true,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 2,
          backgroundColor: 'rgba(255,65,105,0.1)',
          borderColor: 'rgb(255,65,105)',
          data: [3, 2, 3, 2, 4, 5, 4],
        }],
      }];
    },
    stats () {
      const summary = this.$store.state.latest ? this.$store.state.latest.data.summary : null
      const a = {
        label: 'Total Cases',
        value: summary ? summary.total : 0,
        percentage: '4.7%',
        increase: true,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 2, 1, 3, 5, 4, 7],
        }],
      }
      return a.value
    }
  },
};
</script>

