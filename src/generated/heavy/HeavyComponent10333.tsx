'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10333<T> = T extends (infer U)[]
  ? DeepReadonlyArray10333<U>
  : T extends object
  ? DeepReadonlyObject10333<T>
  : T;

interface DeepReadonlyArray10333<T> extends ReadonlyArray<DeepReadonly10333<T>> {}

type DeepReadonlyObject10333<T> = {
  readonly [P in keyof T]: DeepReadonly10333<T[P]>;
};

type UnionToIntersection10333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10333<T> = UnionToIntersection10333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10333<T extends unknown[], V> = [...T, V];

type TuplifyUnion10333<T, L = LastOf10333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10333<TuplifyUnion10333<Exclude<T, L>>, L>;

type DeepPartial10333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10333<T[P]> }
  : T;

type Paths10333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10333<K, Paths10333<T[K], Prev10333[D]>> : never }[keyof T]
  : never;

type Prev10333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10333 {
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

type ConfigPaths10333 = Paths10333<NestedConfig10333>;

interface HeavyProps10333 {
  config: DeepPartial10333<NestedConfig10333>;
  path?: ConfigPaths10333;
}

const HeavyComponent10333 = memo(function HeavyComponent10333({ config }: HeavyProps10333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10333.displayName = 'HeavyComponent10333';
export default HeavyComponent10333;
