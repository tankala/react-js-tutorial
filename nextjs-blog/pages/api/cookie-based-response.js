import { NextResponse } from 'next/server';
 
export const config = {
  runtime: 'edge', // this is a pre-requisite
};

export default function handler (request) {
  // const cookieValue = request.cookies.get('cookie-data')?.value;
  const url = request.url;
  const cookieValue = url.split("=")[1];
  let responseValue = "Nothing in Cookie";
  if(cookieValue) {
    if(cookieValue === "Vinod") {
      responseValue = "Dev Manager";
    } else if(cookieValue === "Hitesh") {
      responseValue = "V3";
    } else if(cookieValue === "Ashok") {
      responseValue = "Consultant";
    } else {
      responseValue = "Unknown";
    }
  }
  return NextResponse.json({
    response: responseValue,
  });
};