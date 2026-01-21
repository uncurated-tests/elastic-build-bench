'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10126<T> = T extends (infer U)[]
  ? DeepReadonlyArray10126<U>
  : T extends object
  ? DeepReadonlyObject10126<T>
  : T;

interface DeepReadonlyArray10126<T> extends ReadonlyArray<DeepReadonly10126<T>> {}

type DeepReadonlyObject10126<T> = {
  readonly [P in keyof T]: DeepReadonly10126<T[P]>;
};

type UnionToIntersection10126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10126<T> = UnionToIntersection10126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10126<T extends unknown[], V> = [...T, V];

type TuplifyUnion10126<T, L = LastOf10126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10126<TuplifyUnion10126<Exclude<T, L>>, L>;

type DeepPartial10126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10126<T[P]> }
  : T;

type Paths10126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10126<K, Paths10126<T[K], Prev10126[D]>> : never }[keyof T]
  : never;

type Prev10126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10126 {
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

type ConfigPaths10126 = Paths10126<NestedConfig10126>;

interface HeavyProps10126 {
  config: DeepPartial10126<NestedConfig10126>;
  path?: ConfigPaths10126;
}

const HeavyComponent10126 = memo(function HeavyComponent10126({ config }: HeavyProps10126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10126.displayName = 'HeavyComponent10126';
export default HeavyComponent10126;
