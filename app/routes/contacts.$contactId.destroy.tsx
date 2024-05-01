import { ActionFunctionArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteContact } from "~/data";

export const action = async ({params}: ActionFunctionArgs) => {
    invariant(params.contactId, "ContactId cannot be missing.");
    await deleteContact(params.contactId);
    return redirect('/');
}