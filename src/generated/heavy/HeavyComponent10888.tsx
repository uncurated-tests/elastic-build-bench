'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10888<T> = T extends (infer U)[]
  ? DeepReadonlyArray10888<U>
  : T extends object
  ? DeepReadonlyObject10888<T>
  : T;

interface DeepReadonlyArray10888<T> extends ReadonlyArray<DeepReadonly10888<T>> {}

type DeepReadonlyObject10888<T> = {
  readonly [P in keyof T]: DeepReadonly10888<T[P]>;
};

type UnionToIntersection10888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10888<T> = UnionToIntersection10888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10888<T extends unknown[], V> = [...T, V];

type TuplifyUnion10888<T, L = LastOf10888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10888<TuplifyUnion10888<Exclude<T, L>>, L>;

type DeepPartial10888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10888<T[P]> }
  : T;

type Paths10888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10888<K, Paths10888<T[K], Prev10888[D]>> : never }[keyof T]
  : never;

type Prev10888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10888 {
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

type ConfigPaths10888 = Paths10888<NestedConfig10888>;

interface HeavyProps10888 {
  config: DeepPartial10888<NestedConfig10888>;
  path?: ConfigPaths10888;
}

const HeavyComponent10888 = memo(function HeavyComponent10888({ config }: HeavyProps10888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10888.displayName = 'HeavyComponent10888';
export default HeavyComponent10888;
