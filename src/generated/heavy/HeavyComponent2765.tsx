'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2765<T> = T extends (infer U)[]
  ? DeepReadonlyArray2765<U>
  : T extends object
  ? DeepReadonlyObject2765<T>
  : T;

interface DeepReadonlyArray2765<T> extends ReadonlyArray<DeepReadonly2765<T>> {}

type DeepReadonlyObject2765<T> = {
  readonly [P in keyof T]: DeepReadonly2765<T[P]>;
};

type UnionToIntersection2765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2765<T> = UnionToIntersection2765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2765<T extends unknown[], V> = [...T, V];

type TuplifyUnion2765<T, L = LastOf2765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2765<TuplifyUnion2765<Exclude<T, L>>, L>;

type DeepPartial2765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2765<T[P]> }
  : T;

type Paths2765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2765<K, Paths2765<T[K], Prev2765[D]>> : never }[keyof T]
  : never;

type Prev2765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2765 {
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

type ConfigPaths2765 = Paths2765<NestedConfig2765>;

interface HeavyProps2765 {
  config: DeepPartial2765<NestedConfig2765>;
  path?: ConfigPaths2765;
}

const HeavyComponent2765 = memo(function HeavyComponent2765({ config }: HeavyProps2765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2765.displayName = 'HeavyComponent2765';
export default HeavyComponent2765;
