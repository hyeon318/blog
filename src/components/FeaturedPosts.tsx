import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  // 1. post list
  // 2. all post data

  const posts = await getFeaturedPosts().then(data => data);

  return  <section>
            <h2 className='text-2xl font-bold my-2'>Fetured Posts</h2>
            <PostsGrid posts={posts}/>
          </section>;
}