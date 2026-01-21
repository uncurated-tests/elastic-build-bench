'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10081<T> = T extends (infer U)[]
  ? DeepReadonlyArray10081<U>
  : T extends object
  ? DeepReadonlyObject10081<T>
  : T;

interface DeepReadonlyArray10081<T> extends ReadonlyArray<DeepReadonly10081<T>> {}

type DeepReadonlyObject10081<T> = {
  readonly [P in keyof T]: DeepReadonly10081<T[P]>;
};

type UnionToIntersection10081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10081<T> = UnionToIntersection10081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10081<T extends unknown[], V> = [...T, V];

type TuplifyUnion10081<T, L = LastOf10081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10081<TuplifyUnion10081<Exclude<T, L>>, L>;

type DeepPartial10081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10081<T[P]> }
  : T;

type Paths10081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10081<K, Paths10081<T[K], Prev10081[D]>> : never }[keyof T]
  : never;

type Prev10081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10081 {
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

type ConfigPaths10081 = Paths10081<NestedConfig10081>;

interface HeavyProps10081 {
  config: DeepPartial10081<NestedConfig10081>;
  path?: ConfigPaths10081;
}

const HeavyComponent10081 = memo(function HeavyComponent10081({ config }: HeavyProps10081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10081.displayName = 'HeavyComponent10081';
export default HeavyComponent10081;
