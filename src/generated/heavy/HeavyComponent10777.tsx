'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10777<T> = T extends (infer U)[]
  ? DeepReadonlyArray10777<U>
  : T extends object
  ? DeepReadonlyObject10777<T>
  : T;

interface DeepReadonlyArray10777<T> extends ReadonlyArray<DeepReadonly10777<T>> {}

type DeepReadonlyObject10777<T> = {
  readonly [P in keyof T]: DeepReadonly10777<T[P]>;
};

type UnionToIntersection10777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10777<T> = UnionToIntersection10777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10777<T extends unknown[], V> = [...T, V];

type TuplifyUnion10777<T, L = LastOf10777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10777<TuplifyUnion10777<Exclude<T, L>>, L>;

type DeepPartial10777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10777<T[P]> }
  : T;

type Paths10777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10777<K, Paths10777<T[K], Prev10777[D]>> : never }[keyof T]
  : never;

type Prev10777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10777 {
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

type ConfigPaths10777 = Paths10777<NestedConfig10777>;

interface HeavyProps10777 {
  config: DeepPartial10777<NestedConfig10777>;
  path?: ConfigPaths10777;
}

const HeavyComponent10777 = memo(function HeavyComponent10777({ config }: HeavyProps10777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10777.displayName = 'HeavyComponent10777';
export default HeavyComponent10777;
