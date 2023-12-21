import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

const CenterImage = ({ blok }) => (
    <div className="center-image-container" {...storyblokEditable(blok)}>
        <h3 className="column image-title">{blok.title}</h3>
        <img className="column image" src={blok.image} alt={blok.name} />
        <div className="column image-description text-justify">{render(blok.description)}</div>
    </div>
);

export default CenterImage;