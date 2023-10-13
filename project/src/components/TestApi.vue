<template>
    <div class="container3">
        <div style="margin-top: 25px; font-size: 25px;">Команды:</div>
        <div v-if = "isLoad" class = "loading">
            Загрузка...
        </div>

        <div v-else class = "data">
            <div v-for="(el, i) in teamData" :key = "el.id">
                 {{ i + 1}}
                <TeamComp :abbreviation="el.abbreviation" :fullName="el.full_name"></TeamComp>
            </div>
        </div>
        <a href="https://www.flaticon.com/ru/free-icons/-" title="баскетбольная майка иконки">Баскетбольная майка иконки от Freepik - Flaticon</a>
    </div>
</template>

<script>
    import TeamComp from './TeamComp.vue';


    export default {
    name: 'TestApi',
    data() {
        return {
            teamData: [],
            isLoad: true
        };
    },
    methods: {
        removeTeam(id) {
            this.teamData = this.teamData.filter((el) => el.id !== id);
        }
    },
    mounted() {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'b2eaff1e7emsh8ad63e55594a7a0p17e2edjsnb99aa21efe4f',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };


        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
            this.teamData = res.data;
            console.log(res);
            this.isLoad = false;
        });
    },
    components: { TeamComp }
}

</script>

<style scoped>
    .container3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: black;
        opacity: 0.9;
    }

    .title {
        font-size: 20px;
        color: chocolate;
        margin: 15px;
        font-weight: bold;

    }

    .data {
        padding: 20px;
        display: grid;
        grid-template-columns: 300px 300px 300px;
        gap: 40px;
    }

    .loading {
        padding-bottom: 30px;
        height: 100vh
    }

    img {
        cursor: pointer;
        margin-left: 15px;
    }

    
</style>