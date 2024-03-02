"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface VolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const VolModal: React.FC<VolModalProps> = ({
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
      title="New Volunteers Requests"
      description="Approve the following requests"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="mt-5">
        <div className="text-xl">
            Aman Gupta
        </div>
        <div>
            Please approve my requests
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
      <div className="mt-5">
        <div className="text-xl">
            Neha Shah
        </div>
        <div>
            Please approve my requests
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
      <div className="mt-5">
        <div className="text-xl">
            Jay Patel
        </div>
        <div>
            Please approve my requests
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
