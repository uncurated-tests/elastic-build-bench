'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10293<T> = T extends (infer U)[]
  ? DeepReadonlyArray10293<U>
  : T extends object
  ? DeepReadonlyObject10293<T>
  : T;

interface DeepReadonlyArray10293<T> extends ReadonlyArray<DeepReadonly10293<T>> {}

type DeepReadonlyObject10293<T> = {
  readonly [P in keyof T]: DeepReadonly10293<T[P]>;
};

type UnionToIntersection10293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10293<T> = UnionToIntersection10293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10293<T extends unknown[], V> = [...T, V];

type TuplifyUnion10293<T, L = LastOf10293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10293<TuplifyUnion10293<Exclude<T, L>>, L>;

type DeepPartial10293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10293<T[P]> }
  : T;

type Paths10293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10293<K, Paths10293<T[K], Prev10293[D]>> : never }[keyof T]
  : never;

type Prev10293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10293 {
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

type ConfigPaths10293 = Paths10293<NestedConfig10293>;

interface HeavyProps10293 {
  config: DeepPartial10293<NestedConfig10293>;
  path?: ConfigPaths10293;
}

const HeavyComponent10293 = memo(function HeavyComponent10293({ config }: HeavyProps10293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10293.displayName = 'HeavyComponent10293';
export default HeavyComponent10293;
