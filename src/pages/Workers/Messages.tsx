import { useEffect, useState } from "react";
import axios from "axios";

type ContactType = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const Messages = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3001/contacts");
        setContacts(res.data);
      } catch (error) {
        console.error("Gabim gjatë marrjes së mesazheve:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Të gjitha mesazhet
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {contacts.length === 0 ? (
          <p>Nuk ka mesazhe për të shfaqur.</p>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-1">{contact.fullName}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {contact.email} | {contact.phoneNumber}
              </p>
              <p className="text-gray-800">{contact.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
