'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10737<T> = T extends (infer U)[]
  ? DeepReadonlyArray10737<U>
  : T extends object
  ? DeepReadonlyObject10737<T>
  : T;

interface DeepReadonlyArray10737<T> extends ReadonlyArray<DeepReadonly10737<T>> {}

type DeepReadonlyObject10737<T> = {
  readonly [P in keyof T]: DeepReadonly10737<T[P]>;
};

type UnionToIntersection10737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10737<T> = UnionToIntersection10737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10737<T extends unknown[], V> = [...T, V];

type TuplifyUnion10737<T, L = LastOf10737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10737<TuplifyUnion10737<Exclude<T, L>>, L>;

type DeepPartial10737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10737<T[P]> }
  : T;

type Paths10737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10737<K, Paths10737<T[K], Prev10737[D]>> : never }[keyof T]
  : never;

type Prev10737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10737 {
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

type ConfigPaths10737 = Paths10737<NestedConfig10737>;

interface HeavyProps10737 {
  config: DeepPartial10737<NestedConfig10737>;
  path?: ConfigPaths10737;
}

const HeavyComponent10737 = memo(function HeavyComponent10737({ config }: HeavyProps10737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10737.displayName = 'HeavyComponent10737';
export default HeavyComponent10737;
