import React from 'react';

const FeedbackCard = ({ name, feedback }) => {
    return (
        <div className="feedback-card">
            <p>"{feedback}"</p>
            <p><strong>- {name}</strong></p>
        </div>
    );
};

export default FeedbackCard;
