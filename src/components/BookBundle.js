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

            document.querySelector(".thank-you-message").href = "https://www.talirecorderlessons.com/book-bundle-lesson"
            document.querySelector(".thank-you-message").innerHTML = "Thank you for your purchase! Click here to go to the scheduling page";
            document.querySelector(".thank-you-message").style.display = "block";
            
            // setTimeout(() => {
            //     window.location.href =
            //       "https://www.talirecorderlessons.com/book-bundle-lesson";
            //     setTimeout(() => {
            //         window.location.reload();
            //     }, 200); 
            // }, 10000)


      }
  }

  render() {
    return (
      <>
        <a style={{ padding: "5rem", display: "none", fontSize: "2rem"}} className="thank-you-message"></a>
        <EcwidEmbed />
      </>
    );
  }
}

export default BookBundle;