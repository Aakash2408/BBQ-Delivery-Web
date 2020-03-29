<template>
<div>
    <v-menu>
        <v-text-field slot ="activator" label="Due-Date" prepend-icon="date_range"></v-text-field>
        <v-textarea  v-model="due"></v-textarea> 
    </v-menu>
</div>
</template>
<script>
 
export default {
    name:"pickup",
    props:{
        msg:"string"
    },
    data(){
        return{
            title:'',
            content:'',
            due:null
        }
    }
};
</script>