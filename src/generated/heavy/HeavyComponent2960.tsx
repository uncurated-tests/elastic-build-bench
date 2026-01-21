'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2960<T> = T extends (infer U)[]
  ? DeepReadonlyArray2960<U>
  : T extends object
  ? DeepReadonlyObject2960<T>
  : T;

interface DeepReadonlyArray2960<T> extends ReadonlyArray<DeepReadonly2960<T>> {}

type DeepReadonlyObject2960<T> = {
  readonly [P in keyof T]: DeepReadonly2960<T[P]>;
};

type UnionToIntersection2960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2960<T> = UnionToIntersection2960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2960<T extends unknown[], V> = [...T, V];

type TuplifyUnion2960<T, L = LastOf2960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2960<TuplifyUnion2960<Exclude<T, L>>, L>;

type DeepPartial2960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2960<T[P]> }
  : T;

type Paths2960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2960<K, Paths2960<T[K], Prev2960[D]>> : never }[keyof T]
  : never;

type Prev2960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2960 {
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

type ConfigPaths2960 = Paths2960<NestedConfig2960>;

interface HeavyProps2960 {
  config: DeepPartial2960<NestedConfig2960>;
  path?: ConfigPaths2960;
}

const HeavyComponent2960 = memo(function HeavyComponent2960({ config }: HeavyProps2960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2960.displayName = 'HeavyComponent2960';
export default HeavyComponent2960;
