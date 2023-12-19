import supabase from "../configs/dbConfig.js"

const getUsers = async () => {
	try {
			const { data, error } = await supabase
			.from('Users')
			.select(`name, email, phone,  
				Department ( name ),
				Position ( name )
				`);

			if (error) {
				console.log(error);
			}

			return data;
	} catch (e) {
			throw e
	}
}

const getPositions = async () => {
	try {	
		console.log('work')
			const { data, error } = await supabase
			.from('Position')
			.select(`name, total_places, vacant_places`);

			if (error) {
				console.log(error);
			}

			return data;
	} catch (e) {
			throw e
	}
}


export default {
	getUsers, 
	getPositions,
}