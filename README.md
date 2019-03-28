# vue-bulma-tabs

Vue.js wrapper for [Bulma Tabs](https://bulma.io/documentation/components/tabs/).

### Installation

```sh 
$   npm install --save @crow1796/vue-bulma-tabs
```

### Example

```
<template>
    <Tabs orientation="vertical">
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

#### Tabs

| Prop Name   | Accepted Values      | Type   | Required? | Default    |
|-------------|----------------------|--------|-----------|------------|
| orientation | horizontal, vertical | String | no        | horizontal |

#### Tab

| Prop Name | Accepted Values | Type    | Required? | Default |
|-----------|-----------------|---------|-----------|---------|
| name      | any             | String  | yes       |         |
| selected  | true or false   | Boolean | no        | false   |