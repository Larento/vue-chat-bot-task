<template>
    <v-toolbar :elevation="0" flat color="indigo-lighten-4" class="toolbar">
        <v-container fluid class="d-flex ga-2 flex-row align-center toolbar-container">
            <v-toolbar-title class="text-h6 font-weight-black"> Чат-бот </v-toolbar-title>
        </v-container>
    </v-toolbar>
</template>

<style scoped lang="scss">
.toolbar {
    background-image: linear-gradient(-10deg, #c5cae9, #e8eaf6);
}

.toolbar-container {
    max-width: 80ch;
}
</style>
