'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10514<T> = T extends (infer U)[]
  ? DeepReadonlyArray10514<U>
  : T extends object
  ? DeepReadonlyObject10514<T>
  : T;

interface DeepReadonlyArray10514<T> extends ReadonlyArray<DeepReadonly10514<T>> {}

type DeepReadonlyObject10514<T> = {
  readonly [P in keyof T]: DeepReadonly10514<T[P]>;
};

type UnionToIntersection10514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10514<T> = UnionToIntersection10514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10514<T extends unknown[], V> = [...T, V];

type TuplifyUnion10514<T, L = LastOf10514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10514<TuplifyUnion10514<Exclude<T, L>>, L>;

type DeepPartial10514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10514<T[P]> }
  : T;

type Paths10514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10514<K, Paths10514<T[K], Prev10514[D]>> : never }[keyof T]
  : never;

type Prev10514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10514 {
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

type ConfigPaths10514 = Paths10514<NestedConfig10514>;

interface HeavyProps10514 {
  config: DeepPartial10514<NestedConfig10514>;
  path?: ConfigPaths10514;
}

const HeavyComponent10514 = memo(function HeavyComponent10514({ config }: HeavyProps10514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10514.displayName = 'HeavyComponent10514';
export default HeavyComponent10514;
