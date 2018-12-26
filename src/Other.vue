<template>
    <div id="other">
        <h1>这是other页：包含主组件和子组件两个组件</h1>
        <div class="block">这是主组件的block</div>
        <Child></Child>
        <h1>
            <a href="./index.html">点击进入应用css module构建的index.html页</a>
        </h1>
    </div>
</template>

<script>
import Child from "./components/Ohterchild";

export default {
    name: "app",
    components: {
        Child
    }
};
</script>

<style>
#other {
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
