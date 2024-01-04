import { useState } from "react";
import { useEffect } from "react";



export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function getCont() {
      try {
        const response = await fetch(` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCont();
  }, []);

  return (
    <>
   {console.log(contact.name)}
    </>

  );
}
