"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface ColabModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const ColabModal: React.FC<ColabModalProps> = ({
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
      title="New Collaboration Requests"
      description="Approve the following requests"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="mt-5">
        <div className="text-xl">
            Dominos
        </div>
        <div>
            We would love to help your cause
        </div>
        <div className="space-x-2 flex items-center w-full">
          <Button disabled={loading} onClick={onConfirm}>
            Disapprove
          </Button>
          <Button disabled={loading} onClick={onClose}>
            Approve
          </Button>
        </div>
      </div>
      
    </Modal>
  );
};
