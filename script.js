window.onload = function () {
    loadMeetings();
};

function loadMeetings() {
    fetch('get_meetings.php')
        .then(response => response.json())
        .then(data => {
            const container = document.createElement('div');
            container.innerHTML = "<h2>My Meetings</h2>";
            data.forEach(meeting => {
                const div = document.createElement('div');
                div.style.border = "1px solid #ccc";
                div.style.padding = "10px";
                div.style.margin = "10px 0";
                div.innerHTML = `
                    <strong>${meeting.title}</strong><br>
                    ${meeting.meeting_date} at ${meeting.meeting_time}<br>
                    <em>${meeting.description}</em><br>
                    <b>Participants:</b> ${meeting.participants.join(', ')}
                `;
                container.appendChild(div);
            });

            document.body.appendChild(container);
        })
        .catch(error => {
            console.error("Error loading meetings:", error);
        });
}
