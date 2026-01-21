'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10128<T> = T extends (infer U)[]
  ? DeepReadonlyArray10128<U>
  : T extends object
  ? DeepReadonlyObject10128<T>
  : T;

interface DeepReadonlyArray10128<T> extends ReadonlyArray<DeepReadonly10128<T>> {}

type DeepReadonlyObject10128<T> = {
  readonly [P in keyof T]: DeepReadonly10128<T[P]>;
};

type UnionToIntersection10128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10128<T> = UnionToIntersection10128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10128<T extends unknown[], V> = [...T, V];

type TuplifyUnion10128<T, L = LastOf10128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10128<TuplifyUnion10128<Exclude<T, L>>, L>;

type DeepPartial10128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10128<T[P]> }
  : T;

type Paths10128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10128<K, Paths10128<T[K], Prev10128[D]>> : never }[keyof T]
  : never;

type Prev10128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10128 {
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

type ConfigPaths10128 = Paths10128<NestedConfig10128>;

interface HeavyProps10128 {
  config: DeepPartial10128<NestedConfig10128>;
  path?: ConfigPaths10128;
}

const HeavyComponent10128 = memo(function HeavyComponent10128({ config }: HeavyProps10128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10128.displayName = 'HeavyComponent10128';
export default HeavyComponent10128;
