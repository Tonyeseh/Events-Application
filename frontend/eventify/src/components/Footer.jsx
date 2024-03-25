import React from "react";
import FooterCard from "./Cards/FooterCard";

const Footer = () => {
    return (
        <div className='px-20 w-full bg-[#2B293D] text-[#A9A9A9]'>
            <div className="flex md:flex-nowrap flex-wrap justify-between border-b border-b-[#A9A9A9] py-10">
                <FooterCard header='Company Info' listItems={['About Us', 'Contact Us', 'Careers', 'FAQs', 'Terms of Service', 'Privacy Policy']} />
                <FooterCard header='Help' listItems={['Account Support', 'Listing Events', 'Event Ticketing', 'Ticket Purchase Terms & Conditions']} />
                <FooterCard header='Categories' listItems={['Concert & Gigs', 'Festivals & Lifestyle', 'Business & Networking', 'Food and Drinks', 'Performing Arts', 'Sports & Outdoors', 'Exhibitions', 'Workshops, Conferences & Classes']} />
                <FooterCard header='Follow Us' listItems={['Facebook', 'Twitter', 'Instagram', 'Youtube']} />
            </div>
            <div className="flex justify-center py-3">
            <p>&copy; 2023 Eventify. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
