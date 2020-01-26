<template>
    <div class="container">

        <div class="row">
            <app-hotel-item @expand="showReviews" v-for="hotel in hotels" :item="hotel"
                            :key="hotel.hotelId"></app-hotel-item>
        </div>
        <div v-if="showDetail">
            <app-hotel-detail :id="hotelId">

            </app-hotel-detail>
        </div>

    </div>
</template>

<script>
    import HotelItem from './hotel/HotelItem.vue';
    import HotelDetail from "./HotelDetail";
    import HotelData from '../../data/hotels.json';
    import ReviewData from '../../data/reviews.json';

    export default {
        data() {
            return {
                HotelData,
                ReviewData,
                hotels: [],
                showDetail: false,
                hotelId: 0,
                lastDetailId: 0
            }
        },
        components: {
            appHotelItem: HotelItem,
            appHotelDetail: HotelDetail
        },
        created() {
            let count = 0, totalPoint = 0;
            this.HotelData.forEach(hotel => {
                let hotelObj = {
                    hotelId: hotel.hotelId,
                    name: hotel.name,
                    price: hotel.price,
                    thumbnail_url: hotel.thumbnail_url
                };
                this.ReviewData.forEach(review => {
                    if (hotel.hotelId === review.hotelId) {
                        count++;
                        totalPoint += review.reviewPoint;
                    }
                });
                hotelObj.count = count;
                hotelObj.scoreValue = (totalPoint/count).toFixed(2);
                this.hotels.push(hotelObj);
                count=0; totalPoint=0;
            });
        },
        methods: {
            showReviews(value) {
                this.hotelId = value;
                if (this.lastDetailId === value) {
                    this.showDetail = !this.showDetail;
                } else {
                    this.showDetail = true;
                    this.lastDetailId = this.hotelId;
                }
            }
        }
    }
</script>
