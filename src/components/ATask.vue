<template>
    <li class="all">
        <div class="task">
            <h3>
                <slot name="name"></slot>
            </h3>
            <div class="row">
                <p>
                    <slot name="priority"></slot>
                </p>
                <p>
                    <slot name="date"></slot>
                </p>
            </div>
        </div>
        <div class="button">
            <slot name="button"></slot>
        </div>
    </li>
</template>

<script>
export default {
    methods:{
        deleteTask(){
            this.$store.commit("deleteTask", this.index)
            console.log(this.index);
        }
    }
}
</script>

<style lang="scss" scoped>
.all{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 10px;

    .task{
    width: 90%;
    border: 1px solid #fff;
    padding: 10px;
    font-size: 15px;

        h3{
            font-size: 20px;
        }
        
        .row{
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
        }
    }

    .button{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
}

@media (max-width: 520px){
    .task{
        width: 100%;
        transition: all 0.5s ease;
    }
    p{
        font-size: 12px;
        
    }
}
</style>