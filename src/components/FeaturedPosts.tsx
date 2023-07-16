import { getAllPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  // 1. post list
  // 2. all post data

  const posts = await getAllPosts();

  return  <section>
            <h2>Fetured Posts</h2>
            <PostsGrid posts={posts}/>
          </section>;
}