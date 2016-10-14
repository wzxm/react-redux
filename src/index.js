import { createStore } from 'redux';

let store = createStore();



const Counter = ({ value }) => (
	<h1>{value}</h1>
);