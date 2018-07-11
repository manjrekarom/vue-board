<template>
	<div class="datasource-modal">
		<modal name="datasource-modal"
			height="auto">
			<div class="header">
				<h3>Add Datasource</h3>
			</div>
			<div class="content">
				<form>
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" class="form-control" placeholder="Rpi21">
					<small class="form-text text-muted">Name will identify a datasource uniquely</small>
				</div>
				<div class="form-group">
					<label for="uri">URI</label>
					<input type="text" class="form-control" placeholder="http://iot.e-yantra.com/pubsub/shadow/4">
				</div>
				<div class="form-group">
					<label for="options">Options</label>
					<input type="text" class="form-control" placeholder="{}">
					<small class="form-text text-muted">Options object like headers, etc.</small>
				</div>
				<div class="form-group">
					<label for="format">format</label>
					<select>
						<option v-for="Format.formats"
					</select> 
					<input type="text" class="form-control" placeholder="http://iot.e-yantra.com/pubsub/shadow/4">
				</div>
				<div class="form-group">
					<label for="type">URI</label>
					<input type="text" class="form-control" placeholder="http://iot.e-yantra.com/pubsub/shadow/4">
				</div>
				</form>
			</div>
			<div class="footer">
				<button type="submit" class="btn btn-primary">Submit</button>
				<button type="close">Close</button>
			</div>
		</modal>
	</div>
</template>

<script>
export default {
	name: 'DatasourceModal',

	props: [],

	data () {
		return {

		}
	},

	methods: {

	}
}
</script>

<style>
	.content {
		padding: 0em 1em 1em 1em;
	}

	.form-control {
		display: block;
	}

	.form-group {
		padding: 5px 0px 5px 0px;
	}

	.header {
		padding-left: 1rem;
	}

	.footer {
		padding: 1em;
		display: flex;
		justify-content: flex-end;
	}

</style>
