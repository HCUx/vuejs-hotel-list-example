<template>
    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3">
                        <div class="intrinsic">
                            <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt="">
                        </div>
                    </div>
                </div>

                <div v-if="isMainPage" class="reviews">
                    <span>Reviews</span>

                    <b-table  thead-class="hidden_header" :fields="['reviewPoint', 'body']"
                             :fixed="false"
                             :items="item.reviews">

                    </b-table>
                </div>
                <div class="contact" v-if="isMainPage">
                    <router-link :to="'/' + item.hotelId" tag="h5" class="card-title">
                        <button class="btn btn-success" @click="goToDetail(item.hotelId)">
                            <span>Contact</span>
                        </button>
                    </router-link>
                </div>
                <div v-else>
                    Contact information
                    <div class="caption-full">
                        <h3 class="card-body"><a class="thead-light">{{ item.name }}</a></h3>
                        <h4 class="pull-right">{{ item.price }} for 1 night</h4>
                        <h4> Email : <span class="alert-light">{{ item.email }}</span></h4>
                        <h4> Phone : <span class="alert-light">{{ item.phone }}</span></h4>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ReviewData from '../../data/reviews.json';
    import HotelData from '../../data/hotels.json';

    export default {
        props: ['id'],
        data() {
            return {
                HotelData,
                ReviewData,
                isMainPage: true
            }
        },
        mounted() {
            if (this.$route.params.id !== undefined)
                this.isMainPage = false;
        },
        computed: {
            item() {
                let hId = 0;
                if (this.$route.params.id !== undefined)
                    hId = this.$route.params.id;
                else
                    hId = this.id;
                if (this.HotelData.length >= hId) {
                    let filterHotel = this.HotelData.filter((item) => {
                        return item.hotelId == hId
                    });
                    if (filterHotel.length > 0) {
                        let filterRev = this.ReviewData.filter((item) => {
                            return item.hotelId == hId
                        });
                        if (filterRev.length > 0) {
                            filterHotel[0].reviews = filterRev;
                        }
                        console.log("dsadsa " + JSON.stringify(filterHotel[0]));
                        return filterHotel[0];
                    }
                }
                return {}
            }
        },
        methods: {
            goToDetail() {

            }
        }
    }
</script>

<style scoped>
    .card {
        margin-bottom: 10px;
    }

    .caption-full {
        padding-right: 10px;
        padding-left: 10px;
    }

    .contact {
        margin: 10px;
        display: block;
    }

    .reviews {
        margin: 10px;
    }
</style>
<style>
    .hidden_header{
        display: none;
    }
</style>
