'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2870<T> = T extends (infer U)[]
  ? DeepReadonlyArray2870<U>
  : T extends object
  ? DeepReadonlyObject2870<T>
  : T;

interface DeepReadonlyArray2870<T> extends ReadonlyArray<DeepReadonly2870<T>> {}

type DeepReadonlyObject2870<T> = {
  readonly [P in keyof T]: DeepReadonly2870<T[P]>;
};

type UnionToIntersection2870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2870<T> = UnionToIntersection2870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2870<T extends unknown[], V> = [...T, V];

type TuplifyUnion2870<T, L = LastOf2870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2870<TuplifyUnion2870<Exclude<T, L>>, L>;

type DeepPartial2870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2870<T[P]> }
  : T;

type Paths2870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2870<K, Paths2870<T[K], Prev2870[D]>> : never }[keyof T]
  : never;

type Prev2870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2870 {
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

type ConfigPaths2870 = Paths2870<NestedConfig2870>;

interface HeavyProps2870 {
  config: DeepPartial2870<NestedConfig2870>;
  path?: ConfigPaths2870;
}

const HeavyComponent2870 = memo(function HeavyComponent2870({ config }: HeavyProps2870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2870.displayName = 'HeavyComponent2870';
export default HeavyComponent2870;
