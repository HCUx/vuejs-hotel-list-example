import Hotel from './components/Hotel.vue';
import HotelDetail from './components/HotelDetail.vue';

export const routes = [
	{path: '/', component: Hotel, name: 'mainpage'},
	{path: '/:id', component: HotelDetail, name: 'hoteldetail'},
	{path: '*', redirect: '/' }
];
