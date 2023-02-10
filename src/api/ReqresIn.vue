<script>
import http from '@/utils/http.js'

function getUsersFromPage (page = 1) {
  return http.get(`/api/users?page=${page}`)
}

export default {
  getUsersFromPage
}

</script>
