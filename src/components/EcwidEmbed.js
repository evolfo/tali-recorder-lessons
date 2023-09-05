import React, { useRef, useEffect } from "react";
import { Grid, GridRow, Header, Container } from "semantic-ui-react";

function EcwidEmbed(props) {
  const storeDiv = useRef(null);
  const scriptRef = useRef(null);

  window.localStorage.setItem("show_ecwid_logs", "true");
  window.ecwid_script_defer = true;
  window.ecwid_dynamic_widgets = true;
  window.ec = window.ec || Object();
  window.ec.storefront = window.ec.storefront || Object();
  window.ec.enable_catalog_on_one_page = true;
  window._xnext_initialization_scripts = [
    {
      widgetType: "ProductBrowser",
      id: "my-store-36360190",
      arg: ["id=productBrowser", "views=grid(20,3)"],
    },
  ];

  let script = document.createElement("script");
  script.charset = "utf-8";
  script.type = "text/javascript";
  script.src =
    "https://app.ecwid.com/script.js?36360190&data_platform=code&data_date=2020-09-06";
  script.defer = true;
  script.ref = scriptRef;

  useEffect(() => {
    if (!scriptRef.current && storeDiv.current) {
      storeDiv.current.appendChild(script);
    }
  });

  return (
    <>
      <Container id="lesson-bundles" className="bundle-container">
        <Header>Lesson Bundles</Header>
        <p>Get 5% off 5 lessons, 7% off 10 lessons, or 10% off 20 lessons by choosing one of the options below.<br />
        (The prices listed are for 5-lesson bundles, click on a box for more options)</p>
        <Grid ref={storeDiv} id="my-store-36360190">
          <GridRow columns={2}>
            <div className="booking-container"></div>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
}

export default EcwidEmbed;
