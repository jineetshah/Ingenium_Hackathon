"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import donateimg from "@/public/images/donateqr.png";
import Image from "next/image";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Support the Community"
      description="We appreciate whatever you can contribute"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="mt-5 flex justify-center">
        <Image 
            src={donateimg}
            alt="QR code"
        />
      </div>
      
    </Modal>
  );
};
