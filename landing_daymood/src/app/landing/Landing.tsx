"use client";
import React, { useRef } from 'react';
import Hero from './hero/hero';
import Features from './features/features';
import Footer from './footer/footer';

export default function Landing() {

    return (
        <div
            className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
            style={{
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}
        >
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="snap-start w-full">
                <Hero />
            </div>
            <div className="snap-start w-full">
                <Features />
            </div>
            <div className="snap-start w-full">
                <Footer />
            </div>
        </div>
    );
}
