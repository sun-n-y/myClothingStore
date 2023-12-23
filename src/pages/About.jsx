const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          My favorite
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-wide">
              clothes
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        aliquid temporibus eligendi, reiciendis harum minima quia mollitia
        provident cumque nulla? Modi laborum architecto non quis doloremque
        fugiat dolore repudiandae nostrum?
      </p>
    </>
  );
};

export default About;
