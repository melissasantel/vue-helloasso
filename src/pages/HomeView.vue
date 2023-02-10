<template>
  <div class="home">
    <div class="search-container">
      <input type="text" v-model="research" placeholder="Rechercher un contact"/>
    </div>
    <div class="cards-container">
      <div v-for="user in userList" :key="user.id" class="card-item" >
        <user-card
          :firstName="user.first_name"
          :lastName="user.last_name"
          :email="user.email"
          :image="user.avatar"
        />
      </div>
    </div>
    <div class="pagination-container">
      <pagination
        :currentPage="currentPage"
        :perPage="perPage"
        :totalPages="totalPages"
        @pageChanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import ReqresIn from '@/api/ReqresIn.vue'
import UserCard from '@/components/UserCard.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'HomeView',
  components: {
    UserCard,
    Pagination
  },
  data: () => ({
    userList: [],
    currentPage: 0,
    perPage: 0,
    totalPages: 0,
    research: ''
  }),
  mounted () {
    this.getUser()
  },
  methods: {
    onPageChange (page) {
      this.currentPage = page
      this.getUser()
    },
    getUser () {
      const page = this.currentPage === 0 ? 1 : this.currentPage
      ReqresIn.getUsersFromPage(page).then((res) => {
        this.currentPage = res.page
        this.perPage = res.per_page
        this.totalPages = res.total_pages
        this.userList = res.data
      })
    },
    filteredContact () {
      const searchItem = this.research && this.research.toLowerCase()
      let userData = this.userList
      if (searchItem) {
        userData = userData.research((row) => {
          return Object.keys(row).some((key) => {
            return (String(row[key]).toLowerCase().indexOf(searchItem) > -1)
          })
        })
      }
      return userData
    },
    watch: {
      research (newValue, oldValue) {
        console.log('hey')
        if (newValue !== '') {
          this.userList = this.filteredContact()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
  padding: 20px;
}

.card-item {
  order: 3;
}

</style>
