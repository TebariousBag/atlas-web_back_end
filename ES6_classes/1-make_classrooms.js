import ClassRoom from './0-classroom.js';

// export function instead of class
export default function initializeRooms () {
	return [
	new ClassRoom(19),
	new ClassRoom(20),
	new ClassRoom(24),
	];
}
