      // using d3 for convenience
      var main = document.querySelector("main");
      var scrolly = main.querySelector("#scrolly");
      var sticky = scrolly.querySelector(".sticky-thing");
      var article = scrolly.querySelector("article");
      var steps = article.querySelectorAll(".step");

      // initialize the scrollama
      var scroller = scrollama();

      // scrollama event handlers
      function handleStepEnter(response) {
        // response = { element, direction, index }
        var el = response.element;

        // remove is-active from all steps
        // then add is-active to this step
        steps.forEach(step => step.classList.remove('is-active'));
        el.classList.add('is-active');

        // update graphic based on step
        document.getElementById("stickyImage").src=`images/image${el.dataset.step}.svg`;
      }

      function init() {
        scroller
          .setup({
            step: "#scrolly article .step",
            offset: 0.33,
            // debug: true
          })
          .onStepEnter(handleStepEnter);

        // setup resize event
        window.addEventListener("resize", scroller.resize);
      }

      // kick things off
      init();



      $(document).ready(
              function() {
                  $(".tooltip").click(function() {
                      $(".tooltipTexy").toggle();
                  });
              });
      
