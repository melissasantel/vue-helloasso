<template>
    <div class="card">
        <b-card
            :title="fullName"
            :img-src="image"
            img-alt="Contact image"
            img-left
            style="max-width: 5rem;"
        >
            <b-card-text>
            {{ email }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    image: {
      required: true
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style>

.card {
  margin: 0.5em;
  border-radius: 30px 7px 30px 7px;
  box-shadow: 3px 5px 10px 4px rgba(63, 63, 63, 0.25);
  position: relative;
  height: 100%;
  background-color: #f3f3f3;
  width: 500px;
}

img {
  border-radius: 50%;
}

</style>
