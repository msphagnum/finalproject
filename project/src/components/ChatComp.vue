<template>
    <div v-if="username" class="black">
         <div class="chat">
            <h2>Чат</h2>
            <div class="text" v-for = "message in messages" :key = "message.id">
                {{ message.user }}: {{ message.text }}
            </div>
            <div v-show = "emptyMsg" class = "empty">
                Нет сообщений. Напишите первым!
            </div>
            <input v-model = "newMessage" placeholder="Введите сообщение"/>
            <button @click = "sendMessage" @keyup.enter="sendMessage">Отправить сообщение</button>
            <button @click="delLast">Удалить последнее сообщение</button>
            <button v-show="deleteBtn" @click="delMessage">Удалить все сообщения</button>
         </div>
    </div>

    <div v-else class = "alert black">
        Чтобы писать в чат нужно <router-link :to="{name: 'Home'}">зарегистрироваться</router-link>
    </div>
</template>

<script>
    export default {
        name: 'ChatPage',
        data() {
            return {
                messages: [],
                newMessage: '',
                emptyMsg: true,
                deleteBtn: false,
                username: localStorage.getItem('username')
            }
        },
        methods: {
            sendMessage(){
                if(!this.username){
                    this.username = 'Аноним'
                }
                if(this.newMessage !== '') {
                    this.emptyMsg = false
                    console.log('Вы ввели сообщение: ', this.newMessage)
                    this.messages.push(
                        {
                            id: new Date().getTime,
                            text: this.newMessage,
                            user: this.username
                        }
                    )
                    this.saveChatRecords()
                    this.newMessage = ''
                    this.deleteBtn = true
                } else {
                    console.log('Пожалуйста, введите сообщение')
                    alert('Пожалуйства введите сообщение')
                }
            },
            delMessage() {
                this.messages = []
                localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.message))
                console.log('Сообщение удалено')
                this.emptyMsg = true
            },
            saveChatRecords() {
                const records = this.messages
                console.log(records)
                localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
            },
            loadChatRecords(){
                const records = JSON.parse(localStorage.getItem(`messages_${this.username}`))
                if(records){
                    this.messages = records
                    this.emptyMsg = false
                }
            },
            delLast() {
                    this.messages.pop()
                    localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.message))
            }
        },
        computed() {
            localStorage.setItem('username', this.$route.query.username)
        },
        created() {
            this.loadChatRecords()
        },
        updated() {
            if (this.messages.length <  1) {
                        this.emptyMsg = true
                    }
        }
    }
</script>
    
<style scoped>
    h2 {
        color: chocolate;
        margin-bottom: 50px;
    }
    .text {
        margin-bottom: 40px;
        color: chocolate;
    }
    .chat{
        width: 600px;
        border: 5px solid chocolate;
        background-color: white;
        color: black;
        font-weight: 20px;
        margin: 20px;
        padding: 15px;
    }

.empty {
    margin-bottom: 30px;
}

input{
    margin-right: 15px;
}

button {
    margin-left: 5px;
    margin-bottom: 20px;
}

button:hover{
    background-color: black;
    color: white;
}



.alert {
    padding: 30px;
}

.black {
    background-color: black;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
</style>