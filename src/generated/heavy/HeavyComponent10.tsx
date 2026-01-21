'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10<T> = T extends (infer U)[]
  ? DeepReadonlyArray10<U>
  : T extends object
  ? DeepReadonlyObject10<T>
  : T;

interface DeepReadonlyArray10<T> extends ReadonlyArray<DeepReadonly10<T>> {}

type DeepReadonlyObject10<T> = {
  readonly [P in keyof T]: DeepReadonly10<T[P]>;
};

type UnionToIntersection10<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10<T> = UnionToIntersection10<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10<T extends unknown[], V> = [...T, V];

type TuplifyUnion10<T, L = LastOf10<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10<TuplifyUnion10<Exclude<T, L>>, L>;

type DeepPartial10<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10<T[P]> }
  : T;

type Paths10<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10<K, Paths10<T[K], Prev10[D]>> : never }[keyof T]
  : never;

type Prev10 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10 {
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

type ConfigPaths10 = Paths10<NestedConfig10>;

interface HeavyProps10 {
  config: DeepPartial10<NestedConfig10>;
  path?: ConfigPaths10;
}

const HeavyComponent10 = memo(function HeavyComponent10({ config }: HeavyProps10) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10.displayName = 'HeavyComponent10';
export default HeavyComponent10;
