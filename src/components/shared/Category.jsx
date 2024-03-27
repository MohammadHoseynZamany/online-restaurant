'use client'
// import Image from "next/image"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react";



export default function Category(props){
    return (
        <div className="">
          <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0 w-[17vw] h-[17vw] max-w-32 max-h-32 min-h-32">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={props.title}
                className="w-full object-cover h-[140px]"
                src={props.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="mx-auto my-1">{props.title}</b>
              <p className="text-default-500">{props.options}</p>
            </CardFooter>
          </Card>
      </div>
        )
    }