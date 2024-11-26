'use client';

import React, { useEffect, useState } from 'react';
import {initialPost} from "@/sections/Posts";
import "./style.css"
import Image from 'next/image';

// for single item
const PostItem = ({params}: {params: {id: string}}) => {

    const id: string = params.id;
    const [item, setItem] = useState(initialPost);

    const getSinglePostData = () => {
        fetch(`/api/postitems/${id}`)
        .then(res =>res.json())
        .then(data => setItem(data))
        .catch(e => console.log(e.message))
    }

    useEffect(() => {
        getSinglePostData();
    }, []);

  return (
    <main id='main'>
        <section className="single-post-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 post-content">
                        <div className="single-post">
                            <div className="post-meta">
                                <span className="date">{item.category}</span>
                                <span className="mx-1">
                                    <i className='bi bi-dot '></i>
                                </span>
                                <span>{new Date(item.date).toLocaleDateString('en-US')}</span>
                            </div>

                            <h1 className='mb-5'>{item.title}</h1>
                            <p>
                                <span className="firstcharacter">
                                    {item.brief && item.brief.charAt(0)}
                                </span>
                                {item.brief && item.brief.substring(1)}
                            </p>

                            <p>
                                {/* hard coded data */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam quia maiores at doloremque expedita est pariatur quibusdam dignissimos, nobis eaque suscipit nihil quos possimus modi sunt nesciunt, sequi asperiores quaerat magni corporis quam! Natus at eum non quam eos aliquam obcaecati, cumque voluptatibus alias ab porro quis, earum ea. Deleniti debitis cumque aliquam pariatur nesciunt excepturi esse earum ducimus atque saepe repudiandae quae id itaque, asperiores autem qui dolore laudantium numquam. Neque, quaerat. Voluptatibus excepturi cum atque unde beatae. Modi quis, veniam quod rerum, officia voluptatibus deleniti voluptate fuga molestias aspernatur rem aliquam, non neque? Non dicta numquam eligendi.
                            </p>

                            <figure className='my-4'>
                                <Image src={`/${item.img}`} alt="" width={100} height={100} className='img-fluid' layout='responsive'/>
                                <figcaption>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, est illum veritatis hic dicta, ipsam ipsum nisi doloremque
                                </figcaption>
                            </figure>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione culpa, distinctio, incidunt eaque inventore perferendis doloremque, sequi hic maxime fugit beatae ullam! Sed quia mollitia fugiat accusantium doloremque totam facere, nostrum exercitationem, corporis iste inventore quos rem tenetur placeat reiciendis itaque, natus est libero? Fuga excepturi modi nulla quae.
                            </p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione culpa, distinctio, incidunt eaque inventore perferendis doloremque, sequi hic maxime fugit beatae ullam! Sed quia mollitia fugiat accusantium doloremque totam facere, nostrum exercitationem, corporis iste inventore quos rem tenetur placeat reiciendis itaque, natus est libero? Fuga excepturi modi nulla quae.
                            </p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione culpa, distinctio, incidunt eaque inventore perferendis doloremque, sequi hic maxime fugit beatae ullam! Sed quia mollitia fugiat accusantium doloremque totam facere, nostrum exercitationem, corporis iste inventore quos rem tenetur placeat reiciendis itaque, natus est libero? Fuga excepturi modi nulla quae.
                            </p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione culpa, distinctio, incidunt eaque inventore perferendis doloremque, sequi hic maxime fugit beatae ullam! Sed quia mollitia fugiat accusantium doloremque totam facere, nostrum exercitationem, corporis iste inventore quos rem tenetur placeat reiciendis itaque, natus est libero? Fuga excepturi modi nulla quae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default PostItem;