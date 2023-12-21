import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

const CenterImage = ({ blok }) => (
    // <div className="center-image-container grid grid-cols-1 justify-items-center" {...storyblokEditable(blok)}>
    <div className="center-image-container flex justify-center max-w-4xl flex-col mx-auto" {...storyblokEditable(blok)}>
        <h3 className="column image-title text-2xl">{blok.title}</h3>
        <a href="#"
           className="group relative items-end rounded-sm overflow-hidden bg-gray-100 shadow-lg">
        <img className="column image hover:scale-105 transition-transform duration-500 ease-in-out cursor-zoom-in" src={blok.image} alt={blok.name} onClick={() => console.log("click! zoom me now!")}/>
        </a>
        <div className="column image-description text-justify">{render(blok.description)}</div>
    </div>
);

export default CenterImage;