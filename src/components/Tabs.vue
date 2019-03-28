<script>
export default {
    name: 'vue-bulma-tabs',
    props: {
        orientation: {
            default: 'horizontal'
        }  
    },
    data() {
        return {
            tabs: []
        };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        changeTab(tab) {
            this.tabs.map((t) => t.isActive = t.name == tab.name)
        }
    }
}
</script>

<template>
    <div :class="orientation">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" 
                    :class="{'is-active': tab.isActive}"
                    :key="index">
                    <a @click="changeTab(tab)">
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .vertical{
        height: 100%;
        display: flex;
        -ms-flex-direction: row;
        -webkit-box-orient: horizontal;
        -moz-box-orient: horizontal;
        -ms-box-orient: horizontal;
        min-height: 540px;
        box-orient: horizontal;
    }
    
    .vertical .tabs {
        width: 20%;
        -ms-flex: 0 100px;
        -webkit-box-flex: 0;
        -moz-box-flex: 0;
        -ms-box-flex: 0;
        box-flex: 0;
        margin: 0;

        & > ul{
            margin: 0;
            display: inline-block;
        }

        & > ul > li{
            width: 100%;
        }

        & > ul > li a{
            border-bottom: 0;
            padding: 15px 0;
            font-weight: 300;
            position: relative;
        }

        & > ul li.is-active a{
            color: black;
            background: #FADC56;
        }

        & > ul li.is-active a:after{
            content: '';
            display: block;
            position: absolute;
            right: -1px;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right: 15px solid white;
        }
    }

    .vertical .tab-details{
        -ms-flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-box-flex: 1;
        box-flex: 1;
        width: 100%;
    }
</style>

