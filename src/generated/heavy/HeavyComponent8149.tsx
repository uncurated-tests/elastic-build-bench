'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8149<T> = T extends (infer U)[]
  ? DeepReadonlyArray8149<U>
  : T extends object
  ? DeepReadonlyObject8149<T>
  : T;

interface DeepReadonlyArray8149<T> extends ReadonlyArray<DeepReadonly8149<T>> {}

type DeepReadonlyObject8149<T> = {
  readonly [P in keyof T]: DeepReadonly8149<T[P]>;
};

type UnionToIntersection8149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8149<T> = UnionToIntersection8149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8149<T extends unknown[], V> = [...T, V];

type TuplifyUnion8149<T, L = LastOf8149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8149<TuplifyUnion8149<Exclude<T, L>>, L>;

type DeepPartial8149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8149<T[P]> }
  : T;

type Paths8149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8149<K, Paths8149<T[K], Prev8149[D]>> : never }[keyof T]
  : never;

type Prev8149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8149 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8149 = Paths8149<NestedConfig8149>;

interface HeavyProps8149 {
  config: DeepPartial8149<NestedConfig8149>;
  path?: ConfigPaths8149;
}

const HeavyComponent8149 = memo(function HeavyComponent8149({ config }: HeavyProps8149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8149.displayName = 'HeavyComponent8149';
export default HeavyComponent8149;
