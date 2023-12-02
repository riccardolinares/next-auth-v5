import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function ChatLimit({
  open,
  setOpen,
}: {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upgrade to continue!</DialogTitle>
          <DialogDescription>
            You have reached your maximum message quota. Please upgrade your
            plan to continue chatting.
          </DialogDescription>
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
          <Button>
            Upgrade <Rocket />
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    // <AlertDialog open={open} onOpenChange={setOpen}>
    //   <AlertDialogContent>
    //     <AlertDialogHeader>
    //       <AlertDialogTitle>Upgrade to continue!</AlertDialogTitle>
    //       <AlertDialogDescription>
    //         You have reached your maximum message quota. Please upgrade your
    //         plan to continue chatting.
    //       </AlertDialogDescription>
    //     </AlertDialogHeader>
    //     <AlertDialogFooter>
    //       <AlertDialogCancel>Cancel</AlertDialogCancel>
    //       <AlertDialogAction>
    //         Upgrade <Rocket />
    //       </AlertDialogAction>
    //     </AlertDialogFooter>
    //   </AlertDialogContent>
    // </AlertDialog>
  );
}
