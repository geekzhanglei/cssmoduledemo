<template>
    <div :id="$style.app">
        <h1>这是index页，包含主组件和子组件两个组件</h1>
        <div :class="$style.block">这是主组件的block</div>
        <App></App>
        <h1>
            <a href="./other.html">点击进入没有应用css-module的other.html页面</a>
        </h1>
    </div>
</template>

<script>
import App from "./components/App";

export default {
    name: "app",
    components: {
        App
    }
};
</script>

<style module>
#app {
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
}
h1 {
    color: #000;
}
.block {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
    background: lightcoral;
}
</style>
