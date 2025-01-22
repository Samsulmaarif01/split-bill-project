import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [amount, setAmount] = useState("");
    const [myBill, setMyBill] = useState("");
    const friendBill = amount ? amount - myBill : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();

        if (!amount || !myBill) return;
        onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
    }

    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Patungan Yuk {selectedFriend.name} ✨</h2>
            <label htmlFor="">💰Total Biaya</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <label htmlFor="">🧑 Tagihan Kamu</label>
            <input
                type="number"
                value={myBill}
                onChange={(e) => setMyBill(Number(e.target.value))}
            />
            <label htmlFor="">👦 Tagihan {selectedFriend.name}</label>
            <input type="number" value={friendBill} disabled />

            <label htmlFor="">Ditalangin Siapa?</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">Kamu</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    );
}
