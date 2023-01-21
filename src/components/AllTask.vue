<template>
    <div class="alltask">
        <h2>
            Toutes les tâches
        </h2>
        <transition name="show-phrase">
            <p v-if="phrase">
                There is no task. Add a task.
            </p>
        </transition>
        <transition-group tag="ul" class="list" name="list" appear>
            <a-task v-for="(task, index) in this.$store.state.tasks" :key="task">
                <template v-slot:name>
                    {{ task.name }} + {{ index }}
                </template>
                <template v-slot:priority>
                    Priority Level: {{ task.priority }}
                </template>
                <template v-slot:date>
                    Date: {{ task.date }}
                </template>
                <template v-slot:button>
                    <i class="fa fa-close" @click="deleteTask(index)"></i>
                </template>
            </a-task>
        </transition-group>
    </div>
</template>

<script>
import ATask from './ATask.vue'

export default {
    components:{
        ATask
    },
    data(){
        return{
            phrase: false
        }
    },
    methods:{
        deleteTask(index){
            this.$store.commit("deleteTask", index);
            if(!this.$store.state.tasks.length){
                this.phrase = true;
            }
            else{
                this.phrase = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.alltask{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 50px;
    border: solid 1px #fff;
    box-shadow: 7px 5px 5px 0px rgb(217, 217, 217);
    padding: 30px;

    h2{
        margin-bottom: 20px;
    }
    
    .list{
        width: 100%;
    }
    
    .list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .show-phrase-enter-active,
    .show-phrase-leave-active {
        transition: all 0.5s ease;
        transition-delay: 0.5s;
    }

    .show-phrase-enter-from,
    .show-phrase-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    i{
        cursor: pointer;
    }
}
</style>