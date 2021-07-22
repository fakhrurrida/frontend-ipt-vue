<template>
    <div class="swagger" id="swagger"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export default {
    name: "SwaggerBNI",
    mounted() {
        const spec = require('../assets/swagger/swagger-topup.json');
        SwaggerUI({
            spec: spec,
            dom_id: '#swagger'
        })
    }
}
</script>