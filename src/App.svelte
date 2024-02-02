<script lang="ts">
</script>

<main class="flex flex-col items-center w-full px-2 2xl:px-16 3xl:max-w-7xl 3xl:px-0 mx-auto">
    <div class="fixed bg-primary h-96 w-96 rounded-full top-52 -z-10 blur-[400px]">
    </div>
    <header class="w-full">
        <nav class="fixed top-6 left-0 right-0 z-10">
            <div class="flex justify-center items-center w-full">
                <div 
                    class="flex items-center gap-x-10 lg:gap-x-14 bg-secondary bg-opacity-10 shadow-lg border-white/30 border border-btnBorder px-6 md:px-32 lg:px-48 py-2 rounded-full"
                    style="backdrop-filter: blur(8.4px); -webkit-backdrop-filter: blur(8.4px);"
                >
                    <a 
                        href="#home" 
                        class="text-white text-sm md:text-xl lg:text-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                    >
                        Home
                    </a>
                    <a 
                        href="#work_experience" 
                        class="text-white text-sm md:text-xl lg:text-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                    >
                        Experience
                    </a>
                    <a 
                        href="#projects" 
                        class="text-white text-sm md:text-xl lg:text-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                    >
                        Projects
                    </a>
                    <a 
                        href="#about_me"
                        class="text-white text-sm md:text-xl lg:text-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                    >
                        About Me
                    </a>
                </div>
            </div>
        </nav>
    </header>    
    <section id="home" class="flex flex-col gap-y-10 px-5 md:px-10 lg:px-32 xl:px-64 3xl:px-44 w-full mb-32 md:mb-48 lg:mb-64 mt-32 md:mt-48 lg:mt-72">
        <h1 class="text-white text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl w-full font-bold">Hi, I'm LUIS MATOS GARCIA</h1>
        <p class="text-secodaryLight text-xl md:text-2xl lg:text-4xl w-full leading-normal md:leading-loose">
            With over 5 years of experience, I'm a passionate 
            <span class="text-primary">Software Engineer</span> dedicated to carfting
            <span class="text-primary">innovative</span> and <span class="text-primary">efficient</span> software solutions.
        </p>
        <div class="flex flex-wrap gap-x-3 md:gap-x-5 bg-green w-full">
            <a 
                href="https://www.linkedin.com/in/lymg-profile/"
                target="_blank"
                class="flex items-center gap-x-3 text-sm md:text-md lg:text-xl text-white bg-btnPrimary px-4 md:px-10 py-2 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="/linkedin-logo.png" alt="LinkedIn Logo" class="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7"/>
                <span>LinkedIn</span>
            </a>
            <a 
                href="https://github.com/luisya22"
                target="_blank"
                class="flex items-center gap-x-3 text-sm md:text-md lg:text-xl text-white bg-btnPrimary px-4 md:px-10 py-2 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="/github-logo.png" alt="LinkedIn Logo" class="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7"/>
                <span>GitHub</span>
            </a>
            <a 
                href="https://www.youtube.com/channel/UCxwI5ZskbI1kHiG4VRWZxJQ"
                target="_blank"
                class="flex items-center gap-x-3 text-sm md:text-md lg:text-xl text-white bg-btnPrimary px-4 md:px-10 py-2 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="/youtube-logo.png" alt="LinkedIn Logo" class="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7"/>
                <span>YouTube</span>
            </a>
        </div>
    </section>
    <section id="work_experience" class="flex flex-col gap-y-10 px-5 md:px-10 lg:px-32 xl:px-64 3xl:px-44 w-full mb-24 md:mb-32">
        <h2 class="w-full text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 md:mb-8">Work Experience</h2>
        <article class="flex flex-col gap-y-4">
            <div>
                <h3 class="text-primary text-lg xl:text-xl 2xl:text-2xl font-bold">Software Engineer <span class="text-secodaryLight">- e3 Consulting</span></h3>
                <p class="text-md xl:text-lg 2xl:text-xl font-light italic text-secodaryLight " >September 2018 - Present</p>
            </div>
            <p class="text-textWhite leading-loose text-md xl:text-lg 2xl:text-xl">
                I <span class="text-primary">initiated and led</span> the development of a Warehouse Management System (WMS) from the ground
                up. Later, I transformed this system into a multi-tenancy application, significantly 
                <span class="text-primary"> expanding our client reach</span>.
                My work was underpinned by expertise in 
                <span class="text-primary">Vue.js, Laravel, Node.js, React, MySQL,</span> and 
                <span class="text-primary">JavaScript</span>, ensuring the 
                delivery of robust solutions. Additionally, I actively 
                <span class="text-primary">mentored junior team members</span>,
                guiding their professional growth within our projects.
            </p>
        </article>
    </section>
    <section id="projects" class="flex flex-col gap-y-6 md:gap-y-10 px-5 md:px-10 lg:px-32 xl:px-64 3xl:px-44 w-full mb-24 md:mb-32">
        <h2 class="w-full text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 md:mb-8">Projects</h2>
        <article class="lg:flex lg:flex-wrap mb-20">
            <div class="w-full mb-10 lg:mb-0 lg:w-1/2 pr-4 relative">
                <img src="/galactic_exchange.png" alt="Galactic Exchange" class="w-full rounded-2xl"/>
                <div class="absolute bottom-8 md:bottom-16 left-4 flex gap-x-2">
                    <a 
                        href="https://github.com/luisya22/galactic-exchange"
                        target="_blank"
                        class="flex items-center gap-x-3 text-sm text-white bg-btnPrimary px-6 py-1 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">
                        <img src="/github-logo.png" alt="LinkedIn Logo" class="h-7 w-7"/>
                        <span>GitHub</span>
                    </a>
                    <a 
                        href="https://github.com/luisya22/galactic-exchange"
                        target="_blank"
                        class="flex items-center gap-x-3 text-sm text-white bg-btnPrimary px-6 py-1 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">
                        <img src="/www_logo.png" alt="LinkedIn Logo" class="h-7 w-7"/>
                        <span>Go To Site</span>
                    </a>
                </div>

            </div>
            <div class="w-full lg:w-1/2 flex flex-col space-y-4">
                <div>
                    <h3 class="text-primary text-xl md:text-2xl font-bold">Galactic Exchange</h3>
                    <h4 class="text-secodaryLight text-xl font-light italic">CLI Based Strategy Economy Simulation Game</h4>
                </div>
                <p class="text-textWhite leading-loose">
                    Galactic Exchange is a CLI-based strategy game set in a
                    dynamic universe, where players engage in trade, diplomacy,
                    and conflict management within a real-time economy. The game,
                    currently in development, aims to offer intricate gameplay
                    mechanics and a multi-faceted universe, encouraging community
                    contributions to its evolution.
                </p>
                <div class="flex flex-wrap w-full">
                    <p class="flex items-center gap-x-3 text-md md:text-lg text-white bg-go shadow bg-opacity-20 px-6 md:px-10 py-2 rounded-full">
                        <img src="/go_logo.png" alt="Go Logo" class="h-5 md:h-7 w-3 md:w-5"/>
                        <span>Go</span>
                    </p>
                </div>
            </div>
        </article>
        <article class="lg:flex lg:flex-wrap">
            <div class="w-full lg:w-1/2 mb-10 lg:mb-0 pr-4 relative">
                <img src="/video.png" alt="Galactic Exchange" class="w-full rounded-2xl"/>
                <div class="absolute bottom-4 left-4 flex gap-x-2">
                    <a 
                        href="https://github.com/luisya22/video-sharing-go"
                        target="_blank"
                        class="flex items-center gap-x-3 text-sm text-white bg-btnPrimary px-6 py-1 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">
                        <img src="/github-logo.png" alt="LinkedIn Logo" class="h-7 w-7"/>
                        <span>GitHub</span>
                    </a>
                    <a 
                        href="https://github.com/luisya22/video-sharing-go"
                        target="_blank"
                        class="flex items-center gap-x-3 text-sm text-white bg-btnPrimary px-6 py-1 border border-btnBorder rounded-full transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">
                        <img src="/www_logo.png" alt="LinkedIn Logo" class="h-7 w-7"/>
                        <span>Go To Site</span>
                    </a>
                </div>
            </div>         
            <div class="w-full lg:w-1/2 flex flex-col space-y-4">
                <div>
                    <h3 class="text-primary text-2xl font-bold">Video Transcoding Service</h3>
                    <h4 class="text-secodaryLight text-xl font-light italic">VOD Platform</h4>
                </div>
                <p class="text-textWhite leading-loose">
                    I developed a straightforward video transcoding service,
                    adapting videos into different resolutions for a web app.
                    This service streamlined the process of video conversion
                    and delivery, ensuring compatibility across devices without
                    overcomplicating the solution.
                </p>
                <div class="flex flex-wrap w-full gap-x-4">
                    <p class="flex items-center gap-x-3 text-md md:text-lg text-white bg-go shadow bg-opacity-20 px-6 md:px-10 py-2 rounded-full">
                        <img src="/go_logo.png" alt="Go Logo" class="h-5 md:h-7 w-3 md:w-5"/>
                        <span>Go</span>
                    </p>
                    <p class="flex items-center gap-x-3 text-md md:text-lg text-white bg-svelte shadow bg-opacity-20 px-6 md:px-10 py-2 rounded-full">
                        <img src="/svelte-logo.png" alt="Go Logo" class="h-5 md:h-7 w-3 md:w-5"/>
                        <span>Svelte</span>
                    </p>

                </div>
            </div>
        </article>

    </section>
    <section id="about_me" class="flex flex-col gap-y-10 px-5 md:px-10 lg:px-32 xl:px-64 3xl:px-44 w-full mb-32">
        <h2 class="w-full text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 md:mb-8">About Me</h2>
        <article class="flex flex-wrap">
            <div>
                <p class="text-textWhite leading-loose mb-8 text-lg xl:text-xl 2xl:text-2xl">
                    Over the last five years, my path in software engineering has
                    woven through <span class="font-bold text-primary">complex project leadership and hands-on
                    development with a range of technologies</span>. This journey has been
                    about more than just code; it's about fostering growth, both in
                    the systems I build and the people I work alongside.
                </p>
                <p class="text-textWhite leading-loose mb-8 text-lg xl:text-xl 2xl:text-2xl">
                    Diving into new technologies and refining existing ones, I
                    constantly seek out challenges that stretch my skills.                     
                    <span class="font-bold text-primary">My commitment to 
                    sharing knowledge and experiences extends to
                    LinkedIn, GitHub, and YouTube</span>, where I connect with a community
                    eager to explore the ever-evolving landscape of tech together. 
                </p>
            </div>
        </article>
    </section>
</main>
