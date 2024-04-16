<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <UCard class="w-1/3 min-w-[400px]">
            <h1 class="text-lg font-bold">Login</h1>
            <p class="text-gray-500 mb-4">Enter your credentials to access your account.</p>
            <form class="flex flex-col gap-3">
                <UFormGroup label="Username">
                    <UInput type="text" color="primary" variant="outline" placeholder="Username" />
                </UFormGroup>
                <UFormGroup label="Password">
                    <UInput type="password" color="primary" variant="outline" placeholder="Password" />
                </UFormGroup>
                <UButton type="submit" class="self-end w-fit">Sign in</UButton>
            </form>
        </UCard>
    </div>
    <NuxtPage />
</template>