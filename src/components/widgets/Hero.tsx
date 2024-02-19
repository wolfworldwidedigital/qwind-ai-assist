import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "https://cdn.builder.io/api/v1/image/assets%2F6387696728374a0781ad72f1a6d1fa50%2Fb39bba586ad84bbe8a3ff251eccb2240";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div
        class="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Automate Your Customer Questions <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline"> </span>{" "}
              <span class="text-[#039de1]">with AI</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">
                Custom GPT
              </span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  AI-Assist
                </span>{" "}
                allows you to automate your customer questions <em>Optimize</em>{" "}
                + <em>Replace</em> office workers. Ranging from your email
                support system with our AI-driven software, improving efficiency
                and reducing manual effort.,{" "}
                <span class="inline md:hidden">...</span>
                <span class="hidden md:inline"></span>
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="/demo"
                    target="_blank"
                    rel="noopener"
                  >
                    Get Demo
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={616}
              height={616}
              alt="AI Assist Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
