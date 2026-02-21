export default function CSSHOME() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full max-w-xs rounded-xl bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600">Rahul</h2>
          <p className="text-lg text-gray-700">Code Guide</p>
          <p className="mt-4 text-sm italic text-gray-500">
            "Today we are going to learn about Python loops!"
          </p>
        </div>

        <div className="w-full max-w-2xs rounded-xl bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600">Emma</h2>
          <p className="text-lg text-gray-700">English Guide</p>
          <p className="mt-4 text-sm italic text-gray-500">
            "Let's practice our daily phrasal verbs!"
          </p>
        </div>
      </div>
    </div>
  );
}
