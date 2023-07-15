import Image from "next/image"

function MyProfilePic() {
   return (
         <Image className="mx-auto rounded-full mt-5 border-4 border-gray-600" src="/images/avatar.jpg" width={150} height={150} alt="Dat"/>
   )
}

export default MyProfilePic