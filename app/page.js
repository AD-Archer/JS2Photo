import Image from "next/image";
import PixelBlast from "@/components/PixelBlast/PixelBlast";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#f8f3e7] text-[#1f1f1f]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_24%,rgba(255,142,38,0.18),transparent_32%),linear-gradient(135deg,#fff8ea_0%,#f8f3e7_48%,#ffd9d9_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full opacity-55 sm:w-3/5">
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
          src="/assets/flag-orpheus-top-bw.svg"
          alt="Hack Club"
          width={112}
          height={63}
          priority
          className="h-auto w-24 transition-transform duration-200 group-hover:-rotate-2 sm:w-28"
        />
      </a>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-5 pt-28 sm:px-8 sm:pb-7 sm:pt-32">
        <section className="flex flex-1 items-center py-8 sm:py-12">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full bg-[#ec3750] px-3 py-1 text-sm font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#000]">
              Neon Genesis
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-[#111] sm:text-7xl">
              Make a tiny web sketch.
              <br />
              We’ll turn it real.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#323232] sm:text-xl">
              Create something playful in p5.js, send it in, and get a physical
              print of your code-made artwork in the mail.
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
        </section>

        <footer className="flex flex-col gap-2 border-t-2 border-black/80 py-4 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <span>Ship a sketch. Get something you can hold.</span>
          <span className="font-mono text-xs uppercase tracking-wide">
            Made for builders
          </span>
        </footer>
      </div>
    </main>
  );
}
