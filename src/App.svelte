<script lang="ts">
</script>

<main class="flex flex-col items-center w-full max-w-4xl mx-auto">
    <header class="w-full sticky top-0 left-0 right-0 z-10 mt-6 bg-opacity-10 backdrop-blur px-2"
        style="backdrop-filter: blur(8.4px); -webkit-backdrop-filter: blur(8.4px);"
    >
        <nav>
            <div class="flex justify-center items-center w-full py-4">
                <div 
                    class="flex w-full justify-between items-center"
                >
                <div class="flex items-center">
                    <a class="text-3xl text-white font-bold" href="#">Luis Matos</a>
                </div>
                <div class="flex gap-x-10">
                        <a 
                            href="#work_experience" 
                            class="text-textDark text-xs md:text-lg lg:text-xl transform hover:scale-110 transition duration-300 ease-in-out"
                        >
                            Experience
                        </a>
                        <a 
                            href="#projects" 
                            class="text-textDark text-xs md:text-lg lg:text-xl transform hover:scale-110 transition duration-300 ease-in-out"
                        >
                            Projects
                        </a>
                        <a 
                            href="#posts" 
                            class="text-textDark text-xs md:text-lg lg:text-xl transform hover:scale-110 transition duration-300 ease-in-out"
                        >
                            Posts
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>       
    <div class="flex flex-col gap-y-14 mt-24">
        <section id="home" class="flex flex-col gap-y-6 w-full">
            <p class="text-textDark text-xl md:text-2xl lg:text-3xl w-full leading-loose">
                <span class="text-textWhite font-bold">Hey, I'm Luis.</span> I'm a Software Engineer who loves exploring complex systems and solving real-world problems.
            </p>
            <div class="flex flex-wrap gap-x-3 md:gap-x-5 bg-green w-full">
                <a 
                    href="https://www.linkedin.com/in/lymg-profile/"
                    target="_blank"
                    class="flex items-center gap-x-3 text-sm md:text-md lg:text-xl text-logo transform hover:scale-105 transition duration-300 ease-in-out"> 
                    <img src="/linkedin-logo.png" alt="LinkedIn Logo" class="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7"/>
                </a>
                <a 
                    href="https://github.com/luisya22"
                    target="_blank"
                    class="flex items-center gap-x-3 text-sm md:text-md lg:text-xl text-white transform hover:scale-105 transition duration-300 ease-in-out">
                    <img src="/github-logo.png" alt="LinkedIn Logo" class="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7"/>
                </a>
                <a 
                    href="https://www.youtube.com/channel/UCxwI5ZskbI1kHiG4VRWZxJQ"
                    target="_blank"
                    class="flex items-center gap-x-3 text-sm md:text-md lg:text-xl text-white transform hover:scale-105 transition duration-300 ease-in-out">
                    <img src="/youtube-logo.png" alt="LinkedIn Logo" class="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7"/>
                </a>
            </div>
        </section>
        <section id="work_experience" class="flex flex-col gap-y-12 w-full">
            <h2 class="w-full text-textWhite text-lg xl:text-xl 2xl:text-2xl font-bold">Experience</h2>
            <article class="flex flex-col gap-y-4">
                <div>
                    <h3 class="text-textWhite text-md xl:text-lg 2xl:text-xl font-bold">Software Engineer <span class="text-logo">- e3 Consulting</span></h3>
                    <p class="text-sm xl:text-md 2xl:text-lg font-light italic text-logo" >September 2018 - Present</p>
                </div>
                <p class="text-textDark leading-loose text-sm xl:text-md 2xl:text-lg">
                    I <span class="font-bold">initiated and led</span> the development of a Warehouse Management System (WMS) from the ground
                    up. Later, I transformed this system into a multi-tenancy application, significantly 
                    <span class="font-bold"> expanding our client reach</span>.
                    My work was underpinned by expertise in 
                    <span class="font-bold">Vue.js, Laravel, Node.js, React, MySQL,</span> and 
                    <span class="font-bold">JavaScript</span>, ensuring the 
                    delivery of robust solutions. Additionally, I actively 
                    <span class="font-bold">mentored junior team members</span>,
                    guiding their professional growth within our projects.
                </p>
            </article>
        </section>
        <section id="projects" class="flex flex-grow flex-wrap gap-y-10 w-full">
            <h2 class="w-full text-textWhite text-lg xl:text-xl mb-5 2xl:text-2xl font-bold">Projects</h2>
            <article class="w-1/2 px-2 flex-grow flex">
                <div class="w-full h-full flex flex-col space-y-4 border-2 rounded-lg border-border px-8 py-12">
                    <div class="flex justify-between">
                        <a target="_blank" href="https://github.com/luisya22/galactic-exchange"
                            class="text-textWhite text-md md:text-xl font-bold cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">🚀 Galactic Exchange</a>
                        <a 
                            href="https://github.com/luisya22/galactic-exchange"
                            target="_blank"
                            class="transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">
                            <img src="/github-logo.png" alt="LinkedIn Logo" class="h-7 w-7"/>
                        </a>
                    </div>
                    <p class="text-sm xl:text-md 2xl:text-lg text-textDark leading-8">
                        A CLI-based strategy game set in a dynamic universe, focusing on trade, diplomacy, and conflict within a real-time economy.                
                    </p>
                    <div class="flex flex-wrap w-full">
                        <img src="/go_logo.png" alt="Go Logo" class=""/>
                    </div>
                </div>
            </article>
            <article class="w-1/2 px-2 h-full">
                <div class="w-full h-full flex flex-col space-y-4 border-2 rounded-lg border-border px-8 py-12">
                    <div class="flex justify-between">
                        <a target="_blank" href="https://github.com/luisya22/video-sharing-go"
                            class="text-textWhite text-lg md:text-xl font-bold cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">🎥 Video Transcoding</a>
                        <a 
                            href="https://github.com/luisya22/video-sharing-go"
                            target="_blank"
                            class="transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60">
                            <img src="/github-logo.png" alt="LinkedIn Logo" class="h-7 w-7"/>
                        </a>
                    </div>
                    <p class="text-sm xl:text-md 2xl:text-lg text-textDark leading-8">
                        I developed a video transcoding service that adapts videos into various resolutions for a web app, streamlining conversion and delivery for device compatibility.
                    </p>
                    <div class="flex flex-wrap items-center gap-x-4 w-full">
                        <div>
                            <img src="/go_logo.png" alt="Go Logo" class=""/>
                        </div>
                        <div>
                            <img src="/rust_logo.png" alt="Go Logo" class="h-8"/>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="posts" class="flex flex-col gap-y-10 w-full">
            <h2 class="w-full text-textWhite text-lg xl:text-xl mb-5 2xl:text-2xl font-bold">Posts</h2>
            <article class="w-full lg:flex lg:flex-wrap mb-20">
                <div class="w-full flex flex-col space-y-4 border-2 rounded-lg border-border px-8 py-12">
                    <div class="flex justify-between">
                        <a target="_blank" href="https://luismatos.hashnode.dev/building-a-background-running-space-trading-game-terminal-interface-adventure" 
                            class="text-textWhite text-md md:text-xl font-bold cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out bg-opacity-60"
                        >Building a Background Running Space Trading: Game: TUI Adventure</a>
                    </div>
                    <p class="text-sm xl:text-md 2xl:text-lg text-textDark leading-loose">
                        Talks about building a background-running space trading game with a terminal interface, featuring dynamic economy, resource management, and faction behavior.
                    </p>
                    <div class="flex flex-wrap items-center gap-x-4 w-full">
                        <div>
                            <img src="/go_logo.png" alt="Go Logo" class=""/>
                        </div>
                        <div>
                            <img src="/rust_logo.png" alt="Go Logo" class="h-8"/>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </div>
</main>
