<script>
  import { base } from "$app/paths";
  import Step from "./Step.svelte";
  import PDFViewer from "./PDFViewer.svelte";
  import ImageViewer from "./ImageViewer.svelte";

  let steps = [
    {
      name: "SPH Media",
      image: `${base}/icons/sph_logo.jpeg`,
    },
    {
      name: "E-Speed Stabilizing Network Technology Pte. Ltd.",
      image: `${base}/icons/espeed_logo.png`,
    },
    {
      name: "Born in Colour",
      image: `${base}/icons/bic.png`,
    },
    {
      name: "Fullerton Health",
      image: `${base}/icons/fullerton.jpeg`,
    },
    {
      name: "Royal T Group Pte. Ltd.",
      image: `${base}/icons/liho.jpeg`,
    },
  ];
</script>

<svelte:head>
  <title>Internship</title>
</svelte:head>

<main class="flex flex-col flex-1 p-4">
  <!-- <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"> -->
  <section
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    id="projects"
  >
    <!-- Internship -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">
        Polytechnic / University
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">Internship</span> Experience
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">
      <Step step={steps[0]}>
        <p>
          <b style="color: var(--xpeach);">
            Data Viz Intern (Developer, Straits Times Digigraphics)
          </b>
          |
          <b style="color: var(--xblue);">Aug 2023 - Apr 2024 (8 months)</b>
        </p>

        <div id="internContent">
          <ul class="circle-bullet-list">
            <li>Developed interactive articles using Svelte</li>
            <li>
              Create collaterals using Adobe Illustrator and Adobe Photoshop
            </li>
            <li>
              Collaborative work with local and international developers and
              designers
            </li>
            <li>
              Collaborate with designers for UI design, pre-planning stage such
              as: research, ideation and content planning for mockups
            </li>
            <li>Publish and maintain weekly discover articles</li>
          </ul>
          <br />
          <b style="color: var(--xgreen);">Projects (not shown / no link):</b>
          <br />
          <p>
            <b style="color: var(--xblue);">Taylor Swift 2024</b> - Participated
            in pre-planning stage (Research, UI design, Content planning for mockup),
            Assisted in development of anagram game.
          </p>
          <br />
          <p>
            <b style="color:var(--xpurple);">Skills: </b> Svelte · Adobe Illustrator
            · Adobe XD · Adobe Photoshop · GitHub · UI Design · NodeJS · JavaScript
            · HTML5 · CSS · Microsoft Excel · Interpersonal Skills · Team Collaboration
          </p>
        </div>

        <!-- photogrid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="grid-item">
            <img
              src={`${base}/intern/arts-analysis.jpg`}
              alt="Arts Analysis"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.straitstimes.com/multimedia/graphics/2024/01/discover-art-georgette-chen/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover SG Art Link
              </a>
            </button>
            <br /><br />
            <p>
              Developed template for designers to adjust zoom levels, Tested
              with landscape, potrait and svg artworks.
            </p>
          </div>
          <div class="grid-item">
            <img src={`${base}/intern/food.jpg`} alt="Food in your hood" /><br
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://youtu.be/h2X7KYX63V0?si=TpTIYVaEzzyZ2IBA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food in your Hood Link
              </a>
            </button>
            <br /><br />
            <ul
              class="circle-bullet-list"
              style="width: 300px; margin-right:auto; margin-left:auto;"
            >
              <li>Assisted development works (from end Aug 2023)</li>
              <li>Styling (overall website)</li>
              <li>
                Create custom components (Image Slider, Food label, Custom
                buttons, Custom props to hide show content etc.)
              </li>
              <li>Spreadsheet database maintainence</li>
            </ul>
          </div>
          <div class="grid-item">
            <img
              src={`${base}/intern/superlative.jpg`}
              alt="Superlative Cartoons"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.straitstimes.com/multimedia/graphics/2023/12/superlative-singapore/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Superlative Cartoons Link
              </a>
            </button>
            <br /><br />
            <p>
              Development Works (Adjust current template to get desired context
              card)
            </p>
          </div>
          <div class="grid-item">
            <img
              src={`${base}/intern/arts-pick.jpg`}
              alt="Arts Calendar Events"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arts Calendar Events Link
              </a>
            </button>
            <br /><br />
            <p>Assisted with styling, UI enhancement, update of events</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/intern/cartoons.jpg`} alt="Cartoons" /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.straitstimes.com/multimedia/graphics/2023/12/cartoons-of-the-week-december-26/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cartoons Link
              </a>
            </button>
            <br /><br />
            <p><b style="color: var(--xpink);">Weekly Discover Task</b></p>
            <br />
            <p>
              Designed newsletter thumbnail using Adobe Illustrator and cover
              image using Adobe Photoshop, <br /><br />Assisted designers and
              artists with content input and deployment to publish on The
              Straits Times
            </p>
          </div>
          <div class="grid-item">
            <img src={`${base}/intern/wip.jpg`} alt="Week in Pictures" /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Week in Pictures Link
              </a>
            </button>
            <br /><br />
            <p><b style="color: var(--xpink);">Weekly Discover Task</b></p>
            <br />
            <p>
              Designed newsletter blurb using Adobe Illustrator, <br /><br />
              Assist journalists to update content and deployment to publish on Straits
              Times
            </p>
          </div>
        </div>
      </Step>
      <Step step={steps[1]}>
        <p>
          <b style="color: var(--xpeach);"> Software Developer Intern </b>
          |
          <b style="color: var(--xblue);">May 2022 - Aug 2022 (4 months)</b>
        </p>

        <div id="internContent">
          <ul class="circle-bullet-list">
            <li>
              C# asp.net mvc project (self-learn), includes Microsoft SQL Server
              Integration
            </li>
            <li>
              Project I was working on: <a
                href="https://studytrustintl.com/"
                target="_blank">https://studytrustintl.com/</a
              >
            </li>
          </ul>
          <br />
          <PDFViewer
            filePath={`${base}/testimonials/E-Speed.pdf#toolbar=0`}
            buttonText={"View Testimonial"}
          />
          <br /> <br />
          <p>
            <b style="color:var(--xpurple);">Skills: </b> C# · ASP.NET MVC · Microsoft
            SQL Server
          </p>
        </div>

        <!-- photogrid -->
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div class="grid-item">
            <img
              src={`${base}/intern/studytrust.jpeg`}
              alt="Study Trust"
              style="margin-right: auto; margin-left:auto;"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://studytrustintl.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Study Trust International Link
              </a>
            </button>
            <br /><br />
            <p>
              Assist in redevelopment of website in C# Asp.Net for easier
              maintenance.
            </p>
          </div>
        </div>
      </Step>
      <Step step={steps[2]}>
        <p>
          <b style="color: var(--xpeach);">
            Internet Marketing Intern + Part Time
          </b>
          |
          <b style="color: var(--xblue);">March 2020 - Sep 2020 (8 months)</b>
        </p>

        <div id="internContent">
          <ul class="circle-bullet-list">
            <li>Managed and maintained company's blog page</li>
            <li>Redesign company's website homepage</li>
            <li>Revamp store locator page</li>
            <li>
              Designed promotional posters in-store and online (e.g. featured on
              TV products)
            </li>
            <li>
              Did product photoshoot and generate new ideas for bundle sales
            </li>
            <li>Assisted online sales via chatbot and in-store sales</li>
            <li>
              Used company's third-party software to send electronic mail to
              store members (require HTML, CSS and PS knowledge)
            </li>
          </ul>
          <br />
          <b>Part Time:</b>
          <ul class="circle-bullet-list">
            <li>Managed company's blog page</li>
            <li>Assist online and in-store sales</li>
          </ul>
          <br />
          <ImageViewer
            imagePath={`${base}/testimonials/Bic-Testimonial.jpeg`}
            buttonText={"View Testimonial"}
          />
          <br /> <br />
          <p>
            <b style="color:var(--xpurple);">Skills: </b> Cascading Style Sheets
            (CSS) · HTML5 · Adobe Photoshop · JavaScript
          </p>
        </div>

        <!-- photogrid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="grid-item">
            <img
              src={`${base}/icons/bic.png`}
              alt="Born in Colour"
              style="margin-right: auto; margin-left:auto;"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.bornincolour.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home page Link
              </a>
            </button>
            <br /><br />
            <p>Revamp homepage</p>
          </div>
          <div class="grid-item">
            <img
              src={`${base}/intern/bic2.jpeg`}
              alt="Born in Colour"
              style="margin-right: auto; margin-left:auto;"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.bornincolour.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tips & Inspiration Blog Link
              </a>
            </button>
            <br /><br />
            <p><b>Highlight blogs:</b></p>
            <br />
            <ul class="circle-bullet-list">
              <li>
                Tired of working from home during the circuit breaker period in
                Singapore? Make your workspace more fun with the Macaron Family!
              </li>

              <li>All the korean blogs</li>

              <li>
                Designed new blog thumbnails and redesigned old blog thumbnails
              </li>

              <li>
                Propose using tags to categorise articles, link to collections
                and leverage korean media feature to attract younger audience.
                Designed offline posters to put in-store.
              </li>

              <li>SEO integration to improve Google search rankings</li>

              <li>Blog site maintanence and update</li>
            </ul>
          </div>
          <div class="grid-item">
            <img
              src={`${base}/intern/bic3.jpeg`}
              alt="Born in Colour"
              style="margin-right: auto; margin-left:auto;"
            /><br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style="width: fit-content; margin-right: auto; margin-left: auto;"
            >
              <a
                href="https://www.bornincolour.com/store-locator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Store Locator Link
              </a>
            </button>
            <br /><br />
            <p>Redesigned store locator page</p>
          </div>
        </div>
      </Step>
    </div>
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">Part Time</span> Jobs
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">
      <Step step={steps[3]}>
        <p>
          <b style="color: var(--xpeach);">
            Part Time Vaccination Administration
          </b>
          |
          <b style="color: var(--xblue);">March 2021 - Dec 2021 (10 months)</b>
        </p>

        <div id="internContent">
          <ul class="circle-bullet-list">
            <li>
              Administered registration for patients coming in for COVID-19
              vaccination
            </li>
            <li>Usher patients to their allocated vaccination booths</li>
          </ul>
          <br />
          <p>
            <b style="color:var(--xpurple);">Skills: </b> Data Entry · Administrative
            Assistance · Customer Service
          </p>
        </div>
      </Step>
      <Step step={steps[4]}>
        <p>
          <b style="color: var(--xpeach);"> Part Time Tearista @ LiHo </b>
          |
          <b style="color: var(--xblue);">Nov 2017 - Nov 2019 (2 years)</b>
        </p>

        <div id="internContent">
          <b>Responsibilities:</b>
          <ul class="circle-bullet-list">
            <li>Cashier</li>
            <li>Handle customers enquiries</li>
            <li>Maintain store's cleanliness</li>
            <li>Ensure that stocks are enough to last for the day</li>
            <li>Tally and report the sales of the day</li>
          </ul>
        </div>
      </Step>
    </div>
  </section>
</main>

<style>
  /* Your CSS styles */
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    margin-bottom: 10px;
    background-color: #4285f4;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    .button-container {
      flex-direction: row;
      justify-content: center;
    }

    .button {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  .pdf-preview {
    width: 100%;
    max-width: 100%;
    overflow: auto;
  }

  .pdf-preview iframe {
    width: 100%;
    height: 100%;
    min-height: 300px; /* Adjust as needed for minimum height */
  }

  .view-pdf-btn,
  .close-pdf-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .view-pdf-btn {
    background-color: #4285f4;
    color: white;
  }

  .close-pdf-btn {
    background-color: #ea4335;
    color: white;
    margin-top: 10px; /* Adjust margin to separate from PDF */
  }

  .close-pdf-btn:hover {
    background-color: #ff6659;
  }

  .project-thumbnail {
    display: flex; /* Use flexbox */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    margin-bottom: 20px; /* Add space between thumbnails */
    width: calc(70%); /* Adjust width of the thumbnail */
    margin-right: auto;
    margin-left: auto;
    max-width: 800px; /* Set maximum width for consistency */
    padding: 20px; /* Add padding for consistent sizing */
    border-radius: 10px; /* Round corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
  }

  .project-thumbnail img {
    width: 200px; /* Adjust width of the thumbnail image */
    margin-right: 40px; /* Add spacing between image and button */
  }

  /* For mobile responsiveness */
  @media screen and (max-width: 768px) {
    .project-thumbnail {
      flex-direction: column; /* Stack items vertically on smaller screens */
      align-items: center; /* Center items horizontally */
      width: calc(100% - 40px); /* Adjust width for mobile */
    }

    .project-thumbnail img {
      margin-right: 0; /* Remove right margin for better centering */
      margin-bottom: 10px; /* Add space between image and button in mobile view */
    }
  }

  #feature-head {
    text-align: left;
    padding-left: 50px;
    margin-bottom: 5px;
  }

  .circle-bullet-list {
    list-style-type: none;
    padding-left: 10px; /* Adjust the left padding for the unordered list */
    text-align: left;
  }

  .circle-bullet-list li::before {
    content: "\2022"; /* Unicode for bullet point character */
    color: white; /* Change bullet point color */
    font-weight: bold; /* Optional: make the bullet bold */
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  #internContent {
    max-width: 600px; /* Set the maximum width for the skills section */
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    #feature-head {
      padding-left: 0px;
    }
    .circle-bullet-list {
      padding-left: 0px;
    }
    #internContent {
      max-width: 100%; /* Full width for skills section on smaller screens */
      padding: 0 20px; /* Add padding for consistent sizing */
    }
  }
</style>
