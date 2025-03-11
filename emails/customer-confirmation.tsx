import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const CustomerConfirmationEmail: React.FC<EmailTemplateProps> = ({
  firstName,
}) => (
  <div>
    <h1>Thank You for Contacting Us, {firstName}!</h1>
    <p>
      We have received your message and will get back to you as soon as
      possible.
    </p>
    <p>
      In the meantime, if you have any urgent questions, please don&apos;t
      hesitate to call us at (123) 345-6789.
    </p>
    <div>
      <p>Best regards,</p>
      <p>Your Painting Team</p>
    </div>
  </div>
);
