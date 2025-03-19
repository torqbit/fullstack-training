import React from "react";

interface NotificationProps {
  message: string;
  duration?: number;
  onDismiss: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  duration = 3000, // Default duration: 3000ms
  onDismiss,
}) => {
  return (
    <div className='notification'>
      <div className='notification-content'></div>
    </div>
  );
};

export default Notification;
