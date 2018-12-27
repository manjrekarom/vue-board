<template>
	<div id="app">
		<vue-board
			:editMode="true" 
			:datasources="datasources"
			:layout="layout">
			<vue-widget-container
				v-for="(item, index) in layout" 
				:key="index" 
				v-bind="item">
				<vue-widget 
					:type="'line'"
					:name="datasources[0].name"
					:datasource="datasources[0]"
					:field="'device13.39'"/>
			</vue-widget-container>
		</vue-board>
	</div>
</template>

<script>
import VueBoard from './components/VueBoard'
import VueWidgetContainer from './components/VueWidgetContainer'
import VueWidget from './components/VueWidget'
import { Datasource, Format, Type } from './services/Data';

export default {
	name: 'App',

	components: {
		VueBoard,
		VueWidgetContainer,
		VueWidget
	},

	data () {
		return {
			layout: [],
			widget: [],
			datasources: []
		}
	},

	created () {
		let options = {
			headers: {
				'Authorization': '4f2552bf-c158-410d-a7d6-f6141ce9abf5'
			},
			timeout: 2000
		}

		let datasource = new Datasource('Thing 10',
										'http://localhost:8002/pubsub/shadow/10',
										options,								
										Format.JSON,
										Type.INTERVAL,
										true)
		this.datasources.push(datasource)
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
