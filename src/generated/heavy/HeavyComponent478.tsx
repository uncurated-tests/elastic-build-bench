'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly478<T> = T extends (infer U)[]
  ? DeepReadonlyArray478<U>
  : T extends object
  ? DeepReadonlyObject478<T>
  : T;

interface DeepReadonlyArray478<T> extends ReadonlyArray<DeepReadonly478<T>> {}

type DeepReadonlyObject478<T> = {
  readonly [P in keyof T]: DeepReadonly478<T[P]>;
};

type UnionToIntersection478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf478<T> = UnionToIntersection478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push478<T extends unknown[], V> = [...T, V];

type TuplifyUnion478<T, L = LastOf478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push478<TuplifyUnion478<Exclude<T, L>>, L>;

type DeepPartial478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial478<T[P]> }
  : T;

type Paths478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join478<K, Paths478<T[K], Prev478[D]>> : never }[keyof T]
  : never;

type Prev478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig478 {
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

type ConfigPaths478 = Paths478<NestedConfig478>;

interface HeavyProps478 {
  config: DeepPartial478<NestedConfig478>;
  path?: ConfigPaths478;
}

const HeavyComponent478 = memo(function HeavyComponent478({ config }: HeavyProps478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent478.displayName = 'HeavyComponent478';
export default HeavyComponent478;
