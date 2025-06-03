import { Request, Response} from 'express';
import { pool } from '../services/db';

export const getContact = async ( req: Request, res: Response) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query('SELECT id, first_name, last_name, phone, role FROM contact');
        conn.release();
        const formattedRows = rows.map(( contact: any) => ({
            ...contact,
            id: Number(contact.id)
        }));
        res.json(formattedRows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Error database'});
    }
}