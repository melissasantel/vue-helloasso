<script>
import http from '@/utils/http.js'

function getUsers () {
  return http.get('/api/users/')
}

export default {
  getUsers
}

</script>
