"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Components
import Button from '@/components/modules/Button/Button'
import FormInput from '@/components/modules/FormInput/FormInput'

// SweetAlert
import Swal from 'sweetalert2'


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
  const [img, setImg] = useState({});

  const addProduct = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", weight);
    formData.append("suitableFor", suitableFor);
    formData.append("smell", smell);
    formData.append("tags", tags.split("،"));
    formData.append("img", img);


    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      Swal.fire({
        title: "محصول موردنظر با موفقیت ایجاد شد.",
        icon: "success",
        confirmButtonText: "باشه"
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

  return (
    <div className=' flex justify-center items-center flex-col gap-5 w-full'>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row w-full">
        <FormInput type={"text"} placeholder={"نام محصول"} value={name} onChange={(e) => setName(e.target.value)} />
        <FormInput type={"number"} placeholder={"مبلغ محصول(تومان)"} value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row w-full">
        <FormInput type={"number"} placeholder={"وزن(گرم)"} value={weight} onChange={(e) => setWeight(e.target.value)} />
        <FormInput type={"text"} placeholder={"مناسب برای"} value={suitableFor} onChange={(e) => setSuitableFor(e.target.value)} />
      </div>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row w-full">
        <FormInput type={"text"} placeholder={"میزان بو"} value={smell} onChange={(e) => setSmell(e.target.value)} />
        <FormInput type={"text"} placeholder={"تگ های محصول (مثال: قهوه، قهوه ترک ، اسپرسو) "} value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>
      <FormInput type={"text"} placeholder={"توضیحات کوتاه"} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
      <FormInput type={"textarea"} placeholder={"توضیحات بلند"} value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
      <FormInput type={"file"} onChange={(e) => setImg(e.target.files[0])} />
      <div className=" w-full md:w-40">
        <Button text={"افزودن"} fullWith={true} onClick={addProduct} />
      </div>
    </div>
  )
}
