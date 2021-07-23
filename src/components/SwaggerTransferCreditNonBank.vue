<template>
    <div class="swaggercnb" id="swaggercnb"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export default {
    name: "SwaggerTransferCreditNonBank",
    mounted() {
        const spec = require('../assets/swagger/swagger-transfercredit-nonbank.json');
        SwaggerUI({
            spec: spec,
            dom_id: '#swaggercnb'
        })
    }
}
</script>