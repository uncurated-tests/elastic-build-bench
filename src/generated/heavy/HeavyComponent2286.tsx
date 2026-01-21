'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2286<T> = T extends (infer U)[]
  ? DeepReadonlyArray2286<U>
  : T extends object
  ? DeepReadonlyObject2286<T>
  : T;

interface DeepReadonlyArray2286<T> extends ReadonlyArray<DeepReadonly2286<T>> {}

type DeepReadonlyObject2286<T> = {
  readonly [P in keyof T]: DeepReadonly2286<T[P]>;
};

type UnionToIntersection2286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2286<T> = UnionToIntersection2286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2286<T extends unknown[], V> = [...T, V];

type TuplifyUnion2286<T, L = LastOf2286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2286<TuplifyUnion2286<Exclude<T, L>>, L>;

type DeepPartial2286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2286<T[P]> }
  : T;

type Paths2286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2286<K, Paths2286<T[K], Prev2286[D]>> : never }[keyof T]
  : never;

type Prev2286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2286 {
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

type ConfigPaths2286 = Paths2286<NestedConfig2286>;

interface HeavyProps2286 {
  config: DeepPartial2286<NestedConfig2286>;
  path?: ConfigPaths2286;
}

const HeavyComponent2286 = memo(function HeavyComponent2286({ config }: HeavyProps2286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2286.displayName = 'HeavyComponent2286';
export default HeavyComponent2286;
