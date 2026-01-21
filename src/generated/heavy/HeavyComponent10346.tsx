'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10346<T> = T extends (infer U)[]
  ? DeepReadonlyArray10346<U>
  : T extends object
  ? DeepReadonlyObject10346<T>
  : T;

interface DeepReadonlyArray10346<T> extends ReadonlyArray<DeepReadonly10346<T>> {}

type DeepReadonlyObject10346<T> = {
  readonly [P in keyof T]: DeepReadonly10346<T[P]>;
};

type UnionToIntersection10346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10346<T> = UnionToIntersection10346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10346<T extends unknown[], V> = [...T, V];

type TuplifyUnion10346<T, L = LastOf10346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10346<TuplifyUnion10346<Exclude<T, L>>, L>;

type DeepPartial10346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10346<T[P]> }
  : T;

type Paths10346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10346<K, Paths10346<T[K], Prev10346[D]>> : never }[keyof T]
  : never;

type Prev10346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10346 {
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

type ConfigPaths10346 = Paths10346<NestedConfig10346>;

interface HeavyProps10346 {
  config: DeepPartial10346<NestedConfig10346>;
  path?: ConfigPaths10346;
}

const HeavyComponent10346 = memo(function HeavyComponent10346({ config }: HeavyProps10346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10346.displayName = 'HeavyComponent10346';
export default HeavyComponent10346;
