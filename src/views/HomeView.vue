<template>
    <div class="home">
        <section id="aboutUS">
            <div id="titleContainer">
                <h1>Enjoy your <p class="emphasis">coffee</p> before your activity</h1>
            </div>
        </section>
        <section id="ourProduct"></section>
        <section id="delivery"></section>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.home {
    #aboutUS {
        background-color: #f9d9aa;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        #titleContainer {
            h1 {
                font-size: 3rem;
                .emphasis {
                    color: #ff902a;
                }
            }
        }
    }
    #ourProduct {
        background-color: #f9d9aa;
        height: 100vh;
    }
    #delivery {
        background-color: #f9d9aa;
        height: 100vh;
    }
}
</style>