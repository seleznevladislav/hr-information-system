import e from 'express';
import supabase from '../configs/dbConfig.js';

const getUsers = async () => {
    try {
        const { data, error } = await supabase.from('Users').select(`id, name, email, phone, position_id, 
				Department ( name, id ),
				Position ( name, id )
				`);

        if (error) {
            console.log(error);
        }

        return data;
    } catch (e) {
        throw e;
    }
};

const getPositions = async () => {
    try {
        const { data, error } = await supabase.from('Position').select(`id, name, department_id, total_places, vacant_places`);

        if (error) {
            console.log(error);
        }

        return data;
    } catch (e) {
        throw e;
    }
};

const createUser = async (req) => {
    const request = req.body;

    try {
        const { data: Position, error } = await supabase.from('Position').select('department_id').eq('id', request.position_id);

        if (error) {
            console.log(error);
        }

        const { data: User, error: userError } = await supabase
            .from('Users')
            .insert([
                {
                    name: request.name,
                    email: request.email,
                    phone: request.phone,
                    position_id: request.position_id,
                    department_id: Position[0].department_id,
                },
            ])
            .select();

        if (userError) {
            console.log(userError);
        }

        return User;
    } catch (error) {
        throw error;
    }
};

const uploadFile = async (req) => {
    try {
        const { error } = await supabase.from('Documents').insert([
            {
                name: req.file.originalname,
                path: req.file.path,
                user_id: req.body.user_id,
            },
        ]);

        if (error) {
            console.log(error);
        }

        return true;
    } catch (e) {
        throw e;
    }
};

const getDocuments = async (req) => {
    const filterQuery = req.query.filter;
    const userId = Number(filterQuery.match(/\d+/gm)[0]);

    try {
        const { data, error } = await supabase.from('Documents').select('*').eq('user_id', userId);

        if (error) {
            console.log(error);
        }

        return data;
    } catch (e) {
        throw e;
    }
};

const updateUser = async (req) => {
    try {
        const { data: Position, positionError } = await supabase.from('Position').select('department_id').eq('id', req.body.position_id);

        if (positionError) {
            console.log(positionError);
        }

        req.body.department_id = Position[0].department_id;

        const { error } = await supabase
            .from('Users')
            .update({ ...req.body })
            .eq('id', req.body.id);

        if (error) {
            console.log(error);
        }

        return true;
    } catch (e) {
        throw e;
    }
};

const validateLogin = async (req) => {
    try {
        const { data, error } = await supabase.from('Roles').select('*').eq('username', req.body.username).eq('password', req.body.password);

        if (error) {
            console.log(error);
        }

        return data;
    } catch (e) {
        throw e;
    }
};

export default {
    getUsers,
    getPositions,
    createUser,
    uploadFile,
    getDocuments,
    updateUser,
    validateLogin,
};
