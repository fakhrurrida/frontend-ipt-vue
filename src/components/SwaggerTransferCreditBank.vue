<template>
    <div>
        <div class="swaggercb" id="swaggercb"></div>
    </div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export default {
    name: "SwaggerTransferCreditBank",
    mounted() {
        const spec = require('../assets/swagger/swagger-transfercredit-bank.json');
        SwaggerUI({
            spec: spec,
            dom_id: '#swaggercb'
        })
    }
}
</script>