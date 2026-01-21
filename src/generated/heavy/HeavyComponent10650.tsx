'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10650<T> = T extends (infer U)[]
  ? DeepReadonlyArray10650<U>
  : T extends object
  ? DeepReadonlyObject10650<T>
  : T;

interface DeepReadonlyArray10650<T> extends ReadonlyArray<DeepReadonly10650<T>> {}

type DeepReadonlyObject10650<T> = {
  readonly [P in keyof T]: DeepReadonly10650<T[P]>;
};

type UnionToIntersection10650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10650<T> = UnionToIntersection10650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10650<T extends unknown[], V> = [...T, V];

type TuplifyUnion10650<T, L = LastOf10650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10650<TuplifyUnion10650<Exclude<T, L>>, L>;

type DeepPartial10650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10650<T[P]> }
  : T;

type Paths10650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10650<K, Paths10650<T[K], Prev10650[D]>> : never }[keyof T]
  : never;

type Prev10650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10650 {
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

type ConfigPaths10650 = Paths10650<NestedConfig10650>;

interface HeavyProps10650 {
  config: DeepPartial10650<NestedConfig10650>;
  path?: ConfigPaths10650;
}

const HeavyComponent10650 = memo(function HeavyComponent10650({ config }: HeavyProps10650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10650.displayName = 'HeavyComponent10650';
export default HeavyComponent10650;
