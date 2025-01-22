export default function Friend({friend}) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>
                {friend.name}
            </h3>
            {friend.balance < 0 && (
                    <p className="red">
                        Kamu Berhutang Rp. {friend.name} Ke {Math.abs(friend.balance)} $
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className="green">
                        {friend.name} Berhutang Rp. {friend.balance} Ke kamu
                    </p>
                )}
                {friend.balance === 0 && 
                    <p>
                        Kamu dan {friend.name} tidak memiliki hutang
                    </p>
                }
                <button className="button">
                    Pilih
                </button>
        </li>
    )
}