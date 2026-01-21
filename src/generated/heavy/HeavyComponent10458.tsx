'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10458<T> = T extends (infer U)[]
  ? DeepReadonlyArray10458<U>
  : T extends object
  ? DeepReadonlyObject10458<T>
  : T;

interface DeepReadonlyArray10458<T> extends ReadonlyArray<DeepReadonly10458<T>> {}

type DeepReadonlyObject10458<T> = {
  readonly [P in keyof T]: DeepReadonly10458<T[P]>;
};

type UnionToIntersection10458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10458<T> = UnionToIntersection10458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10458<T extends unknown[], V> = [...T, V];

type TuplifyUnion10458<T, L = LastOf10458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10458<TuplifyUnion10458<Exclude<T, L>>, L>;

type DeepPartial10458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10458<T[P]> }
  : T;

type Paths10458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10458<K, Paths10458<T[K], Prev10458[D]>> : never }[keyof T]
  : never;

type Prev10458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10458 {
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

type ConfigPaths10458 = Paths10458<NestedConfig10458>;

interface HeavyProps10458 {
  config: DeepPartial10458<NestedConfig10458>;
  path?: ConfigPaths10458;
}

const HeavyComponent10458 = memo(function HeavyComponent10458({ config }: HeavyProps10458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10458.displayName = 'HeavyComponent10458';
export default HeavyComponent10458;
