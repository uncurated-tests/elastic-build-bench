'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2662<T> = T extends (infer U)[]
  ? DeepReadonlyArray2662<U>
  : T extends object
  ? DeepReadonlyObject2662<T>
  : T;

interface DeepReadonlyArray2662<T> extends ReadonlyArray<DeepReadonly2662<T>> {}

type DeepReadonlyObject2662<T> = {
  readonly [P in keyof T]: DeepReadonly2662<T[P]>;
};

type UnionToIntersection2662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2662<T> = UnionToIntersection2662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2662<T extends unknown[], V> = [...T, V];

type TuplifyUnion2662<T, L = LastOf2662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2662<TuplifyUnion2662<Exclude<T, L>>, L>;

type DeepPartial2662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2662<T[P]> }
  : T;

type Paths2662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2662<K, Paths2662<T[K], Prev2662[D]>> : never }[keyof T]
  : never;

type Prev2662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2662 {
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

type ConfigPaths2662 = Paths2662<NestedConfig2662>;

interface HeavyProps2662 {
  config: DeepPartial2662<NestedConfig2662>;
  path?: ConfigPaths2662;
}

const HeavyComponent2662 = memo(function HeavyComponent2662({ config }: HeavyProps2662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2662.displayName = 'HeavyComponent2662';
export default HeavyComponent2662;
