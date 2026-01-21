'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2478<T> = T extends (infer U)[]
  ? DeepReadonlyArray2478<U>
  : T extends object
  ? DeepReadonlyObject2478<T>
  : T;

interface DeepReadonlyArray2478<T> extends ReadonlyArray<DeepReadonly2478<T>> {}

type DeepReadonlyObject2478<T> = {
  readonly [P in keyof T]: DeepReadonly2478<T[P]>;
};

type UnionToIntersection2478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2478<T> = UnionToIntersection2478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2478<T extends unknown[], V> = [...T, V];

type TuplifyUnion2478<T, L = LastOf2478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2478<TuplifyUnion2478<Exclude<T, L>>, L>;

type DeepPartial2478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2478<T[P]> }
  : T;

type Paths2478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2478<K, Paths2478<T[K], Prev2478[D]>> : never }[keyof T]
  : never;

type Prev2478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2478 {
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

type ConfigPaths2478 = Paths2478<NestedConfig2478>;

interface HeavyProps2478 {
  config: DeepPartial2478<NestedConfig2478>;
  path?: ConfigPaths2478;
}

const HeavyComponent2478 = memo(function HeavyComponent2478({ config }: HeavyProps2478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2478.displayName = 'HeavyComponent2478';
export default HeavyComponent2478;
