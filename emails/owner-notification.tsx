import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const OwnerNotificationEmail: React.FC<EmailTemplateProps> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <div style={{ marginTop: "20px" }}>
      <p>
        <strong>From:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Message:</strong>
        </p>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
  </div>
);
