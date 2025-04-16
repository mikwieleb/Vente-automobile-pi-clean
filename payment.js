document.getElementById("payButton").addEventListener("click", async function () {
  try {
    const response = await fetch('https://pi-network-api.example.com/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 0.01 }), // 0.01 Pi
    });

    const data = await response.json();
    if (data.success) {
      alert('Paiement effectué avec succès !');
    } else {
      alert('Le paiement a échoué.');
    }
  } catch (error) {
    console.error('Erreur de paiement:', error);
    alert('Erreur lors du paiement.');
  }
});