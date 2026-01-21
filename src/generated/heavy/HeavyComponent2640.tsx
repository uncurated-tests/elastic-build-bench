'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2640<T> = T extends (infer U)[]
  ? DeepReadonlyArray2640<U>
  : T extends object
  ? DeepReadonlyObject2640<T>
  : T;

interface DeepReadonlyArray2640<T> extends ReadonlyArray<DeepReadonly2640<T>> {}

type DeepReadonlyObject2640<T> = {
  readonly [P in keyof T]: DeepReadonly2640<T[P]>;
};

type UnionToIntersection2640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2640<T> = UnionToIntersection2640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2640<T extends unknown[], V> = [...T, V];

type TuplifyUnion2640<T, L = LastOf2640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2640<TuplifyUnion2640<Exclude<T, L>>, L>;

type DeepPartial2640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2640<T[P]> }
  : T;

type Paths2640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2640<K, Paths2640<T[K], Prev2640[D]>> : never }[keyof T]
  : never;

type Prev2640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2640 {
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

type ConfigPaths2640 = Paths2640<NestedConfig2640>;

interface HeavyProps2640 {
  config: DeepPartial2640<NestedConfig2640>;
  path?: ConfigPaths2640;
}

const HeavyComponent2640 = memo(function HeavyComponent2640({ config }: HeavyProps2640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2640.displayName = 'HeavyComponent2640';
export default HeavyComponent2640;
