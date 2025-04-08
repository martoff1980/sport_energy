setTimeout(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) throw new Error('Fetch failed');

        const data = await response.json();
        console.log('Дані з API:', data);
    } catch (err) {
        console.error('Помилка при fetch:', err);
    }
}, 2000);
