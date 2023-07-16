import FeaturedPosts from '@/components/FeaturedPosts'
import Hero from '@/components/Hero'

export default function HomePage() {
    return <>
        <Hero/>
        {/* promise 형으로 가져올떄 next 와 typescript 측에서 type return 이 지정되지 않아서 error 가 발생할 경우 warning 을 무시하는 처리를 해줘야함 */}
        {/* @ts-expect-error Server Component */}
        <FeaturedPosts />
    </>
}
