'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10012<T> = T extends (infer U)[]
  ? DeepReadonlyArray10012<U>
  : T extends object
  ? DeepReadonlyObject10012<T>
  : T;

interface DeepReadonlyArray10012<T> extends ReadonlyArray<DeepReadonly10012<T>> {}

type DeepReadonlyObject10012<T> = {
  readonly [P in keyof T]: DeepReadonly10012<T[P]>;
};

type UnionToIntersection10012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10012<T> = UnionToIntersection10012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10012<T extends unknown[], V> = [...T, V];

type TuplifyUnion10012<T, L = LastOf10012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10012<TuplifyUnion10012<Exclude<T, L>>, L>;

type DeepPartial10012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10012<T[P]> }
  : T;

type Paths10012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10012<K, Paths10012<T[K], Prev10012[D]>> : never }[keyof T]
  : never;

type Prev10012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10012 {
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

type ConfigPaths10012 = Paths10012<NestedConfig10012>;

interface HeavyProps10012 {
  config: DeepPartial10012<NestedConfig10012>;
  path?: ConfigPaths10012;
}

const HeavyComponent10012 = memo(function HeavyComponent10012({ config }: HeavyProps10012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10012.displayName = 'HeavyComponent10012';
export default HeavyComponent10012;
