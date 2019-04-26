<template>
    <div id="app">
        {{msg}}
        <div>
            <input type="text" v-model="info">
            <button @click="handleClick">添加</button>
        </div>
        <ul>
            <!--<li v-for="item in list">{{item}}</li>-->

            <!--组件-->
            <!--<todo-item v-for="item in list" :item="item"></todo-item>-->

            <!--插槽-->
            <todo-item v-for="item in list" :key="item">

                <!--普通插槽-->
                <!--<span solt="item" style="font-size: 20px;">{{item}}</span>-->

                <!--具名插槽-->
                <!--<template v-slot:item>-->
                    <!--<span style="font-size: 20px;">{{item}}</span>-->
                <!--</template>-->

                <!--作用域插槽-->
                <template v-slot:item="itemProps">
                    <span :style="{fontSize: '20px', color: itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
                </template>

            </todo-item>


        </ul>
    </div>
</template>

<script>
    import TodoItem from './components/TodoItem.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Hello Vue!',
                info: '',
                list: []
            }
        },
        methods: {
            handleClick() {
                this.list.push(this.info);
                this.info = "";
            }
        },
        components: {
            TodoItem
        }
    }
</script>

<style>

</style>
