'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10973<T> = T extends (infer U)[]
  ? DeepReadonlyArray10973<U>
  : T extends object
  ? DeepReadonlyObject10973<T>
  : T;

interface DeepReadonlyArray10973<T> extends ReadonlyArray<DeepReadonly10973<T>> {}

type DeepReadonlyObject10973<T> = {
  readonly [P in keyof T]: DeepReadonly10973<T[P]>;
};

type UnionToIntersection10973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10973<T> = UnionToIntersection10973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10973<T extends unknown[], V> = [...T, V];

type TuplifyUnion10973<T, L = LastOf10973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10973<TuplifyUnion10973<Exclude<T, L>>, L>;

type DeepPartial10973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10973<T[P]> }
  : T;

type Paths10973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10973<K, Paths10973<T[K], Prev10973[D]>> : never }[keyof T]
  : never;

type Prev10973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10973 {
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

type ConfigPaths10973 = Paths10973<NestedConfig10973>;

interface HeavyProps10973 {
  config: DeepPartial10973<NestedConfig10973>;
  path?: ConfigPaths10973;
}

const HeavyComponent10973 = memo(function HeavyComponent10973({ config }: HeavyProps10973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10973.displayName = 'HeavyComponent10973';
export default HeavyComponent10973;
