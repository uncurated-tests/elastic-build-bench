'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8120<T> = T extends (infer U)[]
  ? DeepReadonlyArray8120<U>
  : T extends object
  ? DeepReadonlyObject8120<T>
  : T;

interface DeepReadonlyArray8120<T> extends ReadonlyArray<DeepReadonly8120<T>> {}

type DeepReadonlyObject8120<T> = {
  readonly [P in keyof T]: DeepReadonly8120<T[P]>;
};

type UnionToIntersection8120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8120<T> = UnionToIntersection8120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8120<T extends unknown[], V> = [...T, V];

type TuplifyUnion8120<T, L = LastOf8120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8120<TuplifyUnion8120<Exclude<T, L>>, L>;

type DeepPartial8120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8120<T[P]> }
  : T;

type Paths8120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8120<K, Paths8120<T[K], Prev8120[D]>> : never }[keyof T]
  : never;

type Prev8120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8120 {
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

type ConfigPaths8120 = Paths8120<NestedConfig8120>;

interface HeavyProps8120 {
  config: DeepPartial8120<NestedConfig8120>;
  path?: ConfigPaths8120;
}

const HeavyComponent8120 = memo(function HeavyComponent8120({ config }: HeavyProps8120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8120.displayName = 'HeavyComponent8120';
export default HeavyComponent8120;
