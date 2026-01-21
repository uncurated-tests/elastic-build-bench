'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10107<T> = T extends (infer U)[]
  ? DeepReadonlyArray10107<U>
  : T extends object
  ? DeepReadonlyObject10107<T>
  : T;

interface DeepReadonlyArray10107<T> extends ReadonlyArray<DeepReadonly10107<T>> {}

type DeepReadonlyObject10107<T> = {
  readonly [P in keyof T]: DeepReadonly10107<T[P]>;
};

type UnionToIntersection10107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10107<T> = UnionToIntersection10107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10107<T extends unknown[], V> = [...T, V];

type TuplifyUnion10107<T, L = LastOf10107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10107<TuplifyUnion10107<Exclude<T, L>>, L>;

type DeepPartial10107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10107<T[P]> }
  : T;

type Paths10107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10107<K, Paths10107<T[K], Prev10107[D]>> : never }[keyof T]
  : never;

type Prev10107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10107 {
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

type ConfigPaths10107 = Paths10107<NestedConfig10107>;

interface HeavyProps10107 {
  config: DeepPartial10107<NestedConfig10107>;
  path?: ConfigPaths10107;
}

const HeavyComponent10107 = memo(function HeavyComponent10107({ config }: HeavyProps10107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10107.displayName = 'HeavyComponent10107';
export default HeavyComponent10107;
