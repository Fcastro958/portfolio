import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-primary py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white text-[18px] font-bold mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Fernando Castro | Full Stack Developer
        </p>
        <div className="flex gap-4">
        <a
            href="https://www.linkedin.com/in/fernandcastro958/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M6.184 20.572H2.667V9h3.518v11.572zM4.426 7.429a2.062 2.062 0 110-4.122 2.062 2.062 0 010 4.122zM22.099 20.572h-3.516v-5.979c0-1.462-.026-3.337-2.032-3.337-2.034 0-2.346 1.588-2.346 3.236v6.08h-3.515V9h3.385v1.576h.048c.472-.9 1.623-1.85 3.343-1.85 3.57 0 4.233 2.351 4.233 5.411v6.835z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/ortsac_reversed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.671.812-2.606.994C18.324 4.498 17.257 4 16.077 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.407-.17-6.425-1.802-8.44-4.287-.353.608-.556 1.31-.556 2.062 0 1.424.724 2.679 1.825 3.415-.673-.021-1.305-.206-1.856-.513v.052c0 1.99 1.415 3.65 3.292 4.023-.344.094-.707.144-1.081.144-.264 0-.521-.025-.772-.073.522 1.63 2.038 2.816 3.833 2.845-1.404 1.1-3.174 1.756-5.096 1.756-.331 0-.658-.019-.979-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.499-1.3 2.049-2.124z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

