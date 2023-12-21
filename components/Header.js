import { storyblokEditable } from "@storyblok/react/rsc";

const Header = ({ blok }) => {
    return (
        <div className="header" {...storyblokEditable(blok)}>
            <h3 className="fixed top-2 right-2">GVarelis</h3>
        </div>
    );
};

export default Header;