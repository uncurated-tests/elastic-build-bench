'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10636<T> = T extends (infer U)[]
  ? DeepReadonlyArray10636<U>
  : T extends object
  ? DeepReadonlyObject10636<T>
  : T;

interface DeepReadonlyArray10636<T> extends ReadonlyArray<DeepReadonly10636<T>> {}

type DeepReadonlyObject10636<T> = {
  readonly [P in keyof T]: DeepReadonly10636<T[P]>;
};

type UnionToIntersection10636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10636<T> = UnionToIntersection10636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10636<T extends unknown[], V> = [...T, V];

type TuplifyUnion10636<T, L = LastOf10636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10636<TuplifyUnion10636<Exclude<T, L>>, L>;

type DeepPartial10636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10636<T[P]> }
  : T;

type Paths10636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10636<K, Paths10636<T[K], Prev10636[D]>> : never }[keyof T]
  : never;

type Prev10636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10636 {
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

type ConfigPaths10636 = Paths10636<NestedConfig10636>;

interface HeavyProps10636 {
  config: DeepPartial10636<NestedConfig10636>;
  path?: ConfigPaths10636;
}

const HeavyComponent10636 = memo(function HeavyComponent10636({ config }: HeavyProps10636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10636.displayName = 'HeavyComponent10636';
export default HeavyComponent10636;
