'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2977<T> = T extends (infer U)[]
  ? DeepReadonlyArray2977<U>
  : T extends object
  ? DeepReadonlyObject2977<T>
  : T;

interface DeepReadonlyArray2977<T> extends ReadonlyArray<DeepReadonly2977<T>> {}

type DeepReadonlyObject2977<T> = {
  readonly [P in keyof T]: DeepReadonly2977<T[P]>;
};

type UnionToIntersection2977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2977<T> = UnionToIntersection2977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2977<T extends unknown[], V> = [...T, V];

type TuplifyUnion2977<T, L = LastOf2977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2977<TuplifyUnion2977<Exclude<T, L>>, L>;

type DeepPartial2977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2977<T[P]> }
  : T;

type Paths2977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2977<K, Paths2977<T[K], Prev2977[D]>> : never }[keyof T]
  : never;

type Prev2977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2977 {
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

type ConfigPaths2977 = Paths2977<NestedConfig2977>;

interface HeavyProps2977 {
  config: DeepPartial2977<NestedConfig2977>;
  path?: ConfigPaths2977;
}

const HeavyComponent2977 = memo(function HeavyComponent2977({ config }: HeavyProps2977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2977.displayName = 'HeavyComponent2977';
export default HeavyComponent2977;
