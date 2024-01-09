'use client'
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,} from "@material-tailwind/react";
    import { FaInstagram, FaFacebook } from "react-icons/fa";
    import { FaSquareXTwitter } from "react-icons/fa6";
const CardProfile = () => {
  return (
    <Card className="w-96 bg-white" placeholder="" >
    <CardHeader floated={false} className="h-80"  placeholder={undefined}>
      <video className="h-full w-full rounded-lg" controls autoPlay muted loop>
      <source src="https://res.cloudinary.com/dyrfmuceq/video/upload/f_auto:video,q_auto/rtpinrz74hrgmkkxfbtg" type="video/mp4" />
      Your browser does not support the video tag.
    </video>w
    </CardHeader>
    <CardBody className="text-center" placeholder={undefined}>
      <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined}>
        Valentina Delgado
      </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient placeholder={undefined}>
        CEO / Co-Founder
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2" placeholder={undefined}>
      <Tooltip content="Follow">
        <Typography
            as="a"
            href="https://www.instagram.com/lvalentinadg/"
            variant="lead"
            color="blue"
            textGradient
            target='_blank' placeholder={undefined}        >
         <FaInstagram className='h-9 w-9 text-pink-600'/>
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
            target='_blank' placeholder={undefined}        >
          <FaFacebook className='h-9 w-9 text-blue-700  '/>
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
            target='_blank'
            placeholder={undefined}        >
          <FaSquareXTwitter className='h-9 w-9 text-black' />
        </Typography>
      </Tooltip>
    </CardFooter>
  </Card>
  )
}

export default CardProfile