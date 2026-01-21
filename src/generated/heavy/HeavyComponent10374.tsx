'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10374<T> = T extends (infer U)[]
  ? DeepReadonlyArray10374<U>
  : T extends object
  ? DeepReadonlyObject10374<T>
  : T;

interface DeepReadonlyArray10374<T> extends ReadonlyArray<DeepReadonly10374<T>> {}

type DeepReadonlyObject10374<T> = {
  readonly [P in keyof T]: DeepReadonly10374<T[P]>;
};

type UnionToIntersection10374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10374<T> = UnionToIntersection10374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10374<T extends unknown[], V> = [...T, V];

type TuplifyUnion10374<T, L = LastOf10374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10374<TuplifyUnion10374<Exclude<T, L>>, L>;

type DeepPartial10374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10374<T[P]> }
  : T;

type Paths10374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10374<K, Paths10374<T[K], Prev10374[D]>> : never }[keyof T]
  : never;

type Prev10374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10374 {
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

type ConfigPaths10374 = Paths10374<NestedConfig10374>;

interface HeavyProps10374 {
  config: DeepPartial10374<NestedConfig10374>;
  path?: ConfigPaths10374;
}

const HeavyComponent10374 = memo(function HeavyComponent10374({ config }: HeavyProps10374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10374.displayName = 'HeavyComponent10374';
export default HeavyComponent10374;
