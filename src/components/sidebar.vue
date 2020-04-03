<template>
  <div>
    <div class="app-side-logo">
        <img src="@/assets/logo.gif" alt="" :width="isCollapse ? '100' : '100'" height="100">
      </div>
    <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" router :collapse="collapse">
      <SidebarItem v-for="(item, idx) in routes" :subroute="item" :fatherpath="fatherPath" :barIdx="idx" :key="idx" />
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './sidebarItem'
  export default {
    name: "Sidebar",
    components: {
      SidebarItem
    },
    props: {
      collapse: {
        type: Boolean
      },
      routes: {
        type: Array
      }
    },
    computed: {
      defaultActive() {
        return this.$route.path
      },
      fatherPath() {
        return this.$router.options.routes[1].path
      }
    }
  }

</script>

<style>

</style>
