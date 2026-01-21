'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10370<T> = T extends (infer U)[]
  ? DeepReadonlyArray10370<U>
  : T extends object
  ? DeepReadonlyObject10370<T>
  : T;

interface DeepReadonlyArray10370<T> extends ReadonlyArray<DeepReadonly10370<T>> {}

type DeepReadonlyObject10370<T> = {
  readonly [P in keyof T]: DeepReadonly10370<T[P]>;
};

type UnionToIntersection10370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10370<T> = UnionToIntersection10370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10370<T extends unknown[], V> = [...T, V];

type TuplifyUnion10370<T, L = LastOf10370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10370<TuplifyUnion10370<Exclude<T, L>>, L>;

type DeepPartial10370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10370<T[P]> }
  : T;

type Paths10370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10370<K, Paths10370<T[K], Prev10370[D]>> : never }[keyof T]
  : never;

type Prev10370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10370 {
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

type ConfigPaths10370 = Paths10370<NestedConfig10370>;

interface HeavyProps10370 {
  config: DeepPartial10370<NestedConfig10370>;
  path?: ConfigPaths10370;
}

const HeavyComponent10370 = memo(function HeavyComponent10370({ config }: HeavyProps10370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10370.displayName = 'HeavyComponent10370';
export default HeavyComponent10370;
