import React from "react"
import EcwidEmbed from './EcwidEmbed'
import emailjs from "emailjs-com";

// This class is for the Ecwid bundles
class BookBundle extends React.Component {

  componentDidUpdate() {
      if (location.href.includes("orderConfirmation")) {
          const parsedOrderJson = JSON.parse(
            localStorage.PSecwid__36360190PSorderResult
          );

          const templateParams = {
            student_name: "James",
            student_email: localStorage.PSecwid__36360190__emailPSemail,
            lesson_type: parsedOrderJson.confirmation.order.items[0].name,
          };

          emailjs
            .send(
              "1",
              "template_y0d8gte",
              templateParams,
              "user_VYyDcgnaKt0dTzugOtrrw"
            )
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );

            document.querySelector(".thank-you-message").innerHTML = "Thank you for your purchase! You will be redirected to the scheduling page in 10 seconds...";
            document.querySelector(".thank-you-message").style.display = "block";
            
            setTimeout(() => {
                window.location.href =
                  "https://www.talirecorderlessons.com/book-bundle-lesson";
                setTimeout(() => {
                    window.location.reload();
                }, 200); 
            }, 10000)


      }
  }

  render() {
    return (
      <>
        <h2 style={{ padding: "5rem", display: "none"}} className="thank-you-message"></h2>
        <EcwidEmbed />
      </>
    );
  }
}

export default BookBundle;