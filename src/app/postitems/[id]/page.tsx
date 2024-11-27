'use client';

import React, { useEffect, useState } from 'react';
import {initialPost} from "@/sections/Posts";
import "./style.css"
import Image from 'next/image';
import Preloader from '@/components/Preloader';
import { tabsData } from '@/data/data';
import SidePostItem from '@/components/SidePostItem';
import { PostProps } from '@/sections/Posts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// for single item
const PostItem = ({params}: {params: {id: string}}) => {

    const id: string = params.id;
    const [item, setItem] = useState(initialPost);
    const [items, setItems] = useState([]);

    const router = useRouter();


    const [tabs, setTabs] = useState(tabsData);

    const handleTabActive = (id: number): void => {
        setTabs(tabsData.map(tab => {
            tab.active = false;
            if(tab.id === id) {
                tab.active = true;
            }
            return tab;
        }))
    };

    const getSinglePostData = () => {
        fetch(`/api/postitems/${id}`)
        .then(res =>res.json())
        .then(data => setItem(data))
        .catch(e => console.log(e.message))
    }

    const getItemsData = () => {
        fetch(`/api/postitems`)
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((e) => console.log(e.message));
      };

    useEffect(() => {
        getSinglePostData();
        getItemsData();
    }, []);

    const handleDeletePost = async(id: string) => {
        try{
            const response = await fetch(`/api/postitems/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = response.status;
            if(result === 200) {
                console.log("Success: ", result);
                router.push(`/postitems`)
            }

        } catch(error) {
            console.log("Error: ", error);
        }
    }

  return (
    <main id='main'>
        <section className="single-post-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 post-content">
                        {item && item.category !== '' ? (
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
                                {/* <Image src={`/${item.img}`} alt="" width={100} height={100} className='img-fluid' layout='responsive'/> */}
                                <img src={`/${item.img}`} alt="" className='img-fluid'/>
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

                            <div className="d-flex justify-content-center gap-4">
                                <a className='btn btn-primary' onClick={() => handleDeletePost(id)}>
                                    <i className='bi bi-trash'></i>
                                </a>
                                <Link href={`/createpostitem/${id}`} className='btn btn-primary'>
                                    <i className='bi bi-pen'></i>
                                </Link>
                            </div>
                        </div>
                        ) : (
                            <Preloader/>
                        )}
                    </div>

                    <div className='col-md-3'>
                        <div className="aside-block">
                            <ul className='nav nav-pills custom-tab-nav mb-4'>
                                {tabs.map((tab) => (
                                        <li className='nav-item' key={tab.id}>
                                            <button 
                                                className={`nav-link ${tab.active ? "active" : undefined}`}
                                                onClick={() => handleTabActive(tab.id)}
                                            >
                                                {tab.name}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="tab-content">
                                <div className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}>
                                    {
                                    items.slice(0, 6)
                                    .map((item: PostProps['item']) => (
                                        <SidePostItem key={item._id} item={item} />
                                    ))}
                                </div>

                                <div className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}>
                                    {
                                    items.slice(6, 12)
                                    .map((item: PostProps['item']) => (
                                        <SidePostItem key={item._id} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="aside-vlock">
                            <h3 className='aside-title'>Video</h3>
                            <div className="video-post">
                                <a href="https://www.youtube.com/shorts/Hp4TJlAywrI?feature=share" target='_blank' className='link-video'>
                                    <span className="bi-play-fill"></span>
                                    <img src='/assets/img/post-landscape-3.jpg' alt='' className='img-fluid' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default PostItem;