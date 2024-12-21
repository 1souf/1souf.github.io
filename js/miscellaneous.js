const changelogData = [
      {
        "date": "2024-??-??",
        "version": "v0.2",
        "details": [
          "shiii dont ask me"
        ]
      },
      {
        "date": "2024-22-12",
        "version": "v0.1",
        "details": [
          "-Added 'Sli'merre'",
          "-Added 'Narcissist'",
          "-Updated 'FIELD TRIP' from 'VULTURES 2'",
          "-Added 'Reggie' to 'Whole Lotta Red V1'",
          "-Updated home bar icons",
          "-Fixed long song titles or huge amount of features making the container bigger",
          "-Updated 'BELIEVER' from 'VULTURES 2'",
          "-Added 'Uber' to 'Die Lit'",
          "-Added Miscellaneous page",
          "-Added all albums under a dedicated folder instead of root"
        ]
      }
    ];

    // Function to render the changelog
    function renderChangelog(data) {
      const container = document.getElementById('changelog');
      data.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'changelog-entry';

        // Render details as multiple lines
        const detailsHtml = entry.details.map(line => `<p>${line}</p>`).join('');

        item.innerHTML = `
          <h3>${entry.version} - ${entry.date}</h3>
          ${detailsHtml}
        `;
        container.appendChild(item);
      });
    }

    renderChangelog(changelogData);