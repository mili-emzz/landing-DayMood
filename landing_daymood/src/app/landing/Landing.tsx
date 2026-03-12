"use client";
import React, { useRef } from 'react';
import Hero from './hero/hero';
import Features from './features/features';

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
            
            <div className="snap-start w-full h-screen">
                <Hero />
            </div>
            <div className="snap-start w-full h-screen">
                <Features />
            </div>
        </div>
    );
}
