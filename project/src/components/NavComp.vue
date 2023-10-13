<template>
    <div class="container2">
        <nav>
            <router-link to = '/' class="link">Домашняя страница</router-link>
            <router-link to = '/chat' class="link">Чат</router-link>
            <router-link to = '/test' class="link">Список команд NBA</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavComp',
    }
</script>

<style scoped>
    .container2 {
        height: 100px;
        width: 100%;
        display: flex;
        background-color: chocolate;
        justify-content: center;
    }

    nav {
        width: 700px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link {
        color: black;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 25px;
        line-height: 98px;
        height: 100%;
        display: block;
        padding: 0 15px;
    }

    .link:hover {
        background-color: white;
        color: chocolate;
    }
</style>