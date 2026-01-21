'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10800<T> = T extends (infer U)[]
  ? DeepReadonlyArray10800<U>
  : T extends object
  ? DeepReadonlyObject10800<T>
  : T;

interface DeepReadonlyArray10800<T> extends ReadonlyArray<DeepReadonly10800<T>> {}

type DeepReadonlyObject10800<T> = {
  readonly [P in keyof T]: DeepReadonly10800<T[P]>;
};

type UnionToIntersection10800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10800<T> = UnionToIntersection10800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10800<T extends unknown[], V> = [...T, V];

type TuplifyUnion10800<T, L = LastOf10800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10800<TuplifyUnion10800<Exclude<T, L>>, L>;

type DeepPartial10800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10800<T[P]> }
  : T;

type Paths10800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10800<K, Paths10800<T[K], Prev10800[D]>> : never }[keyof T]
  : never;

type Prev10800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10800 {
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

type ConfigPaths10800 = Paths10800<NestedConfig10800>;

interface HeavyProps10800 {
  config: DeepPartial10800<NestedConfig10800>;
  path?: ConfigPaths10800;
}

const HeavyComponent10800 = memo(function HeavyComponent10800({ config }: HeavyProps10800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10800.displayName = 'HeavyComponent10800';
export default HeavyComponent10800;
