<template>
    <div @click="showDetailFunc(item.hotelId)" class="mb-3 col-sm-6 col-md-4 item">
        <div class="thumbnail card">
            <div class="img-event intrinsic">
                <img :src="item.thumbnail_url" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">
            </div>
            <div class="card-body">
                <router-link :to="'/' + item.hotelId" tag="h5" class="card-title"><a>{{ item.name }}</a>
                </router-link>
                <h6 class="card-subtitle mb-2 remain">{{ item.price }} for 1 night</h6>
                <h6 class="card-subtitle mb-2 remain">{{ item.scoreValue }} <!--{{item.scoreDegree}} --></h6>
                <h6 class="card-subtitle mb-2 remain">{{ item.count }} reviews</h6>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        data() {
            return {
                showDetail: false
            }
        },
        methods: {
            showDetailFunc(hotelId) {
                this.$emit('expand', hotelId)
            }
        }
    }
</script>

<style lang="scss" scoped>
    div.card {
        height: 100%;
    }
</style>
