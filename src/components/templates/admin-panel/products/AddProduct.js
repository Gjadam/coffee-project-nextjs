"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Components
import Button from '@/components/modules/Button/Button'
import FormInput from '@/components/modules/FormInput/FormInput'

// SweetAlert
import toastAlert from '@/utils/toastAlert'


export default function AddProduct() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [smell, setSmell] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState("");

  const [isImageUploaded, setIsImageUploaded] = useState(false)

  const addProduct = async () => {
    setIsImageUploaded(true)
    const responseUploadImage = await fetch(
      `/api/products/upload?filename=${img.name}`,
      {
        method: 'POST',
        body: img,
      },
    );
    if (responseUploadImage.status === 201) {
      setIsImageUploaded(false)
      const newBlob = await responseUploadImage.json()

      const product = {
        name,
        price,
        shortDescription,
        longDescription,
        weight,
        suitableFor,
        smell,
        tags,
        img: newBlob.blob.url
      }

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (res.status === 201) {
        toastAlert.fire({
          text: "محصول موردنظر با موفقیت ایجاد شد.",
          icon: "success",
        }).then(() => {
          router.refresh()
        })
        setName("")
        setPrice("")
        setShortDescription("")
        setLongDescription("")
        setWeight("")
        setSuitableFor("")
        setSmell("")
        setTags("")
        setImg({})
      }
    }

  }

  return (
    <>
      <div className=' flex justify-center items-center flex-col gap-5 w-full'>
        <div className="flex justify-center items-center gap-5 flex-col md:flex-row w-full">
          <FormInput type={"text"} placeholder={"نام محصول"} value={name} onChange={(e) => setName(e.target.value)} error={!name && "نام محصول را وارد کنید"} />
          <FormInput type={"number"} placeholder={"مبلغ محصول(تومان)"} value={price} onChange={(e) => setPrice(e.target.value)}  error={!price && "قیمت محصول را وارد کنید"}/>
        </div>
        <div className="flex justify-center items-center gap-5 flex-col md:flex-row w-full">
          <FormInput type={"number"} placeholder={"وزن(گرم)"} value={weight} onChange={(e) => setWeight(e.target.value)}  error={!weight && "وزن محصول را وارد کنید"}/>
          <FormInput type={"text"} placeholder={"مناسب برای"} value={suitableFor} onChange={(e) => setSuitableFor(e.target.value)}  error={!suitableFor && "محصول مناسب چه افرادی است"}/>
        </div>
        <div className="flex justify-center items-center gap-5 flex-col md:flex-row w-full">
          <FormInput type={"text"} placeholder={"میزان بو"} value={smell} onChange={(e) => setSmell(e.target.value)}  error={!smell && "میزان بوی محصول را وارد کنید"}/>
          <FormInput type={"text"} placeholder={"تگ های محصول (مثال: قهوه، قهوه ترک ، اسپرسو) "} value={tags} onChange={(e) => setTags(e.target.value)}  error={!tags && "تگ های محصول را وارد کنید"}/>
        </div>
        <FormInput type={"text"} placeholder={"توضیحات کوتاه"} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}  error={!shortDescription && "توضیحات کوتاه محصول را وارد کنید"}/>
        <FormInput type={"textarea"} placeholder={"توضیحات بلند"} value={longDescription} onChange={(e) => setLongDescription(e.target.value)}  error={!longDescription && "توضیحات بلند محصول را وارد کنید"}/>
        <FormInput type={"file"} onChange={(e) => setImg(e.target.files[0])} />
        <div className=" w-full md:w-40">
          <Button
            text={"افزودن"}
            fullWith={true}
            onClick={addProduct}
            isDisabled={name && price && shortDescription && longDescription && weight && suitableFor && smell && tags && img ? false : true}
          />
        </div>
      </div>
      <div className={`fixed ${isImageUploaded ? "right-5" : " -right-96"} bottom-5  z-50 w-64 transition-all`}>
        <div className="flex justify-between items-center shadow-lg border-1 border-primary bg-white px-2 rounded-2xl overflow-hidden">
          <span>درحال آپلود عکس</span>
          <Image
            src={'/images/gif/loading.gif'}
            alt='loading'
            width={50}
            height={0}
            unoptimized={true}
          />
        </div>
      </div>
    </>
  )
}
