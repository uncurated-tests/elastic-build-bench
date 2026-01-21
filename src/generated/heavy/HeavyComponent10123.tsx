'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10123<T> = T extends (infer U)[]
  ? DeepReadonlyArray10123<U>
  : T extends object
  ? DeepReadonlyObject10123<T>
  : T;

interface DeepReadonlyArray10123<T> extends ReadonlyArray<DeepReadonly10123<T>> {}

type DeepReadonlyObject10123<T> = {
  readonly [P in keyof T]: DeepReadonly10123<T[P]>;
};

type UnionToIntersection10123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10123<T> = UnionToIntersection10123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10123<T extends unknown[], V> = [...T, V];

type TuplifyUnion10123<T, L = LastOf10123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10123<TuplifyUnion10123<Exclude<T, L>>, L>;

type DeepPartial10123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10123<T[P]> }
  : T;

type Paths10123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10123<K, Paths10123<T[K], Prev10123[D]>> : never }[keyof T]
  : never;

type Prev10123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10123 {
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

type ConfigPaths10123 = Paths10123<NestedConfig10123>;

interface HeavyProps10123 {
  config: DeepPartial10123<NestedConfig10123>;
  path?: ConfigPaths10123;
}

const HeavyComponent10123 = memo(function HeavyComponent10123({ config }: HeavyProps10123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10123.displayName = 'HeavyComponent10123';
export default HeavyComponent10123;
