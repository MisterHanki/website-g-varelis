import {
    getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Navigation from "@/components/Navigation";

export const dynamicParams = true;

export default async function Page({params}) {
    let slug = params.slug ? params.slug.join("/") : "home";

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {version: 'draft', cv: Math.random()});

    return (
        <div>
            <Navigation></Navigation>
            <StoryblokStory story={data.story} />
        </div>
    );
}


export async function generateStaticParams() {

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get("cdn/links/" ,{
        version: 'draft'
    });
    let paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder) {
            return;
        }
        const slug = data.links[linkKey].slug;

        if(slug == 'home'){
            return
        }

        let splittedSlug = slug.split("/");

        paths.push({ slug: splittedSlug });
    });
    return paths

}