'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10181<T> = T extends (infer U)[]
  ? DeepReadonlyArray10181<U>
  : T extends object
  ? DeepReadonlyObject10181<T>
  : T;

interface DeepReadonlyArray10181<T> extends ReadonlyArray<DeepReadonly10181<T>> {}

type DeepReadonlyObject10181<T> = {
  readonly [P in keyof T]: DeepReadonly10181<T[P]>;
};

type UnionToIntersection10181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10181<T> = UnionToIntersection10181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10181<T extends unknown[], V> = [...T, V];

type TuplifyUnion10181<T, L = LastOf10181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10181<TuplifyUnion10181<Exclude<T, L>>, L>;

type DeepPartial10181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10181<T[P]> }
  : T;

type Paths10181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10181<K, Paths10181<T[K], Prev10181[D]>> : never }[keyof T]
  : never;

type Prev10181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10181 {
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

type ConfigPaths10181 = Paths10181<NestedConfig10181>;

interface HeavyProps10181 {
  config: DeepPartial10181<NestedConfig10181>;
  path?: ConfigPaths10181;
}

const HeavyComponent10181 = memo(function HeavyComponent10181({ config }: HeavyProps10181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10181.displayName = 'HeavyComponent10181';
export default HeavyComponent10181;
