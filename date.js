function formatDate() {
    const currentDate = new Date();
    const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'short' });



    const options = { month: 'short', day: 'numeric', year: 'numeric' };




    const formattedDate = currentDate.toLocaleDateString('en-US', options)





    document.getElementById('weekday').innerText = weekday;


    document.getElementById('fullDate').innerText = formattedDate;
}
window.onload = formatDate;