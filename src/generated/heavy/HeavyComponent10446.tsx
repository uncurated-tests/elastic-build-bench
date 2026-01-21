'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10446<T> = T extends (infer U)[]
  ? DeepReadonlyArray10446<U>
  : T extends object
  ? DeepReadonlyObject10446<T>
  : T;

interface DeepReadonlyArray10446<T> extends ReadonlyArray<DeepReadonly10446<T>> {}

type DeepReadonlyObject10446<T> = {
  readonly [P in keyof T]: DeepReadonly10446<T[P]>;
};

type UnionToIntersection10446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10446<T> = UnionToIntersection10446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10446<T extends unknown[], V> = [...T, V];

type TuplifyUnion10446<T, L = LastOf10446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10446<TuplifyUnion10446<Exclude<T, L>>, L>;

type DeepPartial10446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10446<T[P]> }
  : T;

type Paths10446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10446<K, Paths10446<T[K], Prev10446[D]>> : never }[keyof T]
  : never;

type Prev10446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10446 {
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

type ConfigPaths10446 = Paths10446<NestedConfig10446>;

interface HeavyProps10446 {
  config: DeepPartial10446<NestedConfig10446>;
  path?: ConfigPaths10446;
}

const HeavyComponent10446 = memo(function HeavyComponent10446({ config }: HeavyProps10446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10446.displayName = 'HeavyComponent10446';
export default HeavyComponent10446;
