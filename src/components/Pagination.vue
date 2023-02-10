<template>
    <div class="component--container">
      <div class="pagination--container">
        <ul class="pagination">
          <li class="pagination-item first">
            <button type="button" class="btn" :disabled="isOnFirstPage" @click="onClickFirstPage">
              Première
            </button>
          </li>
          <li class="pagination-item previous">
            <button type="button" class="btn" :disabled="isOnFirstPage" @click="onClickPreviousPage">
              Précédent
            </button>
          </li>
          <li v-for="page in pages" :key="page.name">
            <button
              type="button"
              :disabled="page.isDisabled"
              @click="onClickPage(page.name)"
              class="btn"
              :class="{active: isPageActive(page.name)}"
            >
              {{ page.name }}
            </button>
          </li>
          <li class="pagination-item next">
            <button type="button" class="btn" :disabled="isOnLastPage" @click="onClickNextPage">
              Suivant
            </button>
          </li>
          <li class="pagination-item last">
            <button type="button" class="btn" :disabled="isOnLastPage" @click="onClickLastPage">
              Dernière
            </button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PaginationCard',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClickFirstPage () {
      this.$emit('pageChanged', 1)
    },
    onClickPreviousPage () {
      this.$emit('pageChanged', this.currentPage - 1)
    },
    onClickPage (page) {
      this.$emit('pageChanged', page)
    },
    onClickNextPage () {
      this.$emit('pageChanged', this.currentPage + 1)
    },
    onClickLastPage () {
      this.$emit('pageChanged', this.totalPages)
    },
    isPageActive (page) {
      return this.currentPage === page
    }
  },
  computed: {
    startPage () {
      if (this.currentPage === 1) {
        return 1
      } else if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }
      return this.currentPage - 1
    },
    endPage () {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
    },
    pages () {
      const range = []
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        })
      }
      return range
    },
    isOnFirstPage () {
      return this.currentPage === 1
    },
    isOnLastPage () {
      return this.currentPage === this.totalPages
    }
  }
}
</script>

<style>
.component--container {
  padding: 30px;
  text-align: center;
}
.pagination--container {
  display: inline-block;
  padding: 50px;
}

.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}

.btn {
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px !important;
}
</style>
