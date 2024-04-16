<template>
    <div class="">
        <div class="flex items-center justify-between bg-blue-700 py-2 px-10">
            <span>TODOLIST</span>
            <div class="flex gap-4 items-center">
                Bonjour, {{ banane.name }}
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
                    <input type="checkbox" :checked="task.status === 'completed'"
                        @change="handleChangeCheckboxState(task)" />
                    <span>{{ task.name }}</span>
                    <UButton color="red" @click="handleClickDeleteTaskButton(task.id)" class="w-fit">Delete</UButton>
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
            banane: {},
            tasks: []
        };
    },
    mounted() {
        this.banane = JSON.parse(localStorage.getItem('banane'));
        this.fetchTasks();
    },
    methods: {
        async fetchTasks() {
            try {
                const response = await fetch('/api/users/' + this.banane.id + '/lists');
                const data = await response.json();
                if (response.status === 200) {
                    console.log(data)
                    this.tasks = data;
                }
                else {
                    const toast = useToast()
                    toast.add({ title: "Ça marche pas je crois !" })
                }

            } catch (error) {
                console.error('Error:', error);
                // Handle error, e.g., display an error message to the user
                const toast = useToast()
                toast.add({ title: "YA UNE ERREUR !" })
            }
        },
        async handleClickAddTaskButton() {
            try {
                const response = await fetch('/api/users/' + this.banane.id + '/lists', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.newTask,
                    })
                });
                const data = await response.json();
                if (response.status === 200) {
                    this.tasks.push(data);
                }
                else {
                    const toast = useToast()
                    toast.add({ title: "Ça marche pas je crois !" })
                }

            } catch (error) {
                console.error('Error:', error);
                // Handle error, e.g., display an error message to the user
                const toast = useToast()
                toast.add({ title: "YA UNE ERREUR !" })
            }
        },
        async handleChangeCheckboxState(task) {
            try {
                const response = await fetch('/api/users/' + this.banane.id + '/lists/' + task.id, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'PATCH',
                    body: JSON.stringify({
                        status: task.status === 'completed' ? 'active' : 'completed'
                    })
                });
                if (response.status === 200) {
                    console.log(this.fetchTasks())
                    this.fetchTasks();
                } else {
                    console.log(response)
                    const toast = useToast()
                    toast.add({ title: "Ça marche pas je crois !" })
                }

            } catch (error) {
                console.error('Error:', error);
                // Handle error, e.g., display an error message to the user
                const toast = useToast()
                toast.add({ title: "YA UNE ERREUR !" })
            }
        },
        async handleClickDeleteTaskButton(id) {
            try {
                const response = await fetch('/api/users/' + this.banane.id + '/lists/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (response.status === 204) {
                    this.tasks = this.tasks.filter(t => t.id !== id);
                }
                else {
                    const toast = useToast()
                    toast.add({ title: "Ça marche pas je crois !" })
                }

            } catch (error) {
                console.error('Error:', error);
                // Handle error, e.g., display an error message to the user
                const toast = useToast()
                toast.add({ title: "YA UNE ERREUR !" })
            }
        },
        handleClickDisconnectButton() {
            localStorage.removeItem('banane');
            this.$router.push('/');
        }
    }
};
</script>
  