'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10271<T> = T extends (infer U)[]
  ? DeepReadonlyArray10271<U>
  : T extends object
  ? DeepReadonlyObject10271<T>
  : T;

interface DeepReadonlyArray10271<T> extends ReadonlyArray<DeepReadonly10271<T>> {}

type DeepReadonlyObject10271<T> = {
  readonly [P in keyof T]: DeepReadonly10271<T[P]>;
};

type UnionToIntersection10271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10271<T> = UnionToIntersection10271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10271<T extends unknown[], V> = [...T, V];

type TuplifyUnion10271<T, L = LastOf10271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10271<TuplifyUnion10271<Exclude<T, L>>, L>;

type DeepPartial10271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10271<T[P]> }
  : T;

type Paths10271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10271<K, Paths10271<T[K], Prev10271[D]>> : never }[keyof T]
  : never;

type Prev10271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10271 {
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

type ConfigPaths10271 = Paths10271<NestedConfig10271>;

interface HeavyProps10271 {
  config: DeepPartial10271<NestedConfig10271>;
  path?: ConfigPaths10271;
}

const HeavyComponent10271 = memo(function HeavyComponent10271({ config }: HeavyProps10271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10271.displayName = 'HeavyComponent10271';
export default HeavyComponent10271;
