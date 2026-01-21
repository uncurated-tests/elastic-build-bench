'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2541<T> = T extends (infer U)[]
  ? DeepReadonlyArray2541<U>
  : T extends object
  ? DeepReadonlyObject2541<T>
  : T;

interface DeepReadonlyArray2541<T> extends ReadonlyArray<DeepReadonly2541<T>> {}

type DeepReadonlyObject2541<T> = {
  readonly [P in keyof T]: DeepReadonly2541<T[P]>;
};

type UnionToIntersection2541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2541<T> = UnionToIntersection2541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2541<T extends unknown[], V> = [...T, V];

type TuplifyUnion2541<T, L = LastOf2541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2541<TuplifyUnion2541<Exclude<T, L>>, L>;

type DeepPartial2541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2541<T[P]> }
  : T;

type Paths2541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2541<K, Paths2541<T[K], Prev2541[D]>> : never }[keyof T]
  : never;

type Prev2541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2541 {
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

type ConfigPaths2541 = Paths2541<NestedConfig2541>;

interface HeavyProps2541 {
  config: DeepPartial2541<NestedConfig2541>;
  path?: ConfigPaths2541;
}

const HeavyComponent2541 = memo(function HeavyComponent2541({ config }: HeavyProps2541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2541.displayName = 'HeavyComponent2541';
export default HeavyComponent2541;
