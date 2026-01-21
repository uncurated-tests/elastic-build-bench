'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2878<T> = T extends (infer U)[]
  ? DeepReadonlyArray2878<U>
  : T extends object
  ? DeepReadonlyObject2878<T>
  : T;

interface DeepReadonlyArray2878<T> extends ReadonlyArray<DeepReadonly2878<T>> {}

type DeepReadonlyObject2878<T> = {
  readonly [P in keyof T]: DeepReadonly2878<T[P]>;
};

type UnionToIntersection2878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2878<T> = UnionToIntersection2878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2878<T extends unknown[], V> = [...T, V];

type TuplifyUnion2878<T, L = LastOf2878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2878<TuplifyUnion2878<Exclude<T, L>>, L>;

type DeepPartial2878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2878<T[P]> }
  : T;

type Paths2878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2878<K, Paths2878<T[K], Prev2878[D]>> : never }[keyof T]
  : never;

type Prev2878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2878 {
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

type ConfigPaths2878 = Paths2878<NestedConfig2878>;

interface HeavyProps2878 {
  config: DeepPartial2878<NestedConfig2878>;
  path?: ConfigPaths2878;
}

const HeavyComponent2878 = memo(function HeavyComponent2878({ config }: HeavyProps2878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2878.displayName = 'HeavyComponent2878';
export default HeavyComponent2878;
