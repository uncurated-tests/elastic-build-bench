'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10955<T> = T extends (infer U)[]
  ? DeepReadonlyArray10955<U>
  : T extends object
  ? DeepReadonlyObject10955<T>
  : T;

interface DeepReadonlyArray10955<T> extends ReadonlyArray<DeepReadonly10955<T>> {}

type DeepReadonlyObject10955<T> = {
  readonly [P in keyof T]: DeepReadonly10955<T[P]>;
};

type UnionToIntersection10955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10955<T> = UnionToIntersection10955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10955<T extends unknown[], V> = [...T, V];

type TuplifyUnion10955<T, L = LastOf10955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10955<TuplifyUnion10955<Exclude<T, L>>, L>;

type DeepPartial10955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10955<T[P]> }
  : T;

type Paths10955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10955<K, Paths10955<T[K], Prev10955[D]>> : never }[keyof T]
  : never;

type Prev10955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10955 {
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

type ConfigPaths10955 = Paths10955<NestedConfig10955>;

interface HeavyProps10955 {
  config: DeepPartial10955<NestedConfig10955>;
  path?: ConfigPaths10955;
}

const HeavyComponent10955 = memo(function HeavyComponent10955({ config }: HeavyProps10955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10955.displayName = 'HeavyComponent10955';
export default HeavyComponent10955;
