'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10762<T> = T extends (infer U)[]
  ? DeepReadonlyArray10762<U>
  : T extends object
  ? DeepReadonlyObject10762<T>
  : T;

interface DeepReadonlyArray10762<T> extends ReadonlyArray<DeepReadonly10762<T>> {}

type DeepReadonlyObject10762<T> = {
  readonly [P in keyof T]: DeepReadonly10762<T[P]>;
};

type UnionToIntersection10762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10762<T> = UnionToIntersection10762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10762<T extends unknown[], V> = [...T, V];

type TuplifyUnion10762<T, L = LastOf10762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10762<TuplifyUnion10762<Exclude<T, L>>, L>;

type DeepPartial10762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10762<T[P]> }
  : T;

type Paths10762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10762<K, Paths10762<T[K], Prev10762[D]>> : never }[keyof T]
  : never;

type Prev10762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10762 {
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

type ConfigPaths10762 = Paths10762<NestedConfig10762>;

interface HeavyProps10762 {
  config: DeepPartial10762<NestedConfig10762>;
  path?: ConfigPaths10762;
}

const HeavyComponent10762 = memo(function HeavyComponent10762({ config }: HeavyProps10762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10762.displayName = 'HeavyComponent10762';
export default HeavyComponent10762;
