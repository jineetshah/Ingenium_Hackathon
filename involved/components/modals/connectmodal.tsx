"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({
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
      title="Connect With Us"
      description="Do not forget to check our social media handles"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        <div className="flex">
          <Mail className="mr-2"/> hamaraapnango.gmail.com
        </div>
        <div className="flex">
            <Phone className="mr-2"/> 9891222312
        </div>
        <div className="flex">
            <MapPin className="mr-2"/> Ellisbridge, Ahmedabad
        </div>
        <div className="flex">
            <Linkedin className="mr-2"/> Linkedin acc
        </div>
        <div className="flex">
            <Twitter className="mr-2"/> Twitter handle
        </div>
        <div className="flex">
            <Instagram className="mr-2"/> Insta handle
        </div>
      </div>
    </Modal>
  );
};
