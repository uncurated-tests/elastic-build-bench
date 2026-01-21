'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2110<T> = T extends (infer U)[]
  ? DeepReadonlyArray2110<U>
  : T extends object
  ? DeepReadonlyObject2110<T>
  : T;

interface DeepReadonlyArray2110<T> extends ReadonlyArray<DeepReadonly2110<T>> {}

type DeepReadonlyObject2110<T> = {
  readonly [P in keyof T]: DeepReadonly2110<T[P]>;
};

type UnionToIntersection2110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2110<T> = UnionToIntersection2110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2110<T extends unknown[], V> = [...T, V];

type TuplifyUnion2110<T, L = LastOf2110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2110<TuplifyUnion2110<Exclude<T, L>>, L>;

type DeepPartial2110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2110<T[P]> }
  : T;

type Paths2110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2110<K, Paths2110<T[K], Prev2110[D]>> : never }[keyof T]
  : never;

type Prev2110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2110 {
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

type ConfigPaths2110 = Paths2110<NestedConfig2110>;

interface HeavyProps2110 {
  config: DeepPartial2110<NestedConfig2110>;
  path?: ConfigPaths2110;
}

const HeavyComponent2110 = memo(function HeavyComponent2110({ config }: HeavyProps2110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2110.displayName = 'HeavyComponent2110';
export default HeavyComponent2110;
