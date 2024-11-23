import React from 'react'
import Header from '@/components/Header'
import Text from '@/components/Text'
import Compulsory from '@/components/compulsory'
import AdvanceCourses from '@/components/advancecourses'
import Counter from '@/components/counter/Counter'
import Hero from '@/components/hero/Hero'


const page = () => {
  return (
    <div>
      <Hero />
      <br />
      <Text />
      <Compulsory />
      <AdvanceCourses />
    </div>
  )
}

export default page
