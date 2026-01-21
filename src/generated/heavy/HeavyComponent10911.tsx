'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10911<T> = T extends (infer U)[]
  ? DeepReadonlyArray10911<U>
  : T extends object
  ? DeepReadonlyObject10911<T>
  : T;

interface DeepReadonlyArray10911<T> extends ReadonlyArray<DeepReadonly10911<T>> {}

type DeepReadonlyObject10911<T> = {
  readonly [P in keyof T]: DeepReadonly10911<T[P]>;
};

type UnionToIntersection10911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10911<T> = UnionToIntersection10911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10911<T extends unknown[], V> = [...T, V];

type TuplifyUnion10911<T, L = LastOf10911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10911<TuplifyUnion10911<Exclude<T, L>>, L>;

type DeepPartial10911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10911<T[P]> }
  : T;

type Paths10911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10911<K, Paths10911<T[K], Prev10911[D]>> : never }[keyof T]
  : never;

type Prev10911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10911 {
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

type ConfigPaths10911 = Paths10911<NestedConfig10911>;

interface HeavyProps10911 {
  config: DeepPartial10911<NestedConfig10911>;
  path?: ConfigPaths10911;
}

const HeavyComponent10911 = memo(function HeavyComponent10911({ config }: HeavyProps10911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10911.displayName = 'HeavyComponent10911';
export default HeavyComponent10911;
