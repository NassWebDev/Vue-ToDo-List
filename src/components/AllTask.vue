<template>
    <div class="alltask">
        <h2>
            Toutes les tâches
        </h2>
        <transition mode="out-in" name="fade">
            <p v-if="phrase">
                There is no task. Add a task.
            </p>
            <div class="listTask" v-else>
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
        </transition>
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
    // border: solid 1px #fff;
    // box-shadow: 7px 5px 5px 0px rgb(217, 217, 217);
    padding: 30px;
    row-gap: 30px;

    h2{
        margin-bottom: 20px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.4s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .fade-enter-to,
    .fade-leave-from {
        opacity: 1;
        transform: scale(1);
    }
    
    .listTask{
        width: 100%;
        position: relative;

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

        .list-enter-to,
        .list-leave-from {
            opacity: 1;
            transform: translateX(0);
        }

        .list-leave-active{
            position: absolute;
        }

        i{
            cursor: pointer;
        }
    }
}
</style>