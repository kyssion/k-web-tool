<script>
export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {
      value: 123
    }
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}
</script>

<template>
  Count is: {{ someObject }}
</template>