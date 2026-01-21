'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10427<T> = T extends (infer U)[]
  ? DeepReadonlyArray10427<U>
  : T extends object
  ? DeepReadonlyObject10427<T>
  : T;

interface DeepReadonlyArray10427<T> extends ReadonlyArray<DeepReadonly10427<T>> {}

type DeepReadonlyObject10427<T> = {
  readonly [P in keyof T]: DeepReadonly10427<T[P]>;
};

type UnionToIntersection10427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10427<T> = UnionToIntersection10427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10427<T extends unknown[], V> = [...T, V];

type TuplifyUnion10427<T, L = LastOf10427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10427<TuplifyUnion10427<Exclude<T, L>>, L>;

type DeepPartial10427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10427<T[P]> }
  : T;

type Paths10427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10427<K, Paths10427<T[K], Prev10427[D]>> : never }[keyof T]
  : never;

type Prev10427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10427 {
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

type ConfigPaths10427 = Paths10427<NestedConfig10427>;

interface HeavyProps10427 {
  config: DeepPartial10427<NestedConfig10427>;
  path?: ConfigPaths10427;
}

const HeavyComponent10427 = memo(function HeavyComponent10427({ config }: HeavyProps10427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10427.displayName = 'HeavyComponent10427';
export default HeavyComponent10427;
