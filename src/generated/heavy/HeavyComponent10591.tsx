'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10591<T> = T extends (infer U)[]
  ? DeepReadonlyArray10591<U>
  : T extends object
  ? DeepReadonlyObject10591<T>
  : T;

interface DeepReadonlyArray10591<T> extends ReadonlyArray<DeepReadonly10591<T>> {}

type DeepReadonlyObject10591<T> = {
  readonly [P in keyof T]: DeepReadonly10591<T[P]>;
};

type UnionToIntersection10591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10591<T> = UnionToIntersection10591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10591<T extends unknown[], V> = [...T, V];

type TuplifyUnion10591<T, L = LastOf10591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10591<TuplifyUnion10591<Exclude<T, L>>, L>;

type DeepPartial10591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10591<T[P]> }
  : T;

type Paths10591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10591<K, Paths10591<T[K], Prev10591[D]>> : never }[keyof T]
  : never;

type Prev10591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10591 {
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

type ConfigPaths10591 = Paths10591<NestedConfig10591>;

interface HeavyProps10591 {
  config: DeepPartial10591<NestedConfig10591>;
  path?: ConfigPaths10591;
}

const HeavyComponent10591 = memo(function HeavyComponent10591({ config }: HeavyProps10591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10591.displayName = 'HeavyComponent10591';
export default HeavyComponent10591;
