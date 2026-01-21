'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10776<T> = T extends (infer U)[]
  ? DeepReadonlyArray10776<U>
  : T extends object
  ? DeepReadonlyObject10776<T>
  : T;

interface DeepReadonlyArray10776<T> extends ReadonlyArray<DeepReadonly10776<T>> {}

type DeepReadonlyObject10776<T> = {
  readonly [P in keyof T]: DeepReadonly10776<T[P]>;
};

type UnionToIntersection10776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10776<T> = UnionToIntersection10776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10776<T extends unknown[], V> = [...T, V];

type TuplifyUnion10776<T, L = LastOf10776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10776<TuplifyUnion10776<Exclude<T, L>>, L>;

type DeepPartial10776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10776<T[P]> }
  : T;

type Paths10776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10776<K, Paths10776<T[K], Prev10776[D]>> : never }[keyof T]
  : never;

type Prev10776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10776 {
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

type ConfigPaths10776 = Paths10776<NestedConfig10776>;

interface HeavyProps10776 {
  config: DeepPartial10776<NestedConfig10776>;
  path?: ConfigPaths10776;
}

const HeavyComponent10776 = memo(function HeavyComponent10776({ config }: HeavyProps10776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10776.displayName = 'HeavyComponent10776';
export default HeavyComponent10776;
