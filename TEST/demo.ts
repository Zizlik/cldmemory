import { MemoryService } from '../src/services/memory';
import { MemoryType } from '../src/types/memory';

async function main() {
  const service = new MemoryService();
  await service.initialize();

  // Create a memory entry
  const memory = await service.createMemory(
    'Toto je pouze testovací ukázka pro složku TEST.',
    MemoryType.EPISODIC,
    { tags: ['test'] },
    0.7,
    'Ukázková paměť'
  );
  console.log('Vytvořena paměť:', memory.id);

  // Search for it
  const results = await service.searchMemories({
    query: 'testovací',
    limit: 5,
  });
  console.log('Nalezené výsledky:', results.map(r => r.id));
}

main().catch(err => {
  console.error('Chyba během ukázky:', err);
});
