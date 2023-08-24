import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yyaujssetcsuuypmkvjv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YXVqc3NldGNzdXV5cG1rdmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3OTE2NzAsImV4cCI6MjAwODM2NzY3MH0.rb_4BzBn2LT1UhEDhXkrR047dIEOJ-tI2O6CGqI1zLI';
const supabase = createClient(supabaseUrl, supabaseKey);

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('contacts').insert([
        { name, email, message },
      ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitted}>
          {submitted ? 'Submitted' : 'Submit'}
        </button>
        {submitted && <p>Thank you for your submission!</p>}
      </form>
    </div>
  );
}

export default ContactForm;

