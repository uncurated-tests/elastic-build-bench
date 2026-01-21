'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8891<T> = T extends (infer U)[]
  ? DeepReadonlyArray8891<U>
  : T extends object
  ? DeepReadonlyObject8891<T>
  : T;

interface DeepReadonlyArray8891<T> extends ReadonlyArray<DeepReadonly8891<T>> {}

type DeepReadonlyObject8891<T> = {
  readonly [P in keyof T]: DeepReadonly8891<T[P]>;
};

type UnionToIntersection8891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8891<T> = UnionToIntersection8891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8891<T extends unknown[], V> = [...T, V];

type TuplifyUnion8891<T, L = LastOf8891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8891<TuplifyUnion8891<Exclude<T, L>>, L>;

type DeepPartial8891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8891<T[P]> }
  : T;

type Paths8891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8891<K, Paths8891<T[K], Prev8891[D]>> : never }[keyof T]
  : never;

type Prev8891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8891 {
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

type ConfigPaths8891 = Paths8891<NestedConfig8891>;

interface HeavyProps8891 {
  config: DeepPartial8891<NestedConfig8891>;
  path?: ConfigPaths8891;
}

const HeavyComponent8891 = memo(function HeavyComponent8891({ config }: HeavyProps8891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8891.displayName = 'HeavyComponent8891';
export default HeavyComponent8891;
