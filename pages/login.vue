<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <UCard class="w-1/3 min-w-[400px]">
            <h1 class="text-lg font-bold">Login</h1>
            <p class="text-gray-500 mb-4">Enter your credentials to access your account.</p>
            <form class="flex flex-col gap-3">
                <UFormGroup label="Email">
                    <UInput color="blue" type="text" variant="outline" placeholder="Email" v-model="email" />
                </UFormGroup>
                <UFormGroup label="Password">
                    <UInput color="blue" type="password" variant="outline" placeholder="Password" v-model="password" />
                </UFormGroup>
                <UButton color="blue" @click="() => login()" class="self-end w-fit">Sign in</UButton>
            </form>
        </UCard>
    </div>
    <NuxtPage />
</template>

<script>
export default {
    data() {
        return {
            email: 'johndoe@gmail.com',
            password: '123456',
        }
    },
    methods: {
        async login() {
            try {
                const response = await fetch('http://localhost:3000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                });
                const data = await response.json();
                if (response.status === 200) {
                    // Ajout au localStorage
                    localStorage.setItem('banane', JSON.stringify(data));
                    // Redirection
                    this.$router.push('/home');
                }
                else {
                    console.log("error")
                    const toast = useToast()
                    toast.add({ title: "Ce ne sont pas les bons codes, banane !" })
                }

            } catch (error) {
                console.error('Error:', error);
                // Handle error, e.g., display an error message to the user
            }
        }
    }
}
</script>