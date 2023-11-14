import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/dist/server/api-utils";
import ThreadCard from "../cards/ThreadCard";

interface Props{
      currentUserId: string;
      accountId: string;
      accountType: string;
}


const ThreadsTab = async ( {currentUserId, accountId, accountType } : Props) => {

      let result = await fetchUserPosts(accountId);

      if(!result) redirect('/')

      return (
            <section>
                  {result.threads.map((thread : any) => (
                        <ThreadCard
                        id={thread._id}
                        currentUserId={currentUserId}
                        parentId={thread.parentId}
                        content={thread.text}
                        author={accountType === 'User' ? { name: result.name, image: result.image, id: result.id}: 
                        { name: thread.author.name, image: thread.author.image, id: thread.author.id}} // todo
                        community={thread.community} //todo
                        createdAt={thread.createdAt}
                        comments={thread.children}
                      />
                  ))}
            </section>
      )
}

export default ThreadsTab;