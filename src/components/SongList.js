import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import NewSongForm from './NewSongForm';

// sfc
const SongList = () => {
	const [ songs, setSongs ] = useState([
		{ title: 'almost home', id: 1 },
		{ title: 'memory gospel', id: 2 },
		{ title: 'this wild darkness', id: 3 }
	]);

	const [ age, setAge ] = useState(20);

	const addSong = (title) => {
		setSongs([ ...songs, { title, id: uuid() } ]);
	};
	useEffect(
		() => {
			console.log('useEffectHook ran', songs);
		},
		[ songs ]
	);
	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => {
					return <li key={song.id}>{song.title}</li>;
				})}
			</ul>
			<NewSongForm addSong={addSong} />
			<button onClick={() => setAge(age + 1)}>Add 1 to age: {age} </button>
		</div>
	);
};

export default SongList;
