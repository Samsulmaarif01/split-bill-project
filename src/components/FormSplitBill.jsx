export default function FormSplitBill() {
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan Yuk✨</h2>
            <label htmlFor="">💰Total Biaya</label>
            <input type="text" />
            <label htmlFor="">🧑 Tagihan Kamu</label>
            <input type="text" />
            <label htmlFor="">👦 Tagihan Teman</label>
            <input type="text" disabled/>

            <label htmlFor="">Ditalangin Siapa?</label>
            <select name="" id="">
                <option value="user">Kamu</option>
                <option value="friend">X</option>
            </select>

            <button className="button">
                Tambah
            </button>
        </form>
    )
}