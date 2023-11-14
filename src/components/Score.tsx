function Score({ score }: { score: number[] }) {
    return (
        <div className="text-center">
            <div className="bg-black text-white p-6 inline-block rounded-md">
                <p className="text-2xl mb-3">Score</p>
                <div className="flex divide-x divide-white">
                    <div className="px-3">
                        <p>Joueur</p>
                        <p className="text-xl">{score[0]}</p>
                    </div>
                    <div className="px-3">
                        <p>Ordinateur</p>
                        <p className="text-xl">{score[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score;
