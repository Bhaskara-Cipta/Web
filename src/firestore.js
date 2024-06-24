// src/services/firestore.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const fetchDonations = async () => {
  const donationsCollection = collection(db, "donation");
  const donationsSnapshot = await getDocs(donationsCollection);
  const donationsList = donationsSnapshot.docs.map((doc) => doc.data());
  return donationsList;
};

export { fetchDonations };
