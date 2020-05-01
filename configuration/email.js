/**
 * Sending emails
 * @module configuration/email
 */

const sgMail = require('@sendgrid/mail');

/**
 * @function sendingEmails
 * @param {string} email - user email
 * @param {string} username - user username
 * @param {string} token - verification token
 */
module.exports = (email, username, token) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: process.env.FROM,
    to: email,
    subject: 'Welcome to our movie app community',
    html: `
      <p>Hello ${username}!</p>

      <p>We're glad you've joined our movie app</p>

      <p>Verify you account</p>

      <button><a href='http://localhost:${process.env.PORT}/auth/verify?token=${token}'>Click here</a></button>
    `,
  };

  sgMail.send(msg);
};
