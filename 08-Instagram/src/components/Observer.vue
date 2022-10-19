<template>
    <div class="observer"></div>
  </template>
  
  <script>
  export default {
    props: ['options'],
    data: () => ({
      observer: null,
    }),
    mounted() {
      console.log("mounted")
      const options = this.options || {};
      this.observer = new IntersectionObserver(([entry]) => {
        console.log(entry)
        if (entry && entry.isIntersecting) {
          console.log("emit?")
          this.$emit("intersect");
        }
      }, options);
  
      this.observer.observe(this.$el);
    },
    destroyed() {
      this.observer.disconnect();
    },
  };
  </script>

<style scoped>
.observer {
    height: 100px
}
</style>