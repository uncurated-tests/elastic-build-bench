'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10073<T> = T extends (infer U)[]
  ? DeepReadonlyArray10073<U>
  : T extends object
  ? DeepReadonlyObject10073<T>
  : T;

interface DeepReadonlyArray10073<T> extends ReadonlyArray<DeepReadonly10073<T>> {}

type DeepReadonlyObject10073<T> = {
  readonly [P in keyof T]: DeepReadonly10073<T[P]>;
};

type UnionToIntersection10073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10073<T> = UnionToIntersection10073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10073<T extends unknown[], V> = [...T, V];

type TuplifyUnion10073<T, L = LastOf10073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10073<TuplifyUnion10073<Exclude<T, L>>, L>;

type DeepPartial10073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10073<T[P]> }
  : T;

type Paths10073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10073<K, Paths10073<T[K], Prev10073[D]>> : never }[keyof T]
  : never;

type Prev10073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10073 {
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

type ConfigPaths10073 = Paths10073<NestedConfig10073>;

interface HeavyProps10073 {
  config: DeepPartial10073<NestedConfig10073>;
  path?: ConfigPaths10073;
}

const HeavyComponent10073 = memo(function HeavyComponent10073({ config }: HeavyProps10073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10073.displayName = 'HeavyComponent10073';
export default HeavyComponent10073;
