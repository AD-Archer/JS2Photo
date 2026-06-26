export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Neon Genesis</h1>
      <p className="mt-4 text-lg">
        Welcome to the Neon Genesis website! Your task is to create a{" "}
        <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">
          P5.js sketch
        </a>
        , submit a form, and receive a physical image of your creation.
      </p>
      <h1 className="text-3xl font-bold mt-8">How it works</h1>
      <p className="mt-4 text-lg">
        1. Create a P5.js sketch using the online editor.
        <br />
        2. Submit your sketch through the form provided on this website.
        <br />
        3. Receive a physical image of your creation in the mail!
      </p>
      <h1 className="text-3xl font-bold mt-8">Get Started</h1>
      <p className="mt-4 text-lg">
        To get started, click the button below to access the P5.js online
        editor.
      </p>
      <a
        href="https://editor.p5js.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Open P5.js Editor
      </a>
      <p>submit form https://forms.hackclub.com/t/p4eBdtmXnjus</p>

      <h1 className="text-3xl font-bold mt-8">
        How to Save and Submit Your Sketch
      </h1>
      <p className="mt-4 text-lg">
        1. After creating your sketch, click the "Save" button in the P5.js
        editor.
        <br />
        2. Once saved, you can click "Share" to share your sketch's url, and
        click download to submit it through the form on this website.
        <br />
        3. Make sure to include your contact information so we can send you the
        physical image!
      </p>
      example gif
      <img src="/example.gif" alt="Example GIF" className="mt-4" />
    </div>
  );
}
