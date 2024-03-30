const generateEmailTemplate = (name,link) => {
  return `
Dear ${name},

We have received a request to reset your password for your krowd's account. To proceed, please follow these simple steps:

Click on the link below to reset your password:

${link}

(Note: This link is time-sensitive, so please use it promptly.)

Once you click the link, you will be directed to a secure page where you can create a new password for your account.

After creating your new password, return to our login page to access your account.

If you did not initiate this password reset request, please disregard this email. Your account security is important to us, and we recommend changing your password regularly for added protection.
`;
};

module.exports = generateEmailTemplate;
