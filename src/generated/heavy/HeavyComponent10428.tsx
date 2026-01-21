'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10428<T> = T extends (infer U)[]
  ? DeepReadonlyArray10428<U>
  : T extends object
  ? DeepReadonlyObject10428<T>
  : T;

interface DeepReadonlyArray10428<T> extends ReadonlyArray<DeepReadonly10428<T>> {}

type DeepReadonlyObject10428<T> = {
  readonly [P in keyof T]: DeepReadonly10428<T[P]>;
};

type UnionToIntersection10428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10428<T> = UnionToIntersection10428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10428<T extends unknown[], V> = [...T, V];

type TuplifyUnion10428<T, L = LastOf10428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10428<TuplifyUnion10428<Exclude<T, L>>, L>;

type DeepPartial10428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10428<T[P]> }
  : T;

type Paths10428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10428<K, Paths10428<T[K], Prev10428[D]>> : never }[keyof T]
  : never;

type Prev10428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10428 {
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

type ConfigPaths10428 = Paths10428<NestedConfig10428>;

interface HeavyProps10428 {
  config: DeepPartial10428<NestedConfig10428>;
  path?: ConfigPaths10428;
}

const HeavyComponent10428 = memo(function HeavyComponent10428({ config }: HeavyProps10428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10428.displayName = 'HeavyComponent10428';
export default HeavyComponent10428;
