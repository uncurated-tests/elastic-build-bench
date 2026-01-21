'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10822<T> = T extends (infer U)[]
  ? DeepReadonlyArray10822<U>
  : T extends object
  ? DeepReadonlyObject10822<T>
  : T;

interface DeepReadonlyArray10822<T> extends ReadonlyArray<DeepReadonly10822<T>> {}

type DeepReadonlyObject10822<T> = {
  readonly [P in keyof T]: DeepReadonly10822<T[P]>;
};

type UnionToIntersection10822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10822<T> = UnionToIntersection10822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10822<T extends unknown[], V> = [...T, V];

type TuplifyUnion10822<T, L = LastOf10822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10822<TuplifyUnion10822<Exclude<T, L>>, L>;

type DeepPartial10822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10822<T[P]> }
  : T;

type Paths10822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10822<K, Paths10822<T[K], Prev10822[D]>> : never }[keyof T]
  : never;

type Prev10822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10822 {
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

type ConfigPaths10822 = Paths10822<NestedConfig10822>;

interface HeavyProps10822 {
  config: DeepPartial10822<NestedConfig10822>;
  path?: ConfigPaths10822;
}

const HeavyComponent10822 = memo(function HeavyComponent10822({ config }: HeavyProps10822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10822.displayName = 'HeavyComponent10822';
export default HeavyComponent10822;
