<script>
import http from '@/utils/http.js'

function getActivity () {
  return http.get('/api/activity/')
}

export default {
  getActivity
}

</script>
