'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10278<T> = T extends (infer U)[]
  ? DeepReadonlyArray10278<U>
  : T extends object
  ? DeepReadonlyObject10278<T>
  : T;

interface DeepReadonlyArray10278<T> extends ReadonlyArray<DeepReadonly10278<T>> {}

type DeepReadonlyObject10278<T> = {
  readonly [P in keyof T]: DeepReadonly10278<T[P]>;
};

type UnionToIntersection10278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10278<T> = UnionToIntersection10278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10278<T extends unknown[], V> = [...T, V];

type TuplifyUnion10278<T, L = LastOf10278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10278<TuplifyUnion10278<Exclude<T, L>>, L>;

type DeepPartial10278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10278<T[P]> }
  : T;

type Paths10278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10278<K, Paths10278<T[K], Prev10278[D]>> : never }[keyof T]
  : never;

type Prev10278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10278 {
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

type ConfigPaths10278 = Paths10278<NestedConfig10278>;

interface HeavyProps10278 {
  config: DeepPartial10278<NestedConfig10278>;
  path?: ConfigPaths10278;
}

const HeavyComponent10278 = memo(function HeavyComponent10278({ config }: HeavyProps10278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10278.displayName = 'HeavyComponent10278';
export default HeavyComponent10278;
