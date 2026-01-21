'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2170<T> = T extends (infer U)[]
  ? DeepReadonlyArray2170<U>
  : T extends object
  ? DeepReadonlyObject2170<T>
  : T;

interface DeepReadonlyArray2170<T> extends ReadonlyArray<DeepReadonly2170<T>> {}

type DeepReadonlyObject2170<T> = {
  readonly [P in keyof T]: DeepReadonly2170<T[P]>;
};

type UnionToIntersection2170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2170<T> = UnionToIntersection2170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2170<T extends unknown[], V> = [...T, V];

type TuplifyUnion2170<T, L = LastOf2170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2170<TuplifyUnion2170<Exclude<T, L>>, L>;

type DeepPartial2170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2170<T[P]> }
  : T;

type Paths2170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2170<K, Paths2170<T[K], Prev2170[D]>> : never }[keyof T]
  : never;

type Prev2170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2170 {
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

type ConfigPaths2170 = Paths2170<NestedConfig2170>;

interface HeavyProps2170 {
  config: DeepPartial2170<NestedConfig2170>;
  path?: ConfigPaths2170;
}

const HeavyComponent2170 = memo(function HeavyComponent2170({ config }: HeavyProps2170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2170.displayName = 'HeavyComponent2170';
export default HeavyComponent2170;
