import React from 'react';

function Contact() {
  function add_do(e:any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const updated_time = new Date().toLocaleString();
    const created_time = new Date().toLocaleString();

    const newMessage = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      updated_time: updated_time,
      created_time: created_time
    };

    fetch('http://127.0.0.1:8000/website/api/contact/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success response
    }).catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <>
      <form onSubmit={add_do} className="flex flex-col gap-5 max-w-xl bg-blue-600 rounded-md p-8 mx-auto">
        <input type="text" name="name" placeholder="Name" className="p-2 bg-slate-600 outline-none rounded-md" />
        <input type="text" name="email" placeholder="Email" className="p-2 bg-slate-600 outline-none rounded-md" />
        <input type="text" name="subject" placeholder="Subject" className="p-2 bg-slate-600 outline-none rounded-md" />
        <input type="text" name="message" placeholder="Message" className="p-2 bg-slate-600 outline-none rounded-md" />
        <button type="submit" className="p-2 bg-slate-900 text-slate-100 rounded-md">Send Message</button>
      </form>
    </>
  );
}

export default Contact;