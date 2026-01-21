'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10222<T> = T extends (infer U)[]
  ? DeepReadonlyArray10222<U>
  : T extends object
  ? DeepReadonlyObject10222<T>
  : T;

interface DeepReadonlyArray10222<T> extends ReadonlyArray<DeepReadonly10222<T>> {}

type DeepReadonlyObject10222<T> = {
  readonly [P in keyof T]: DeepReadonly10222<T[P]>;
};

type UnionToIntersection10222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10222<T> = UnionToIntersection10222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10222<T extends unknown[], V> = [...T, V];

type TuplifyUnion10222<T, L = LastOf10222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10222<TuplifyUnion10222<Exclude<T, L>>, L>;

type DeepPartial10222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10222<T[P]> }
  : T;

type Paths10222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10222<K, Paths10222<T[K], Prev10222[D]>> : never }[keyof T]
  : never;

type Prev10222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10222 {
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

type ConfigPaths10222 = Paths10222<NestedConfig10222>;

interface HeavyProps10222 {
  config: DeepPartial10222<NestedConfig10222>;
  path?: ConfigPaths10222;
}

const HeavyComponent10222 = memo(function HeavyComponent10222({ config }: HeavyProps10222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10222.displayName = 'HeavyComponent10222';
export default HeavyComponent10222;
