import CodeDisplay from "@/components/freakyComp";
import axios from "axios";

const codeExtractooor = (codeData) => {

  const extractedCode = codeData.code.replace(/```jsx\n|\n```/g, "");
  return extractedCode;
}


async function getCode(){
  try{
    const response = await axios.post("http://127.0.0.1:8000/get_code", {
      "prompt": "Make me a short card for a luxury hotel with luxurious aesthetic and typography, put heavy emphasis on typography by using various composition and fonts, generate all in a single react jsx component only"
    });
    console.log(codeExtractooor(response.data));
    
    // const res = codeExtractooor(response.data.code);
    // return res;
  } catch(error){
    console.error("Error:", error);
  }
} 



const Page = () => {
  getCode();
    return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Formatted Code:</h1>
      {/* <CodeDisplay codeData={figet} /> */}
      <p>Hi</p>
      <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    > Press here </button>
    </div>
    )    
};

export default Page;
