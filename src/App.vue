<template>
    <div id="app">
        <Header msg="Page Header"/>
        <Content msg="Page Content"/>
        <Footer msg="Page Footer"/>
    </div>
</template>
 
<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

import './components/css/style.css'
import './components/css/bootstrap.min.css'
import './components/css/font-awesome.min.css'
import './components/css/animate.css'
import './components/js/jquery-main.js'
import './components/js/wow.min.js'
import './components/js/custom.js'
import './components/js/bootstrap.min.js'
 
export default {
 name: 'App',
 components: {
 Header,
 Content,
 Footer
 }
}
</script>
 
<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}
</style>
