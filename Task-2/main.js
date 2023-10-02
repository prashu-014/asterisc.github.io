

// count down logic starts
let countDownDate = new Date("Oct 20, 2023 00:00:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // insert count down to html elemeent
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    // how to join
    document.getElementById("hourss").innerHTML = hours;
    document.getElementById("minutess").innerHTML = minutes;
    document.getElementById("secondss").innerHTML = seconds;


    // live webinar count down
    document.getElementById("card-mins").innerHTML = minutes;
    document.getElementById("card-secs").innerHTML = seconds;

}, 1000);
// count down logic ends



//form validation starts
$('#submit').click(function () {

    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let email = $("#email").val();

    if (fname == '' || lname == '' || email == '') {
        // error page display
        Swal.fire({
            title: 'Fields Empty!',
            text: 'Please check the missing field',
            icon: 'warning',
            button: 'ok'
        });

    } else {

        // thank page disply
        Swal.fire({
            title: 'Thanks for Registering!',
            // text: 'Please check the missing field',
            icon: 'success',
            button: 'ok'
        });


        // All input field clear
        $("#fname").val('');
        $("#lname").val('');
        $("#email").val('');
        $("input[name='flexRadioDefault']:checked").prop("checked", false);


        //   hide the modal
        $('#exampleModal').modal('hide');

    }
});
//form validation starts



// card display on window load
let modal_popup = document.querySelector('.card');

window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            modal_popup.style.display = "block";
        },
        1000
    )
});


// close card 
document.getElementById('close').addEventListener('click', function () {
    modal_popup.style.display = "none";
});



// loader logic
let spinnerWrapper = document.querySelector('.spinner-wrapper');

setTimeout(() => {
    spinnerWrapper.style.display = 'none';
  
},1000);






    
