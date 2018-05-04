import Vue from 'vue'
import moment from 'moment'

// refister filter below

// if the data is empty
/**
*  {{value | filter-empty}}
*/
Vue.filter('filter-empty',function(value){
	return (value || value === 0) ? value : '-';
})