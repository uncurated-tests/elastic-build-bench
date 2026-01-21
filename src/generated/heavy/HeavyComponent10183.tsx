'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10183<T> = T extends (infer U)[]
  ? DeepReadonlyArray10183<U>
  : T extends object
  ? DeepReadonlyObject10183<T>
  : T;

interface DeepReadonlyArray10183<T> extends ReadonlyArray<DeepReadonly10183<T>> {}

type DeepReadonlyObject10183<T> = {
  readonly [P in keyof T]: DeepReadonly10183<T[P]>;
};

type UnionToIntersection10183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10183<T> = UnionToIntersection10183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10183<T extends unknown[], V> = [...T, V];

type TuplifyUnion10183<T, L = LastOf10183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10183<TuplifyUnion10183<Exclude<T, L>>, L>;

type DeepPartial10183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10183<T[P]> }
  : T;

type Paths10183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10183<K, Paths10183<T[K], Prev10183[D]>> : never }[keyof T]
  : never;

type Prev10183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10183 {
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

type ConfigPaths10183 = Paths10183<NestedConfig10183>;

interface HeavyProps10183 {
  config: DeepPartial10183<NestedConfig10183>;
  path?: ConfigPaths10183;
}

const HeavyComponent10183 = memo(function HeavyComponent10183({ config }: HeavyProps10183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10183.displayName = 'HeavyComponent10183';
export default HeavyComponent10183;
