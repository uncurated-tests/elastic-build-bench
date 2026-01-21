'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10464<T> = T extends (infer U)[]
  ? DeepReadonlyArray10464<U>
  : T extends object
  ? DeepReadonlyObject10464<T>
  : T;

interface DeepReadonlyArray10464<T> extends ReadonlyArray<DeepReadonly10464<T>> {}

type DeepReadonlyObject10464<T> = {
  readonly [P in keyof T]: DeepReadonly10464<T[P]>;
};

type UnionToIntersection10464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10464<T> = UnionToIntersection10464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10464<T extends unknown[], V> = [...T, V];

type TuplifyUnion10464<T, L = LastOf10464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10464<TuplifyUnion10464<Exclude<T, L>>, L>;

type DeepPartial10464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10464<T[P]> }
  : T;

type Paths10464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10464<K, Paths10464<T[K], Prev10464[D]>> : never }[keyof T]
  : never;

type Prev10464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10464 {
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

type ConfigPaths10464 = Paths10464<NestedConfig10464>;

interface HeavyProps10464 {
  config: DeepPartial10464<NestedConfig10464>;
  path?: ConfigPaths10464;
}

const HeavyComponent10464 = memo(function HeavyComponent10464({ config }: HeavyProps10464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10464.displayName = 'HeavyComponent10464';
export default HeavyComponent10464;
