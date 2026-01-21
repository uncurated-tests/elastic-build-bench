'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10947<T> = T extends (infer U)[]
  ? DeepReadonlyArray10947<U>
  : T extends object
  ? DeepReadonlyObject10947<T>
  : T;

interface DeepReadonlyArray10947<T> extends ReadonlyArray<DeepReadonly10947<T>> {}

type DeepReadonlyObject10947<T> = {
  readonly [P in keyof T]: DeepReadonly10947<T[P]>;
};

type UnionToIntersection10947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10947<T> = UnionToIntersection10947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10947<T extends unknown[], V> = [...T, V];

type TuplifyUnion10947<T, L = LastOf10947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10947<TuplifyUnion10947<Exclude<T, L>>, L>;

type DeepPartial10947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10947<T[P]> }
  : T;

type Paths10947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10947<K, Paths10947<T[K], Prev10947[D]>> : never }[keyof T]
  : never;

type Prev10947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10947 {
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

type ConfigPaths10947 = Paths10947<NestedConfig10947>;

interface HeavyProps10947 {
  config: DeepPartial10947<NestedConfig10947>;
  path?: ConfigPaths10947;
}

const HeavyComponent10947 = memo(function HeavyComponent10947({ config }: HeavyProps10947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10947.displayName = 'HeavyComponent10947';
export default HeavyComponent10947;
