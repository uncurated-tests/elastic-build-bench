'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2254<T> = T extends (infer U)[]
  ? DeepReadonlyArray2254<U>
  : T extends object
  ? DeepReadonlyObject2254<T>
  : T;

interface DeepReadonlyArray2254<T> extends ReadonlyArray<DeepReadonly2254<T>> {}

type DeepReadonlyObject2254<T> = {
  readonly [P in keyof T]: DeepReadonly2254<T[P]>;
};

type UnionToIntersection2254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2254<T> = UnionToIntersection2254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2254<T extends unknown[], V> = [...T, V];

type TuplifyUnion2254<T, L = LastOf2254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2254<TuplifyUnion2254<Exclude<T, L>>, L>;

type DeepPartial2254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2254<T[P]> }
  : T;

type Paths2254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2254<K, Paths2254<T[K], Prev2254[D]>> : never }[keyof T]
  : never;

type Prev2254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2254 {
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

type ConfigPaths2254 = Paths2254<NestedConfig2254>;

interface HeavyProps2254 {
  config: DeepPartial2254<NestedConfig2254>;
  path?: ConfigPaths2254;
}

const HeavyComponent2254 = memo(function HeavyComponent2254({ config }: HeavyProps2254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2254.displayName = 'HeavyComponent2254';
export default HeavyComponent2254;
