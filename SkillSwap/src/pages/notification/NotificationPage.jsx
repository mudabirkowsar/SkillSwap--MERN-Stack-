import React, { useState } from 'react';
import './NotificationPage.css';

const NotificationPage = () => {
    // Initial notifications state (you'd typically fetch this from an API)
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'success',
            icon: 'fas fa-check-circle',
            message: 'Your swap request with Priya for "UI Design" has been accepted!',
            timestamp: '2 hours ago',
            read: false,
        },
        {
            id: 2,
            type: 'info',
            icon: 'fas fa-info-circle',
            message: 'Ayaan just listed "Traditional Spanish Cooking" as an offered skill.',
            timestamp: '5 hours ago',
            read: false,
        },
        {
            id: 3,
            type: 'warning',
            icon: 'fas fa-exclamation-triangle',
            message: 'Your upcoming session with Sarah is in 30 minutes. Be ready!',
            timestamp: '1 day ago',
            read: true, // Example of an already read notification
        },
        {
            id: 4,
            type: 'success',
            icon: 'fas fa-star',
            message: 'You received a 5-star rating from Priya for "Guitar Lessons"!',
            timestamp: '2 days ago',
            read: true,
        },
        {
            id: 5,
            type: 'info',
            icon: 'fas fa-bell',
            message: 'There are new members in your "Web Development" skill group.',
            timestamp: '3 days ago',
            read: true,
        },
        {
            id: 6,
            type: 'error',
            icon: 'fas fa-times-circle',
            message: 'A swap request to John for "Yoga" expired without a response.',
            timestamp: '4 days ago',
            read: true,
        },
    ]);

    const handleDismiss = (id) => {
        setNotifications(notifications.filter(notif => notif.id !== id));
    };

    const handleMarkAllAsRead = () => {
        setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    };

    const unreadCount = notifications.filter(notif => !notif.read).length;

    return (
        <div className="notification-page-wrapper">
            <div className="notification-container">
                <h2 className="notification-page-title">Your Latest Notifications</h2>
                <p className="notification-page-description">
                    Stay updated on your skill swaps, new matches, and community activities.
                </p>

                <div className="notification-actions">
                    {unreadCount > 0 && (
                        <button onClick={handleMarkAllAsRead} className="mark-all-read-btn">
                            <i className="fas fa-eye"></i> Mark All as Read ({unreadCount})
                        </button>
                    )}
                    {notifications.length === 0 && (
                        <p className="no-notifications">You're all caught up! No new notifications.</p>
                    )}
                </div>

                <div className="notification-list">
                    {notifications.map(notification => (
                        <div key={notification.id} className={`notification-card ${notification.type} ${notification.read ? 'read' : ''}`}>
                            <div className="notification-icon-wrapper">
                                <i className={`notification-icon ${notification.icon}`}></i>
                            </div>
                            <div className="notification-content">
                                <p className="notification-message">{notification.message}</p>
                                <span className="notification-timestamp">{notification.timestamp}</span>
                            </div>
                            <button onClick={() => handleDismiss(notification.id)} className="dismiss-btn" aria-label="Dismiss notification">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;