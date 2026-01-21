'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10764<T> = T extends (infer U)[]
  ? DeepReadonlyArray10764<U>
  : T extends object
  ? DeepReadonlyObject10764<T>
  : T;

interface DeepReadonlyArray10764<T> extends ReadonlyArray<DeepReadonly10764<T>> {}

type DeepReadonlyObject10764<T> = {
  readonly [P in keyof T]: DeepReadonly10764<T[P]>;
};

type UnionToIntersection10764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10764<T> = UnionToIntersection10764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10764<T extends unknown[], V> = [...T, V];

type TuplifyUnion10764<T, L = LastOf10764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10764<TuplifyUnion10764<Exclude<T, L>>, L>;

type DeepPartial10764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10764<T[P]> }
  : T;

type Paths10764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10764<K, Paths10764<T[K], Prev10764[D]>> : never }[keyof T]
  : never;

type Prev10764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10764 {
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

type ConfigPaths10764 = Paths10764<NestedConfig10764>;

interface HeavyProps10764 {
  config: DeepPartial10764<NestedConfig10764>;
  path?: ConfigPaths10764;
}

const HeavyComponent10764 = memo(function HeavyComponent10764({ config }: HeavyProps10764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10764.displayName = 'HeavyComponent10764';
export default HeavyComponent10764;
