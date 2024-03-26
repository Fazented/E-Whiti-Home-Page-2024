import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {

    return (
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/payment/payment.png" alt="payment" width={600} height={600} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-center mb-32'>
                        <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Assign the courses you want.</h2>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Pick from our dozens of carefully curated lesson plans, or make your own! All lesson progress can be tracked on the Teacher Dashboard.</h3>
                        <Link href={'/'} className="text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                            <span className='text-black text-lg font-normal opacity-75'>What are you waiting for?</span>
                            <span style={{ color: 'blue' }}>Sign Up</span>
                            <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} style={{ color: 'blue' }} />
                        </Link>
                    </div>

                </div>
            </div>
    )
}

export default Payment;
