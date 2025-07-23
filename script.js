
        // Simulate real-time updates
        function updateCurrentTime() {
            const timeElement = document.getElementById('currentTime');
            let seconds = 1395; // 23:15
            
            setInterval(() => {
                seconds++;
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;
                
                timeElement.textContent = 
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }, 1000);
        }

        function showTab(tabName) {
            // Hide all tabs
            const tabs = document.querySelectorAll('.dashboard-content');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
        }

        function openDashboard() {
            // In a real extension, this would open the dashboard in a new tab
            alert('Dashboard would open in a new tab in the actual Chrome extension!');
        }

        function toggleTracking() {
            const button = event.target;
            if (button.textContent.includes('Pause')) {
                button.textContent = '▶ Resume';
                button.style.background = '#27ae60';
            } else {
                button.textContent = '⏸ Pause';
                button.style.background = '#6c757d';
            }
        }

        // Start the timer
        updateCurrentTime();

        // Add some interactive animations
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });

        // Simulate productivity score animation
        setTimeout(() => {
            const productivityFill = document.querySelector('.productivity-fill');
            productivityFill.style.width = '72%';
        }, 1000);
    