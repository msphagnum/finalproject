<template>
    <div class="cont1">
        <div v-if="isAuthenticated" class="cont2">
                <div>Добро пожаловать, {{ username }}</div>
                <button @click="logout">Выйти</button>
        </div>

        <div v-else-if="!isAuthenticated">
            <input v-model = "username" placeholder="Введите свое имя"/>
            <input v-model = "eMail" placeholder="E-mail"/>
            <button @click = "login">Войти</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'HomePage',
        data () {
            return {
                isAuthenticated: false,
                eMail: '',
                username: ''
            }
        },
        methods: {
            login() {
                if(this.username !== '' && this.eMail !== '') {
                    console.log('Вы вошли как', this.username)
                    this.isAuthenticated = true
                    localStorage.setItem('isAuthenticated', true)
                    localStorage.setItem('username', this.username)
                    localStorage.setItem('eMail', this.eMail)
                    this.$router.push({
                        name: 'Chat',
                        query: {username: this.username}
                    })
                } else {
                    console.log('Пожалуйста, заполните поля регистрации')
                }
            },
            logout (){
                this.isAuthenticated = false
                this.username = ''
                this.eMail = ''
                localStorage.setItem('isAuthenticated', false)
                localStorage.setItem('username', '')
                localStorage.setItem('eMail', '')
            }
        },
        created(){
            if(localStorage.getItem('isAuthenticated')) {
                this.isAuthenticated = true
                this.username = localStorage.getItem('username')
            }
            if (this.username == '') {
                this.isAuthenticated = false
            }
        },
    }
</script>

<style scoped>
    div {
        padding: 20px;
        font-size: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    label {
        margin: 1px;
    }

    button {
        width: 150px;
        height: 50px;
        font-weight: bold;
        color: black;
        background-color: chocolate;
        font-size: 25px;
    }

    .cont1 {
        display: flex;
        background-size: cover;
        background-color: black;
        opacity: 0.9;
        width: 100%;
        height: 100%;
    }

    input{
        margin: 20px;
        height: 40px;
        width: 200px;
        font-size: 17px;
        border: chocolate solid 3px;
        text-align: center;
    }

    button:hover {
        background-color: white;
        color: chocolate;
    }
</style>