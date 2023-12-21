import {
    getStoryblokApi,
} from "@storyblok/react/rsc";
import Link from 'next/link'

const Navigation = async ({ blok }) => {
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get("cdn/links/" ,{
        version: 'draft'
    });
    let paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        let link = data.links[linkKey];

        // Only allow start-pages of folders or basic pages
        if (((link.parent_id !== null && !link.is_startpage)
            && link.path !== '/') || link.is_folder) {
            return;
        }

        paths.push(data.links[linkKey]);
    });

    return <div className='absolute left-5 bottom-5'>
        <ul className='grid grid-rows-4 gap-2 lg:grid-rows-4'>
            {
                paths && paths.reverse().map(({id,slug,name})=>{
                    return(
                        <li key = {id} className='p-0.5 transtion-all ease-in-out duration-300 hover:scale-105'>

                            <h3><Link href={`/${slug}`} className='text-3xl py-2 capitalize text-[13px] block transtion-all ease-in-out delay-100 hover:text-secondary-900'>{name}</Link></h3>

                        </li>
                    )
                })
            }
        </ul>
    </div>;
};

export default Navigation;