'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10874<T> = T extends (infer U)[]
  ? DeepReadonlyArray10874<U>
  : T extends object
  ? DeepReadonlyObject10874<T>
  : T;

interface DeepReadonlyArray10874<T> extends ReadonlyArray<DeepReadonly10874<T>> {}

type DeepReadonlyObject10874<T> = {
  readonly [P in keyof T]: DeepReadonly10874<T[P]>;
};

type UnionToIntersection10874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10874<T> = UnionToIntersection10874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10874<T extends unknown[], V> = [...T, V];

type TuplifyUnion10874<T, L = LastOf10874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10874<TuplifyUnion10874<Exclude<T, L>>, L>;

type DeepPartial10874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10874<T[P]> }
  : T;

type Paths10874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10874<K, Paths10874<T[K], Prev10874[D]>> : never }[keyof T]
  : never;

type Prev10874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10874 {
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

type ConfigPaths10874 = Paths10874<NestedConfig10874>;

interface HeavyProps10874 {
  config: DeepPartial10874<NestedConfig10874>;
  path?: ConfigPaths10874;
}

const HeavyComponent10874 = memo(function HeavyComponent10874({ config }: HeavyProps10874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10874.displayName = 'HeavyComponent10874';
export default HeavyComponent10874;
