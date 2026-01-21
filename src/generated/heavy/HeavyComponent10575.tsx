'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10575<T> = T extends (infer U)[]
  ? DeepReadonlyArray10575<U>
  : T extends object
  ? DeepReadonlyObject10575<T>
  : T;

interface DeepReadonlyArray10575<T> extends ReadonlyArray<DeepReadonly10575<T>> {}

type DeepReadonlyObject10575<T> = {
  readonly [P in keyof T]: DeepReadonly10575<T[P]>;
};

type UnionToIntersection10575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10575<T> = UnionToIntersection10575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10575<T extends unknown[], V> = [...T, V];

type TuplifyUnion10575<T, L = LastOf10575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10575<TuplifyUnion10575<Exclude<T, L>>, L>;

type DeepPartial10575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10575<T[P]> }
  : T;

type Paths10575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10575<K, Paths10575<T[K], Prev10575[D]>> : never }[keyof T]
  : never;

type Prev10575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10575 {
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

type ConfigPaths10575 = Paths10575<NestedConfig10575>;

interface HeavyProps10575 {
  config: DeepPartial10575<NestedConfig10575>;
  path?: ConfigPaths10575;
}

const HeavyComponent10575 = memo(function HeavyComponent10575({ config }: HeavyProps10575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10575.displayName = 'HeavyComponent10575';
export default HeavyComponent10575;
