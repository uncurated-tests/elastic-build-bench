'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2997<T> = T extends (infer U)[]
  ? DeepReadonlyArray2997<U>
  : T extends object
  ? DeepReadonlyObject2997<T>
  : T;

interface DeepReadonlyArray2997<T> extends ReadonlyArray<DeepReadonly2997<T>> {}

type DeepReadonlyObject2997<T> = {
  readonly [P in keyof T]: DeepReadonly2997<T[P]>;
};

type UnionToIntersection2997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2997<T> = UnionToIntersection2997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2997<T extends unknown[], V> = [...T, V];

type TuplifyUnion2997<T, L = LastOf2997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2997<TuplifyUnion2997<Exclude<T, L>>, L>;

type DeepPartial2997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2997<T[P]> }
  : T;

type Paths2997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2997<K, Paths2997<T[K], Prev2997[D]>> : never }[keyof T]
  : never;

type Prev2997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2997 {
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

type ConfigPaths2997 = Paths2997<NestedConfig2997>;

interface HeavyProps2997 {
  config: DeepPartial2997<NestedConfig2997>;
  path?: ConfigPaths2997;
}

const HeavyComponent2997 = memo(function HeavyComponent2997({ config }: HeavyProps2997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2997.displayName = 'HeavyComponent2997';
export default HeavyComponent2997;
