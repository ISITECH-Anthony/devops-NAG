<template>
    <div class="">
        <div class="flex items-center justify-between bg-blue-700 py-2 px-10">
            <span>TODOLIST</span>
            <div class="flex gap-4 items-center">
                Bonjour, {{ banane.email }}
                <UButton color="white" @click="handleClickDisconnectButton" class="w-1/6 self-end w-fit">Se déconnecter
                </UButton>
            </div>
        </div>
        <div class="flex flex-col items-center p-10">
            <div class="flex gap-2 items-center w-1/2">
                <UInput v-model="newTask" class="w-full" color="blue" type="text" variant="outline" placeholder="Task" />
                <UButton @click="handleClickAddTaskButton" color="blue" class="w-1/6 self-end w-fit">Add</UButton>
            </div>
            <div class="flex flex-col gap-2 w-1/2 mt-5">
                <div v-for="(task, index) in tasks" :key="index" class="flex items-center gap-2">
                    <input type="checkbox" v-model="task.completed" />
                    <span>{{ task.name }}</span>
                    <UButton color="red" @click="handleClickDeleteTaskButton(index)" class="w-fit">Delete</UButton>
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
            banane: JSON.parse(localStorage.getItem('banane')),
            tasks: []
        };
    },
    methods: {
        handleClickAddTaskButton() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    name: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        handleClickDeleteTaskButton(index) {
            this.tasks.splice(index, 1);
        },
        handleClickDisconnectButton() {
            localStorage.removeItem('banane');
            this.$router.push('/');
        }
    }
};
</script>
  