'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10603<T> = T extends (infer U)[]
  ? DeepReadonlyArray10603<U>
  : T extends object
  ? DeepReadonlyObject10603<T>
  : T;

interface DeepReadonlyArray10603<T> extends ReadonlyArray<DeepReadonly10603<T>> {}

type DeepReadonlyObject10603<T> = {
  readonly [P in keyof T]: DeepReadonly10603<T[P]>;
};

type UnionToIntersection10603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10603<T> = UnionToIntersection10603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10603<T extends unknown[], V> = [...T, V];

type TuplifyUnion10603<T, L = LastOf10603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10603<TuplifyUnion10603<Exclude<T, L>>, L>;

type DeepPartial10603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10603<T[P]> }
  : T;

type Paths10603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10603<K, Paths10603<T[K], Prev10603[D]>> : never }[keyof T]
  : never;

type Prev10603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10603 {
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

type ConfigPaths10603 = Paths10603<NestedConfig10603>;

interface HeavyProps10603 {
  config: DeepPartial10603<NestedConfig10603>;
  path?: ConfigPaths10603;
}

const HeavyComponent10603 = memo(function HeavyComponent10603({ config }: HeavyProps10603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10603.displayName = 'HeavyComponent10603';
export default HeavyComponent10603;
