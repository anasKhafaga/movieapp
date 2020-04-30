const sgMail = require('@sendgrid/mail');

module.exports = (email, username, token) => { 

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: 'Welcome to our movie app community',
    html: `
      <p>Hello ${username}!</p>

      <p>We're glad you've joined our movie app</p>

      <p>Verify you account</p>

      <button><a href='http://localhost:${process.env.PORT}/verify?token=${token}'>Click here</button>
    `
  }
  
  sgMail.send(msg);
  
};