<template>
  <div class="q-pa-md">
    <router-link class="image" :to="'/product/'+product._id">
      <div class="image">
        <q-img :src="product.image1" class="inside-image"/>
      </div>
    </router-link>
    <div class="text-center q-py-xs">
      <div class="text-h6">
        {{ product.name }}
      </div>
    </div>

    <div class="text-subtitle2 text-center" style="color: #b9887d; font-weight: bold; padding-bottom: 6px">
      NT${{ product.price }}
    </div>
    <div class="text-center">
      <q-btn outline class="text-product" @click="addCart">加入購物車</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addCart () {
      if (this.$store.state.user.jwt.token.length === 0) {
        this.$store.commit('user/beforeLogin', this.product._id)
        this.$q.notify({
          message: '已加入購物車',
          timeout: 1000,
          type: 'positive',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      } else {
        this.$store.dispatch('user/addCart', { product: this.product._id }).then((res) => {
          this.$q.notify({
            message: '已加入購物車',
            timeout: 1000,
            type: 'positive',
            color: 'faded',
            textColor: 'white',
            position: 'top'
          })
        })
          .catch((error) => {
            console.log(error)
            this.$q.notify({
              message: '加入購物車失敗',
              timeout: 1000,
              type: 'negative',
              color: 'faded',
              textColor: 'white',
              position: 'top'
            })
          })
      }
    }
  }
}
</script>

<style lang="scss">
.image {
  margin: auto;
  overflow: hidden;
}

.inside-image {
  transition: .5s;
}

.image:hover {
  filter: opacity(0.5);
  & .inside-image {
    transform: scale(1.2);
  }
}
</style>
