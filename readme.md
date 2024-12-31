# **PROJECT 2: HTML, CSS and JAVASCRIPT: DEE J PRO** 
Website URL: [DEE J PRO: The Virtual DJ Mixer GitHub Repository](https://allaboutdee.github.io/Project2/v2index.html)

## **Site Overview**
Welcome to **DEE J PRO** – DEE J PRO was created with a vision to bring the power of professional DJ equipment to everyone, right from their devices. Combining cutting-edge technology with user-friendly design, our platform is crafted to make music creation and performance more accessible and enjoyable than ever before. 

What We Offer:
Interactive Virtual DJ Platform: Mix, loop, and scratch like a pro using our state-of-the-art tools.
Dynamic Waveform Display: Visualize your tracks in real-time for precise control and seamless transitions (work in progress).
Customizable Features: Tailor your setup to suit your unique style and preferences.
Educational Resources: Tutorials, guides, and tips to help you master the art of DJing (work in progress).

![Am I responsive screenshot](assets/images/Desktop%20View.jpg)
![Am I responsive screenshot](assets/images/Laptop%20View.jpg)
![Am I responsive screenshot](assets/images/iPad%20Pro%20View.jpg)

DEE J PRO is a complex design made to emulate a real-life DJ setup. Due to its many functions and features, this is not suitable for smaller screens. It can be viewed responsively on some iPads and is generally optimal for laptop and desktop screens. In the near future, a more basic virtual DJ version will be designed for smaller screens.

## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***How Will This Be Achieved:***](#how-this-will-be-achieved)
    * [***Wireframes***](#wireframes)
    * [***Color Scheme***](#color-scheme)
    * [***Technology Used***](#Technology-Used)
    * [***Languages Used***](#Languages-Used)
    * [***Frameworks, Libraries & Programs Used***](#Frameworks,-Libraries-&-Programs-Used)
1. [**Current Features Common to all pages**](#current-features-common-to-all-pages)
    * [***Header Element:***](#header-element)
        * [*Title*](#title)
        * [*Logo*](#logo)
        * [*Navigation Bar*](#navigation-bar)
        * [*Design*](#Design)    
    * [**Footer**](#footer)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
        * [*Testing*](#Testing)
        * [*Testing User Stories from User Experience (UX) Section*](#Testing-User-Stories-from-User-Experience-(UX)-Section)        
        * [*Further Testing*](#Further-Testing)
1. [**Accessibility**](#Accessibility)
1. [**Known Bugs**](#Known-Bugs)
1. [**PLanned Fixes**](#Planned-Fixes)
1. [**Deployment**](#deployment)
1. [**Credits**](#credits)
    * [**Honourable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
    * [**Media**](#media)

---
### **Planning stage:**

* The planning phase involved:

* Researching existing virtual DJ platforms to identify gaps and opportunities.

* Sketching initial ideas for layout and functionality.

* Prioritizing a responsive design suitable for laptops and desktops.

* Mapping out features such as waveform visualization, customizable interfaces, and real-time audio controls.

### **Target Audiences:**

* Aspiring DJs: Individuals who want to learn and practice DJing without investing in expensive equipment.

* Professional DJs: Experienced performers looking for a portable and convenient solution for mixing on-the-go.

* Music Enthusiasts: Casual users curious about DJing and music creation.

* Educators and Students: Teachers and learners exploring music production and performance tools.

* Event Organizers: Those who require a simple yet powerful tool to manage and play music for events.

* Budget-Conscious Users: Anyone looking for an affordable alternative to costly DJ gear.

### **User Stories:**

* As an aspiring DJ, I want to learn the basics of DJing through tutorials and guides.

* As a professional DJ, I want advanced features to perform seamlessly.

* As a music enthusiast, I want an easy-to-use interface to experiment with mixing music.

* As an educator, I want a platform to teach students the fundamentals of DJing.

* As an event organizer, I want a reliable platform to curate and mix music during events.

* As a budget-conscious user, I want access to professional-grade tools without the high costs of physical DJ equipment.


### **Site Aims:**

* Provide an interactive, professional-grade virtual DJ experience.

* Make DJing accessible to users of varying skill levels.

* Create an educational hub for learning the essentials of DJing.

* Offer a cost-effective alternative to physical DJ equipment.

### **How Will This Be Achieved:**

* Implementing a robust and responsive user interface.

* Leveraging advanced technologies for real-time audio processing and visualization.

* Designing tutorials and guides for skill development.

### **Wireframes:**

The wireframe for the project was meticulously designed using an Excel sheet. Given the numerous functions and compartments of the DJ interface, this approach was essential for organizing and labeling sections efficiently. It significantly streamlined the process of structuring and writing the HTML code for the interface. The wireframe illustrates a DJ setup with various functions and features, logically divided into distinct containers for clarity and usability.

![Initial wireframe]()
![Final wirefrrame]()
Key Elements of the Wireframe

The interface comprises two decks and a mixer section, labeled "Deck A," "Deck B," and "Mixer." These sections provide an array of features that enhance the user's DJing experience, including the ability to upload and manage individual audio tracks. Users can create seamless transitions, mix tracks, and apply manual and auto loops. Additional functionality includes tempo, volume, and speed adjustments, frequency filtering, and blending tracks effortlessly. The spinning jog wheels deliver a lifelike DJing experience.

Key Features

1. Dual Decks (Deck A and Deck B). Each deck includes:
        * Pitch Control
        * FX Controls
        * Touch Strip
        * Beats and Tap Timing
        * Tempo Fader
        * Jog Wheel
        * Performance Pads with options for:
                * Manual Loop
                * Auto Loop
                * Speed Adjustments (x0.5, x2)
                * Samplers
                * Cues (Cue 1-4)
        * Control Buttons:
                * Sync
                * Cue
                * Play/Pause

2. *Mixer Section* The mixer section offers:
        * Equalizer Controls (Bass, Mid, Treble)
        * Master Gain Control
        * High-Pass and Low-Pass Filters
        * Headphone and Microphone Integration
        * Recording Functions (Record, Save Mix, Play Mix)
        * Channel Volume Adjustments
        * Crossfader for blending audio between decks
        * Audio Management (Track Selection and Uploading)

3. *Waveform Display* A dynamic waveform display provides real-time visual feedback of the tracks being played, aiding precision mixing.

4.*Music and Sampler Display* The music and sampler display enhances the user experience by providing a clear overview of the loaded tracks and sampler content.

In summary, the wireframe demonstrates a comprehensive DJ interface that effectively balances advanced functionality with intuitive design. This ensures users can enjoy an immersive and seamless DJing experience, whether they are beginners or professionals.



Drafts for the mobile view were sketched manually:  
![Mobile Drafts](assets/images/)


Finalized designs were displayed across various screen sizes using the Am I Responsive tool:  
![Responsive Views](assets/images/)
 ![alt text](assets/images/) ![alt text](assets/images/)
 ![Gallery](assets/images/)
 ![Signup](assets/images/)

**Technical Implementation**

*Frontend*

The frontend of DEE J PRO is built using HTML, CSS, and JavaScript. A grid-based layout is implemented to organize the various components, ensuring a responsive and intuitive user experience across different devices. Custom CSS animations and transitions are used to enhance the interactivity and visual appeal of the interface. The layout is optimized for larger screens, such as desktops and laptops, as the interface includes intricate controls and features that benefit from ample screen space.

*Audio Handling*

DEE J PRO leverages the Web Audio API for advanced audio processing, offering users precise control over audio playback, mixing, and effects. The integration of the WaveSurfer.js library provides dynamic and interactive audio waveform visualizations, allowing users to see real-time track progress and make accurate adjustments. This combination enables seamless audio manipulation, including looping, filtering, tempo adjustments, and track synchronization, ensuring a professional-grade DJing experience.

**Key Features of the Implementation**

*Dynamic Audio Controls:*
                * Supports uploading individual audio tracks to Deck A and Deck B.
                * Provides features such as pitch adjustments, tempo control, and looping.

*Responsive Design:*
                * Utilizes a grid-based layout for logical compartmentalization of the DJ interface, ensuring intuitive navigation.
                * Optimized for laptops and desktops, with plans for a simplified mobile-friendly version in the future.

*Interactive Visualizations:*
                *WaveSurfer.js integration enables real-time waveform rendering, helping users identify beat drops and transitions visually.

*Customizability:*
                * Users can switch between light and dark themes and customize the colors of Deck A, Deck B, and the Mixer section for a personalized experience.

By combining cutting-edge web technologies with user-centered design principles, DEE J PRO delivers a feature-rich, accessible, and immersive DJing platform for users of all skill levels.

**How to Use**

Using DEE J PRO is straightforward and designed for users of all skill levels. Follow the steps below to get started:

    *   1. Upload Your Tracks:
            * Begin by selecting and uploading audio tracks to "Deck A" and "Deck B" using the "Load Deck" function in the Mixer section. This allows you to prepare two tracks for mixing.
    *   2. Play and Pause Tracks:
            * Use the clearly labeled "Play/Pause" buttons on each deck to start or stop playback.
    *   3. Mix and Transition:
            * Utilize the crossfader located in the Mixer section to seamlessly transition between Deck A and Deck B. Slide it left or right to control the blend of audio between the two decks.
    *   4. Adjust Audio Settings:
            * Fine-tune your mix using the volume sliders, equalizer controls (Bass, Mid, Treble), and master gain settings in the Mixer section.
    *   5. Add Effects and Loops:
            * Experiment with the performance pads on each deck to create manual or auto loops, adjust track speed (x0.5 or x2), and activate samplers or cue points (Cue 1-4).
            * Use the FX controls and touchstrip to apply effects and modulate parameters in real time.
    *   6. Modify Tempo and Pitch:
            * Adjust playback tempo using the tempo fader or make pitch adjustments with the pitch nudge controls (+/-) on each deck.
    *   7. Customize Your Interface:
            * Switch between light and dark themes or customize the background colors of Deck A, Deck B, and the Mixer section to suit your preferences.
    *   8. Record and Save Your Mix:
        * Use the "Record" button in the Mixer section to capture your live mix. Save your recording to the library or a folder for future playback or sharing.
    *   9. Headphone and Microphone Integration:
        * Enable the PFL Cue to monitor channels through headphones.
        * Use the microphone controls to switch on the mic, adjust input volume, or record voiceovers as part of your mix.
    *   10. Visualize Your Tracks:

Follow the real-time waveform display to monitor track progress, identify beat drops, and refine your transitions.

DEE J PRO offers a hands-on DJing experience that simulates professional equipment while maintaining accessibility and affordability. Explore the various buttons, sliders, and pads to unlock your creative potential and enjoy mixing music directly in your browser. 

## **Design**
### **Color Scheme:**
The design of DEE J PRO aims to strike a balance between visual appeal and practicality, emulating the aesthetic of professional DJ equipment while ensuring user comfort and clarity. The primary color palette is inspired by metallic tones, combining a sleek metallic white base with vibrant metallic red accents for buttons and sliders. This combination enhances the interface’s modern and professional look, while also drawing attention to key controls and features.

For users who prefer a darker theme, the platform includes a dark grey metallic option. This alternative base color minimizes eye strain and provides a softer contrast compared to traditional black-themed DJ interfaces, which can often feel overwhelming and fatiguing. Additionally, users can customize the background color to match the dark grey metallic theme, further personalizing their experience.

Unlike many virtual DJ platforms that heavily rely on a predominantly black interface, DEE J PRO offers the flexibility of a light or dark mode. The metallic red accents remain consistent across themes, ensuring that critical functions and features are easily distinguishable in both modes. This thoughtful approach not only enhances usability but also aligns with the vibrant and dynamic atmosphere of DJing environments, offering users a visually pleasing and intuitive interface that elevates their mixing experience.

Controls and Interface Design:

The interface design of DEE J PRO prioritizes functionality and user experience, with deliberate choices made to accommodate the online platform’s constraints and user needs.

Sliders and Press Buttons: Instead of traditional turn knobs often found on physical DJ equipment, DEE J PRO employs sliders for controls such as equalizer adjustments and frequency tuning. This design choice ensures precise control in an online interface, where turn knobs may be less practical.

Jog Wheel: The jog wheel is designed with a silver metallic effect and shadowing to mimic a realistic, physical appearance. A central strip highlights the spinning motion, enhancing the immersive experience and creating a lifelike feel for users.

These design elements collectively offer a balance of realism and practicality, ensuring the platform feels professional while remaining intuitive and accessible for all users.


![Colour Combination 1](assets/images/Desktop%20View-dark%20bg.jpg)
![colour Conbination 2](assets/images/Desktop%20View-dark%20interface.jpg)


## **Technology Used:**
### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

highligted 2 warning regarding aria labels. I have diregarded this because the touchstrip does require user interaction.
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- The use of slider vertical is not correct however removing it keeps causing the channel faders to loose their styling

 - The scrath keyframes are not an issue right now as the scratch function has not yet been implement. 

 -  [JavaScript]

### Frameworks, Libraries & Programs Used

1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was social media icons within the footer. 
1. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the command line terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub was used to store the project code after being pushed from Git.
1.  [VisualStudioCode:](https://code.visualstudio.com/)
    1.  Visual Studio Code was used to write the project code and then pushed through to the Git Repository.
1. [Open Game Art:](https://opengameart.org/)
    1.  Open Game Art was used to source royalty free music to sample. 


---

## **Current Features Common to all pages**
## **Browser** 


### **Main body**
The site has a consistent layout and colour them going with the metallic white, silver, red, grey.

### *Header Element:*
The header is used throughout the site to hold the navigation bar and the site title. For the main dj page the header containts the switch theme buttons for the dj interface and body background. The has been placed in the header intentionally as the DJ has many functionalities of its own already, 

- **Title**: A clear, stylized title for easy recognition.
- **Logo**: The logo is basic font for a bold look
- **Navigation Bar**: display link to the other pages in a clear button-style format, when hovered over they change colour.
- **Design**: The basic layout of the header, footer and logo is the same across the pages.

[Header](assets/images/)

### *Footer:*
The footer contains links to social media platforms (Facebook, X-app, YouTube, Instagram), with white icons on a dark grey background for a sleek, contrasting finish. These are juts place holders for now. 

[Footer:] (assets/images/)

## **Functionalities**

Below is a table with list of all the functionalities of the vitual DJ. Those highlighted green have been implements and those in red have been removed as not required or have been replaced. 

The learner hub will be implemented once DEE J PRO is fully functioning. 

[DEE J PRO functions and features](assets/images/DEE%20J%20PRO-%20FUNCTIONS.jpg)


## **Future-Enhancements**
As per the table below, it was not possible to successfully implement all functions and features due to the time constraints of the project. Therefore, a priority for future enhancements is to fully implement all planned features and ensure they work seamlessly.

*Planned Features to Complete the Virtual DJ:*
        * Enhanced Visual Waveform Display: Incorporate a more advanced waveform visualizer to help users with precise track alignment and beat matching.
        * Advanced Deck Functionality: Complete all mixer and deck functionalities, including advanced FX controls, customizable filters, and smoother scratch emulation.

*Additional Future Enhancements:*

        *   1. Teaching Hub:
                * Develop an integrated learning center with tutorials, interactive guides, and beginner-to-advanced DJ lessons.
                * Include step-by-step walkthroughs for using the platform's features and mastering DJ techniques.
                * Add downloadable resources and exercises to help aspiring DJs practice and learn effectively.

        *   2. Mobile-Friendly Version:*
                * Redesign the interface to create a simplified version of the DJ for smaller screens, ensuring usability without sacrificing core functionality.

        *   3. Customizable Sound Effects:
                *   Allow users to upload and apply their own sound effects, loops, or samples for a more personalized DJing experience.

        *   4. Playlist Management:
                * Enable users to create, save, and load playlists for uninterrupted DJ sets.
                * Add features for managing track order, cue points, and loops within playlists.

        *   5. AI-Powered Track Recommendations:
                * Introduce an AI system to analyze user preferences and suggest tracks for seamless transitions and dynamic sets.

        *   6. Collaborative Mixing Feature:
                * Implement a multi-device syncing system to allow real-time collaboration between users on the same set.

Add chat and communication tools for coordinated mixing sessions.

        *    7. Visualizer Integration:
                * Include a real-time audio visualizer that reacts dynamically to the music being played, enhancing the aesthetic appeal.

        *    8. Keyboard Shortcuts:
                * Incorporate customizable keyboard shortcuts for commonly used actions like play, pause, loop, and crossfading.

By addressing these enhancements, DEE J PRO aims to evolve into a comprehensive, user-friendly, and professional-grade virtual DJ platform that caters to DJs of all skill levels.




## **Testing Phase**

### **Testing**

Rigorous testing was conducted to ensure:

* Cross-browser compatibility.

* Responsive design on various devices.

* Smooth audio processing and mixing functionality.

* Testing User Stories from User Experience (UX) Section:

* Each user story was tested to validate the platform’s ability to meet user needs.

Further Testing:

User feedback was gathered for iterative improvements.

* Additional bug fixes and refinements were made.

The W3C Markup Validator and W3C CSS Validator Services were used to validate the Virtual DJ page, there 2 error highlighted.

-   [**W3C Markup Validator**](assets/images/html%20validator%20initial%20check.jpg) 

-   [**W3C CSS Calidator**](assets/images/css%20validator%20check.jpg)

-   [**Minify - JavaScript and CSS minifier**](https://www.minifier.org/javascript-validator)

### Further Testing

-  **Virtual DJ  Testing**: The Website was tested on Google Chrome, Internet Explorer and Microsoft Edge.
-   The website was viewed on a variety of devices such as Desktop and Laptop.
- **Link Testing**: All internal/external links were tested manually to confirm they redirect to the correct pages without delays.  
- **User experience**: Friends and family members were asked to review the site and documentation to identify whether there were any bugs and/or user experience issues.

### Accessibility

- **Responsive Design**: Adapts to different screen sizes.
- **Keyboard Navigation**: The site is navigable without a mouse.
- **Semantic Elements**: Used throughout for readability and accessibility

## Known Bugs

* The Virtual DJ is not completely responsive for all ipads. This will be worked on. 

**Planned Fixes**:  
These layout issues will be prioritized for resolution in future iterations.

---

## **Deployment**
I deployed the page on GitHub pages via the following procedure: -

1. From the project's [repository](https://github.com/AllaboutDee/Project2), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.

---

## **Credits**

### **Honourable mentions**



### **General Reference:**

- Resources: Code Institute, YouTube, W3Schools, freeCodeCamp, MDN Web Docs and Stack Overflow.

- Readme.md layout inspiration: Tribe project by Adelle King (https://github.com/AdelleKing/Tribe/blob/main/README.md). I particularly like the thoroughness of the content.
- Deployment Reference: GitHub Pages documentation and various GitHub tutorials for seamless live site hosting.

### **Content:**
* Most of the content was written by myself, the project author.
* Icons used across the website were taken from [Font Awesome](https://fontawesome.com) 

### **Media:**

---