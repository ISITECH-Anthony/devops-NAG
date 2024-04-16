<template>
    <div class="">
        <div class="flex bg-[#22c55e] py-2 px-10">
            TODOLIST
        </div>
        <div class="flex flex-col items-center p-10">
            <div class="flex gap-2 items-center w-1/2">
                <UInput v-model="newTask" class="w-full" type="text" color="primary" variant="outline" placeholder="Task" />
                <UButton @click="addTask" class="w-1/6 self-end w-fit">Add</UButton>
            </div>
            <div class="flex flex-col gap-2 w-1/2 mt-5">
                <div v-for="(task, index) in tasks" :key="index" class="flex items-center gap-2">
                    <input type="checkbox" v-model="task.completed" />
                    <span>{{ task.name }}</span>
                    <UButton @click="deleteTask(index)" class="w-fit">Delete</UButton>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            newTask: '',
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    name: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
};
</script>
  