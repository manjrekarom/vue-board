<template>
	<div class="datasource-modal">
		<modal name="datasource-modal"
			height="auto">
			<div class="header">
				<h2>Add Datasource</h2>
			</div>
			<div class="content">
				<form>
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" class="form-control" placeholder="Rpi21" v-model="datasourceParams.name">
					<small class="form-text text-muted">Name will identify a datasource uniquely</small>
				</div>
				<div class="form-group">
					<label for="uri">URI</label>
					<input type="text" class="form-control" placeholder="http://iot.e-yantra.com/pubsub/shadow/4" size="32" v-model="datasourceParams.uri">
				</div>
				<div class="form-group">
					<label for="options">Options</label>
					<input type="text" class="form-control" placeholder="{}" v-model="datasourceParams.options">
					<small class="form-text text-muted">Options object like headers, etc.</small>
				</div>

				<!-- <div id="editor" ref="jsoneditor"></div> --> 

				<div class="form-group">
					<label for="format">Data format</label><br/>
					<select v-model="datasourceParams.format">
						<option v-for="(format, idx) in formats" v-bind:key="idx" >
							{{format}}
						</option>
					</select> 
				</div>
				<div class="form-group">
					<label for="format">Update Type</label><br/>
					<select v-model="datasourceParams.type">
						<option v-for="(type, idx) in types" 
							:value="type"
							v-bind:key="idx">
							{{type}}
						</option>
					</select> 
				</div>
				<div class="form-group">
					<label for="isDeviceShadow">Is device shadow?</label>
					<input type="checkbox" v-model="datasourceParams.isDeviceShadow">
				</div>
				</form>
			</div>
			<div class="footer">
				<button type="submit" @click="save">Submit</button>
				<button type="close" @click="close">Close</button>
			</div>
		</modal>
	</div>
</template>

<script>
// TODO: 
// 1. JSON editor
// 2. Vee Validate
// 3. Style enhancements
// 4. Scroll if form too big

import {Datasource, Format, Type, DataFetcher} from '../../services/Data.js'
import JSONEditor from 'jsoneditor'
import Events from '../../services/Events.js'

export default {
	name: 'DatasourceModal',

	props: [],

	data () {
		return {
			formats: Format.formats,
			types: Type.types,
			datasourceParams: {
				name: '',
				uri: '',
				options: JSON.stringify({}),
				format: Format.formats[0],
				type: Type.types[0],
				isDeviceShadow: false
			},
			editor: {}
		}
	},

	// mounted () {
	// 	let that = this
	// 	console.log(that)
	// 	console.log(that.$refs.jsoneditor)
		
	// 	this.$nextTick(function () {
	// 		// Code that will run only after the
	// 		// entire view has been rendered
	// 		console.log(that.$refs.editor);

	// 		let editor = new JSONEditor(that.$refs.jsoneditor, {mode: 'tree'})
	// 		this.editor = editor
	// 		this.editor.set({})
  	// 	})
	// },

	methods: {
		resetFormFields () {
			this.datasourceParams = {
				name: '',
				uri: '',
				options: JSON.stringify({}),
				format: Format.formats[0],
				type: Type.types[0],
				isDeviceShadow: false
			}
		},

		save () {
			let datasource = new Datasource(this.datasourceParams.name,
											this.datasourceParams.uri,
											JSON.parse(this.datasourceParams.options),
											this.datasourceParams.format,
											this.datasourceParams.type,
											this.datasourceParams.isDeviceShadow)
			
			console.log(datasource)
			this.$bus.$emit(Events.ADD_DATASOURCE, datasource)
			
			this.$modal.hide('datasource-modal')
			this.resetFormFields();
		},

		close () {
			this.$modal.hide('datasource-modal')
		}
	}
}
</script>

<style>
	.header {
		padding-left: 1rem;
	}

	.footer {
		padding: 0em 2em 2em 2em;
		display: flex;
		justify-content: flex-end;
	}
	
	.footer button {
		margin: 0em 0em 0em 1em;
	}

	.content {
		padding: 0em 1em 1em 1em;
	}

	.form-control {
		display: block;
	}

	.form-group {
		padding: 5px 0px 5px 0px;
	}

	form label {
		font-weight: 600;
	}
</style>
