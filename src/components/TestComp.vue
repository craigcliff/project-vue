<template>
    <div>
      
        
    <h1>I'm a computed value{{fullName}}</h1>
    <h1>I'm a method value{{testMethodFullName()}}</h1>
</div>
</template>

<script>
export default {
    props:{
        name: String,
        surName: String
    },
    computed: {
        fullName(){
            console.log('computed property')
            
            return `${this.name} ${this.surName.toUpperCase()}` 
            
        },
    
    },
    methods:{
        testMethodFullName(){
            console.log('hello from method')
            return `${this.name} ${this.surName.toUpperCase()}` 
        }
    }

}
</script>