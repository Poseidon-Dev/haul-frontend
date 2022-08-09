<template>
    <header>
        <nav>
            <h1><router-link to="/">Equipment Transfers</router-link></h1>
            <ul>
                <li><router-link to="/equipment">Equipment</router-link></li>
                <li><router-link to="/transfers">Transfers</router-link></li>
                <li><router-link to="/messages">Messages</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        width: 100%;
        height: 10rem;
        background-color: #30008d;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        color: white;
        margin: 0;;
    }

    a.router-link-active {
        border: 1px solid green;
    }

    li {
        margin: 0 0.5rem;
    }
</style>