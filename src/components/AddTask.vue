<template>
    <div class="addtask">
        <h2>Add a task</h2>
        <form @submit.prevent="addTask">
            <div class="row name">
                <label>Name: </label>
                <input type="text" v-model="task.name" placeholder="Write the task...">
            </div>
            <div class="rows">
                <div class="row priority">
                    <label>Priority: </label>
                    <select v-model="task.priority">
                        <option disabled value="">Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div class="row date">
                    <label>Date: </label>
                    <input type="date" v-model="task.date">
                </div>
            </div>
            <button>
                Add
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            task:{
                id: this.$store.state.tasks.length+1,
                name: '',
                priority: '',
                date: null
            }
        }
    },
    methods:{
        addTask(){
            if(!this.task.name || !this.task.priority || !this.task.date){
                alert("Les champs doivent être remplis.")
            }
            else{
                this.$store.commit("addTask" , this.task);
                this.task = {
                    name: '',
                    priority: '',
                    date: null
                }
                this.$router.push({ name: 'alltask'});
                console.log(this.$store.state.tasks);
            }
        }
    }
}
</script>

<style scoped>
.addtask{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 50px;
    border: solid 1px #fff;
    box-shadow: 7px 5px 5px 0px rgb(217, 217, 217);
    padding: 30px;
}

form{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row{
    width: 100%;
    margin-top: 5px;
}

.rows{
    width: 100%;
    display: flex;
    gap: 20px;
}

.name, .priority, .date{
    display: flex;
    flex-direction: column;
}

input, select{
    height: 30px;
    padding-left: 5px;
}

select{
    cursor: pointer;
}

.button{
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

button{
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.15s ease-in;
}

button:hover{
    transform: scale(1.05);
}

@media (max-width: 520px){
    .addtask{
        width: 300px;
    }

    form{
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .row{
        width: 100%;
    }

    .rows{
        width: 100%;
        flex-direction: column;
        gap: 0;
    }
}

</style>