'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2740<T> = T extends (infer U)[]
  ? DeepReadonlyArray2740<U>
  : T extends object
  ? DeepReadonlyObject2740<T>
  : T;

interface DeepReadonlyArray2740<T> extends ReadonlyArray<DeepReadonly2740<T>> {}

type DeepReadonlyObject2740<T> = {
  readonly [P in keyof T]: DeepReadonly2740<T[P]>;
};

type UnionToIntersection2740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2740<T> = UnionToIntersection2740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2740<T extends unknown[], V> = [...T, V];

type TuplifyUnion2740<T, L = LastOf2740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2740<TuplifyUnion2740<Exclude<T, L>>, L>;

type DeepPartial2740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2740<T[P]> }
  : T;

type Paths2740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2740<K, Paths2740<T[K], Prev2740[D]>> : never }[keyof T]
  : never;

type Prev2740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2740 {
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

type ConfigPaths2740 = Paths2740<NestedConfig2740>;

interface HeavyProps2740 {
  config: DeepPartial2740<NestedConfig2740>;
  path?: ConfigPaths2740;
}

const HeavyComponent2740 = memo(function HeavyComponent2740({ config }: HeavyProps2740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2740.displayName = 'HeavyComponent2740';
export default HeavyComponent2740;
