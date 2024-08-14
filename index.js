$('.join-form').on('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Create an empty object to hold form data
    let formData = {};

    // Create a new FormData object from the form
    let form = new FormData(this);

    // Loop through each form element and add its value to formData
    form.forEach(function (value, key) {
        formData[key] = value;
    });

    // Convert formData object to JSON string
    let jsonData = JSON.stringify(formData);
    $(".json-result").html(`<pre>${jsonData}</pre>`);
    console.log(jsonData); // You can send this JSON data to a server or use it as needed

    // Example of sending JSON data to a server using fetch
    /*
    fetch('/your-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    */
    $.each(formData, function (key, value) {
        $(".text-area").append("<p>" + key + ": " + JSON.stringify(value) + "</p>")
    });
});

$("#file").change(function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            $(".image-area").html(`<img src="${e.target.result}" alt="Image Preview">`);
        }
        reader.readAsDataURL(file);
    } else {
        $(".image-area").html("No image chosen");
    }
});
