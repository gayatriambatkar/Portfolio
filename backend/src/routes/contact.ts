import { Router, Request, Response } from 'express';
import Contact from '../models/Contact';

const router = Router();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!emailRegex.test(String(email))) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (String(message).length > 2000) {
    return res.status(400).json({ error: 'Message must be under 2000 characters.' });
  }

  try {
    const contact = await Contact.create({ name, email, message });
    return res.status(201).json({ success: true, id: contact._id });
  } catch (err) {
    console.error('Contact save error:', err);
    return res.status(500).json({ error: 'Failed to save your message. Please try again.' });
  }
});

export default router;
