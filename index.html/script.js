document.addEventListener('DOMContentLoaded', () => {
    const members = ['Fahad Al-Ghamdi - 441007427', 'Muhammad Al-Khudari Al-Atwi - 411002097', 'Fahad Al Ruwaithi - 421004075', ];
    const membersList = document.getElementById('members-list');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(members);

    members.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        membersList.appendChild(li);
    });
});
