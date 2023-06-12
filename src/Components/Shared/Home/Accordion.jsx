import accordionimg from '../../../../src/assets/icons/accordion .jpg';
import Aos from "aos";

const Accordion = () => {
    Aos.init();

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mb-20 gap-10'>

            <div data-aos="fade-left" className="flex items-center justify-center" >
                <img className='max-w-full rounded-xl' src={accordionimg} alt="" />
            </div>

            <div data-aos="fade-right" className="flex items-center justify-center rounded-xl" >
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title  font-bold text-2xl">
                            WHAT IS ONLINE EDUCATION?
                        </div>
                        <div className="collapse-content">
                            <p className='font-semibold '>Let’s start with the defining process of online education. First of all, we get our knowledge from the Internet when we study online. There we usually use such sources as online video tutorials and lectures combined and bundled in courses, live presentations and webinars, ebooks, and slideshows. Sometimes, we need to complement these activities with tasks to retain gathered information. This involves different quizzes, projects, and assignments. And it becomes more convenient and practical if everything described is accessible in one place. So the need for a particular learning platform or website arises.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold text-2xl">
                            WEBSITE AS A MEAN OF GAINING KNOWLEDGE
                        </div>
                        <div className="collapse-content">
                            <p className='font-semibold '>Today one of the most popular systems used for the creation of similar websites is WordPress. WordPress makes it easy to build your own website even for non-technical users with no coding skills. WordPress is a huge platform and community unifying web and theme developers. WP themes are referred to as a collection of templates and stylesheets used to define the appearance and display of a WordPress powered website. You can change and manage them as you want. There are thousands of themes available for free or on a paid basis. Themes are developed for every niche in existence. Sports, business, travel, lifestyle, education website owners can pay for affordable products that are sure to increase their chances of success.

                                No worries about installation, high level of user-friendliness and customization, interactive tools and fast loading speeds, and all other features can definitely add value to any website.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold text-2xl">
                            Benefits Of Learning foreign languages
                        </div>
                        <div className="collapse-content">
                            <p className='font-semibold '>enhances cognitive abilities and improves memory, attention span, and problem-solving skills. When learning a new language, you engage your brain in complex tasks, such as comprehension, interpretation, and communication, which stimulate mental agility and enhance overall cognitive function.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Accordion;
