'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10609<T> = T extends (infer U)[]
  ? DeepReadonlyArray10609<U>
  : T extends object
  ? DeepReadonlyObject10609<T>
  : T;

interface DeepReadonlyArray10609<T> extends ReadonlyArray<DeepReadonly10609<T>> {}

type DeepReadonlyObject10609<T> = {
  readonly [P in keyof T]: DeepReadonly10609<T[P]>;
};

type UnionToIntersection10609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10609<T> = UnionToIntersection10609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10609<T extends unknown[], V> = [...T, V];

type TuplifyUnion10609<T, L = LastOf10609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10609<TuplifyUnion10609<Exclude<T, L>>, L>;

type DeepPartial10609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10609<T[P]> }
  : T;

type Paths10609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10609<K, Paths10609<T[K], Prev10609[D]>> : never }[keyof T]
  : never;

type Prev10609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10609 {
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

type ConfigPaths10609 = Paths10609<NestedConfig10609>;

interface HeavyProps10609 {
  config: DeepPartial10609<NestedConfig10609>;
  path?: ConfigPaths10609;
}

const HeavyComponent10609 = memo(function HeavyComponent10609({ config }: HeavyProps10609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10609.displayName = 'HeavyComponent10609';
export default HeavyComponent10609;
