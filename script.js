        function openModal() {
            document.getElementById('orderModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('orderModal').style.display = 'none';
        }

        function submitOrder() {
            const name = document.getElementById('customerName').value;
            const item = document.getElementById('menuItem').value;

            if (name && item) {
                alert(`Thank you, ${name}! Your order for ${item} has been received.`);
                closeModal();
            } else {
                alert('Please enter your name and select an item.');
            }
        }