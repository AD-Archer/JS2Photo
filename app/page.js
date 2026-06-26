import Image from "next/image";
import PixelBlast from "@/components/PixelBlast/PixelBlast";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f8f3e7] text-[#1f1f1f]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_24%,rgba(255,142,38,0.18),transparent_32%),linear-gradient(135deg,#fff8ea_0%,#f8f3e7_48%,#ffd9d9_100%)]" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[74vh] w-full opacity-10 sm:w-3/5 sm:opacity-28">
        <PixelBlast
          variant="square"
          color="#ec3750"
          pixelSize={6}
          patternScale={1.15}
          patternDensity={1.3}
          enableRipples={false}
          speed={0.18}
          transparent
          edgeFade={0.04}
        />
      </div>

      <a
        href="https://hackclub.com"
        className="group absolute left-0 top-0 z-10 block"
      >
        <Image
          src="/assets/flag-orpheus-top.svg"
          alt="Hack Club"
          width={0}
          height={0}
          priority
          className="h-auto w-24 transition-transform duration-200 group-hover:-rotate-2 sm:w-50"
        />
      </a>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-5 pt-24 sm:px-8 sm:pb-7 sm:pt-28">
        <section className="py-8 sm:py-12 lg:py-14">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-14 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full bg-[#ec3750] px-3 py-1 text-sm font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#000]">
                Neon Genesis
              </p>
              <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-[#111] sm:text-7xl lg:text-[5.25rem]">
                Type real code,
                <br />
                make real art.
              </h1>
              <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#323232] sm:text-xl">
                Create something in p5.js, submit your sketch, and we’ll mail
                you a physical print of your artwork.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://editor.p5js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-black bg-[#ec3750] px-5 text-base font-black text-white shadow-[5px_5px_0_#000] transition-transform hover:-translate-y-0.5"
                >
                  Open p5.js
                </a>
                <a
                  href="https://forms.hackclub.com/t/p4eBdtmXnjus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-black bg-white px-5 text-base font-black text-[#111] shadow-[5px_5px_0_#000] transition-transform hover:-translate-y-0.5"
                >
                  Submit sketch
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none">
              <Image
                src="/logo.png"
                alt="Physical print preview"
                width={428}
                height={517}
                priority
                className="h-auto w-full rotate-2 drop-shadow-[8px_10px_0_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </section>

        <section className="border-y-2 border-black/80 py-9 sm:py-11">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="max-w-md">
              <p className="text-sm font-black uppercase tracking-wide text-[#ec3750]">
                Demonstration
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-[#111] sm:text-4xl">
                Save it, share it, download it.
              </h2>
              <ol className="mt-6 grid gap-3 text-base font-bold leading-7 text-[#323232]">
                <li>1. Save your sketch in the p5.js editor.</li>
                <li>2. Copy the share link so we can view it.</li>
                <li>3. Download the files and submit everything.</li>
              </ol>
            </div>
            <div className="rounded-md border-2 border-black bg-white p-2 shadow-[6px_6px_0_#000]">
              <div className="relative aspect-video w-full overflow-hidden rounded bg-[#111]">
                <Image
                  src="/example.gif"
                  alt="Example animated p5.js sketch"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 640px, calc(100vw - 56px)"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 py-4 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <span>Ship a sketch. Get something you can hold.</span>
          <span className="font-mono text-xs uppercase tracking-wide">
            Made for builders
          </span>
        </footer>
      </div>
    </main>
  );
}
