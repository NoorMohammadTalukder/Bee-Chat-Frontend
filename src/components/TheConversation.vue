<template >
    
        <section >
        <div class="col-8  ">
            <!-- <div class="text"> -->
                <p class="text"> {{Text}}</p>
                
            <!-- </div> -->
        </div>
        <div>

        </div>
        </section>
</template>

<script>
export default {
    props: ['Id','Text', 'UserId','UserId2'],
}
</script>

<style scoped>
.text{
    background: rgba(255, 255, 255, 0.719);
    margin-left: 10px;
    padding: 20px;
    border-radius: 10px;
}
</style>