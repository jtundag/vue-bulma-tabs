# vue-bulma-tabs

Vue.js wrapper for [Bulma Tabs](https://bulma.io/documentation/components/tabs/).

### Installation

```sh 
$   npm install --save @crow1796/vue-bulma-tabs
```

### Example

```
<template>
    <Tabs>
        <Tab name="Tab 1" :selected="true">
            Tab 1 Content
        </Tab>
        <Tab name="Tab 2">
            Tab 2 Content
        </Tab>
    </Tabs>
</template>

<script>
import { Tabs, Tab } from '@crow1796/vue-bulma-tabs'

export default {
    components: {
        Tabs,
        Tab
    }
}
</script>
```

### Props

| Prop Name   | Accepted Values      | Type   | Default    |
|-------------|----------------------|--------|------------|
| orientation | horizontal, vertical | string | horizontal |