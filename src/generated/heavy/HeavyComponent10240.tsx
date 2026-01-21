'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10240<T> = T extends (infer U)[]
  ? DeepReadonlyArray10240<U>
  : T extends object
  ? DeepReadonlyObject10240<T>
  : T;

interface DeepReadonlyArray10240<T> extends ReadonlyArray<DeepReadonly10240<T>> {}

type DeepReadonlyObject10240<T> = {
  readonly [P in keyof T]: DeepReadonly10240<T[P]>;
};

type UnionToIntersection10240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10240<T> = UnionToIntersection10240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10240<T extends unknown[], V> = [...T, V];

type TuplifyUnion10240<T, L = LastOf10240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10240<TuplifyUnion10240<Exclude<T, L>>, L>;

type DeepPartial10240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10240<T[P]> }
  : T;

type Paths10240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10240<K, Paths10240<T[K], Prev10240[D]>> : never }[keyof T]
  : never;

type Prev10240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10240 {
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

type ConfigPaths10240 = Paths10240<NestedConfig10240>;

interface HeavyProps10240 {
  config: DeepPartial10240<NestedConfig10240>;
  path?: ConfigPaths10240;
}

const HeavyComponent10240 = memo(function HeavyComponent10240({ config }: HeavyProps10240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10240.displayName = 'HeavyComponent10240';
export default HeavyComponent10240;
