import React from 'react';
import { Carousel, Button  } from "@material-tailwind/react";

export function Hero() {
    return (
        <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="relative">
                <img
                    src="https://www.npackmachine.com/wp-content/uploads/Oil-Filling-Machine.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-20 left-20">
                    <Button size="lg" color="white">
                        Details
                    </Button>
                </div>
            </div>
            <div className="relative">
            <img
                src="https://www.npackmachine.com/wp-content/uploads/Bottle-Filling-Line.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <div className="absolute bottom-20 left-20">
                <Button size="lg" color="white">
                    Details
                </Button>
            </div>
            </div>
            <div className="relative">
            <img
                src="https://www.npackmachine.com/wp-content/uploads/Capping-Machine-1.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
            />
            <div className="absolute bottom-20 right-20">
                <Button size="lg" color="white">
                    Details
                </Button>
            </div>
            </div>
            <div className="relative">
            <img
                src="https://www.npackmachine.com/wp-content/uploads/Labeling-Machine.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
            />
            <div className="absolute bottom-20 right-20">
                <Button size="lg" color="white">
                    Details
                </Button>
            </div>
            </div>
        </Carousel>
    );
}
export default Hero;
