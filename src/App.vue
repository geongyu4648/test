<template>
  <div id="app">
    <ToolBar />
    <Router-View />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components: {
    ToolBar: ToolBar,
  }
}
</script>