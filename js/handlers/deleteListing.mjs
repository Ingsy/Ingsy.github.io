import { removeListing } from "../listings/delete.mjs";


export async function deleteListing() {

    const delBtn = document.querySelectorAll(".del-button");
    for (let i = 0; i < delBtn.length; i++) {
        //const ArrayVal = null;
        //const arr = ArrayVal || [];
        //console.log('The length is', arr.length);
        delBtn[i].addEventListener("click", async () => {

            const delConfirm = "Are you sure you want to delete this listing?";

            if (confirm(delConfirm)) {
                await removeListing(delBtn[i].id);
                window.location.reload();
            }
        });
    }
}