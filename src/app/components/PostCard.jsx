import React from 'react'
import { BiLike } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const PostCard = () => {
    return (
        <div className=' bg-white p-1'>
            <img src={ 'https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' } class="object-cover rounded  w-[100%]" />

            <p className=' mt-3 text-2xl font-bold'><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ut error soluta </b></p>
            <br />
            <div className='flex h-[50px] py-2  justify-between items-center gap-4'>
                <div className=' flex gap-6 uppercase'>
                    <BiLike size={ 23 } />
                    <MdOutlineComment size={ 23 } />
                </div>
                <div className=' flex gap-6 px-4 uppercase'>
                    <CiShare2 size={ 23 } />
                    <CiBookmark size={ 23 } />
                </div>
            </div>
            <br />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad et, aspernatur optio consequuntur facilis ipsam? Non dignissimos unde magni officiis asperiores veniam odio, quod quidem mollitia <b>impedit ipsum dolor</b>.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis quos dolorum hic quae est nulla illo enim accusantium optio distinctio minus harum corporis exercitationem sapiente et iure animi in voluptatem reiciendis dicta consequatur, labore sint! Quia veritatis, maxime eius unde, harum quos vitae ipsa quo recusandae, corporis sequi veniam! Dolor, nostrum. Cum, asperiores possimus. Illum, incidunt? Tempora culpa repudiandae beatae? Sit similique, fuga consectetur reprehenderit tempore sequi laboriosam nostrum. Officiis molestias eum quam, eaque cupiditate dignissimos. Eaque eius expedita vitae, dolore quaerat explicabo quo ad molestias sunt quia, accusamus eveniet ullam dolores unde quos? Incidunt ex in laborum blanditiis.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis quos dolorum hic quae est nulla illo enim accusantium optio distinctio minus harum corporis exercitationem sapiente et iure animi in voluptatem reiciendis dicta consequatur, labore sint! Quia veritatis, maxime eius unde, harum quos vitae ipsa quo recusandae, corporis sequi veniam! Dolor, nostrum. Cum, asperiores possimus. Illum, incidunt? Tempora culpa repudiandae beatae? Sit similique, fuga consectetur reprehenderit tempore sequi laboriosam nostrum. Officiis molestias eum quam, eaque cupiditate dignissimos. Eaque eius expedita vitae, dolore quaerat explicabo quo ad molestias sunt quia, accusamus eveniet ullam dolores unde quos? Incidunt ex in laborum blanditiis.
                <br /><br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at nesciunt, iusto eos mollitia libero tempora iste quidem officia voluptas, nam similique odio. Odit nemo eos dolore, qui sapiente optio. Pariatur odit error provident ipsa modi, consectetur esse suscipit optio officiis qui quos. Quod repudiandae asperiores velit id! Blanditiis corporis voluptate quam et laboriosam obcaecati saepe dolorum repellat, accusantium minima esse fugiat cumque rem temporibus. Consequatur facere eum expedita possimus illum velit dignissimos laudantium ad obcaecati a id, minus et laborum necessitatibus cupiditate maxime ex quas praesentium quibusdam <br /><br /> veniam cumque architecto ipsum tenetur ullam. Qui ducimus doloremque atque perferendis distinctio! A provident tempora deserunt voluptates accusantium totam recusandae sed amet quasi adipisci, officiis libero accusamus cupiditate vero tempore laboriosam cum. Nulla omnis quasi soluta, numquam sunt minus obcaecati quis! Quas aperiam illum expedita, ipsum rem repellendus quae beatae in voluptatum ea nesciunt possimus veritatis dolore animi tempora eveniet porro consequuntur provident quod. Velit tenetur sint voluptatum ex corporis laboriosam molestias sunt, vitae officiis. Dolore voluptate facere libero numquam dolor, similique, aspernatur, error minus ipsam sequi dignissimos nostrum autem qui laborum totam hic! Laborum ipsum ratione, facilis nam sunt similique fuga perspiciatis doloribus, libero placeat possimus ea. Qui neque recusandae quam?
            </p>
        </div>
    )
}

export default PostCard