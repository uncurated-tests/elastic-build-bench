'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10639<T> = T extends (infer U)[]
  ? DeepReadonlyArray10639<U>
  : T extends object
  ? DeepReadonlyObject10639<T>
  : T;

interface DeepReadonlyArray10639<T> extends ReadonlyArray<DeepReadonly10639<T>> {}

type DeepReadonlyObject10639<T> = {
  readonly [P in keyof T]: DeepReadonly10639<T[P]>;
};

type UnionToIntersection10639<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10639<T> = UnionToIntersection10639<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10639<T extends unknown[], V> = [...T, V];

type TuplifyUnion10639<T, L = LastOf10639<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10639<TuplifyUnion10639<Exclude<T, L>>, L>;

type DeepPartial10639<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10639<T[P]> }
  : T;

type Paths10639<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10639<K, Paths10639<T[K], Prev10639[D]>> : never }[keyof T]
  : never;

type Prev10639 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10639<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10639 {
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

type ConfigPaths10639 = Paths10639<NestedConfig10639>;

interface HeavyProps10639 {
  config: DeepPartial10639<NestedConfig10639>;
  path?: ConfigPaths10639;
}

const HeavyComponent10639 = memo(function HeavyComponent10639({ config }: HeavyProps10639) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10639) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10639 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10639: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10639.displayName = 'HeavyComponent10639';
export default HeavyComponent10639;
