"use client";

import FormBuilder from '@/components/FormBuilder/FormBuilder'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const BuilderPage = () => {
  const params = useParams();
  const router = useRouter();
  const formId = params.formId as string;
  const [isLoading, setIsLoading] = useState(false);
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);


  useEffect(() => {
    if(formId === "new"){
        const newFormId = uuidv4();
        router.replace(`/builder/${newFormId}`)
        return;
    }

    setIsLoading(true);

  }, [formId])

  const fetchFormConfig = async (id: string) => {
    console.log(`Fetching form ${id}`);
    const stored = localStorage.getItem(`form-${id}`)
    return stored? Promise.resolve(JSON.parse(stored)) : Promise.resolve(null);
  }

  return (
    <FormBuilder formId={formId}/>
  )
}

export default BuilderPage