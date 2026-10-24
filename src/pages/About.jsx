const About = () => (
  <div className="pt-24 max-w-4xl mx-auto px-4 pb-10">
    <h1 className="text-3xl font-bold text-primary mb-4">About Wanderlust</h1>
    <p className="text-gray-700">
      We help travelers discover hotels and stories across the world.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">Our Team</h2>
    <p className="text-gray-700">
      Passionate travelers, developers and designers building a better travel
      experience.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">FAQ</h2>
    <details className="border rounded p-3 mb-2">
      <summary className="cursor-pointer font-semibold">
        How do I search hotels?
      </summary>
      <p className="mt-2 text-gray-600">
        Go to the Hotels page and pick a country from the dropdown.
      </p>
    </details>
    <details className="border rounded p-3">
      <summary className="cursor-pointer font-semibold">
        Is my wishlist saved?
      </summary>
      <p className="mt-2 text-gray-600">
        Yes - it is stored in your browser's localStorage so it persists between
        visits.
      </p>
    </details>
  </div>
);

export default About;