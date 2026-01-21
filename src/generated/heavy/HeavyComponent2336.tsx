'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2336<T> = T extends (infer U)[]
  ? DeepReadonlyArray2336<U>
  : T extends object
  ? DeepReadonlyObject2336<T>
  : T;

interface DeepReadonlyArray2336<T> extends ReadonlyArray<DeepReadonly2336<T>> {}

type DeepReadonlyObject2336<T> = {
  readonly [P in keyof T]: DeepReadonly2336<T[P]>;
};

type UnionToIntersection2336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2336<T> = UnionToIntersection2336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2336<T extends unknown[], V> = [...T, V];

type TuplifyUnion2336<T, L = LastOf2336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2336<TuplifyUnion2336<Exclude<T, L>>, L>;

type DeepPartial2336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2336<T[P]> }
  : T;

type Paths2336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2336<K, Paths2336<T[K], Prev2336[D]>> : never }[keyof T]
  : never;

type Prev2336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2336 {
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

type ConfigPaths2336 = Paths2336<NestedConfig2336>;

interface HeavyProps2336 {
  config: DeepPartial2336<NestedConfig2336>;
  path?: ConfigPaths2336;
}

const HeavyComponent2336 = memo(function HeavyComponent2336({ config }: HeavyProps2336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2336.displayName = 'HeavyComponent2336';
export default HeavyComponent2336;
