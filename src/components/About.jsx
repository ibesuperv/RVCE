function About() {
    return (
        <>
            <div className="parent relative bg-white overflow-hidden w-full min-h-screen flex justify-center items-center ">
                <h1 className="text-zinc-500 -rotate-90 font-bold absolute left-4 top-80 text-[8vw] md:text-[6vw] lg:text-[5vw]">
                    About
                </h1>

                <div className="overflow-visible h-screen relative w-3/4 rounded-3xl p-8 text-gray-800">
                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4">RVCE History</h2>
                        <p className="leading-relaxed">
                            Established in 1963 with three engineering branches namely Civil, Mechanical and Electrical,
                            today RVCE offers 12 Under Graduate Engineering programmes, 16 Master Degree programmes, and
                            Doctoral Studies. Located 13 km from the heart of Bangalore City – the Silicon Valley of India, on
                            Mysore Road. Sprawling campus spread over an area of 16.85 acres (16.43 guntas) set in sylvan surroundings.
                            Provides an ideal ambience to stimulate the teaching-learning process, helping in bringing out skilled
                            and disciplined Engineers. Rated one amongst the top ten self-financing Engineering Institutions in the country.
                            Current annual student intake for Undergraduate Programmes & Post Graduate Programmes in Engineering
                            is in excess of 1200. Highly qualified and dedicated faculty. Utilizes its expertise in various disciplines
                            to conduct Research and Development for Industry and Defense establishments in the country.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
                        <p className="leading-relaxed">
                            Leadership in Quality Technical Education, Interdisciplinary Research & Innovation, with a Focus on
                            Sustainable and Inclusive Technology.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 ">Mission</h2>
                        <ul className="list-disc pl-5 leading-relaxed">
                            <li>To deliver outcome-based Quality education, emphasizing experiential learning with state-of-the-art infrastructure.</li>
                            <li>To create a conducive environment for interdisciplinary research and innovation.</li>
                            <li>To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics, and social sensitivity.</li>
                            <li>To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.</li>
                            <li>To focus on technologies that are sustainable and inclusive, benefiting all sections of society.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 ">Quality Policy</h2>
                        <p className="leading-relaxed">
                            Achieving Excellence in Technical Education, Research, and Consulting through an Outcome-Based Curriculum
                            focusing on Continuous Improvement and Innovation by Benchmarking against the global Best Practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 ">Core Values</h2>
                        <p>Professionalism, Commitment, Integrity, Teamwork, Innovation</p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default About;
