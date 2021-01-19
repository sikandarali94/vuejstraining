const app = Vue.createApp({
	data() {
		return {
			/* With interpolation we can even output an array or an object for example. It is quite flexible. */
			courseGoal: 'Finish the course and learn Vue!'
		};
	}
});

app.mount('#user-goal');