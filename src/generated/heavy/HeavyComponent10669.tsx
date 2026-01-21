'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10669<T> = T extends (infer U)[]
  ? DeepReadonlyArray10669<U>
  : T extends object
  ? DeepReadonlyObject10669<T>
  : T;

interface DeepReadonlyArray10669<T> extends ReadonlyArray<DeepReadonly10669<T>> {}

type DeepReadonlyObject10669<T> = {
  readonly [P in keyof T]: DeepReadonly10669<T[P]>;
};

type UnionToIntersection10669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10669<T> = UnionToIntersection10669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10669<T extends unknown[], V> = [...T, V];

type TuplifyUnion10669<T, L = LastOf10669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10669<TuplifyUnion10669<Exclude<T, L>>, L>;

type DeepPartial10669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10669<T[P]> }
  : T;

type Paths10669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10669<K, Paths10669<T[K], Prev10669[D]>> : never }[keyof T]
  : never;

type Prev10669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10669 {
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

type ConfigPaths10669 = Paths10669<NestedConfig10669>;

interface HeavyProps10669 {
  config: DeepPartial10669<NestedConfig10669>;
  path?: ConfigPaths10669;
}

const HeavyComponent10669 = memo(function HeavyComponent10669({ config }: HeavyProps10669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10669.displayName = 'HeavyComponent10669';
export default HeavyComponent10669;
