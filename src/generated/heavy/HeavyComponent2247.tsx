'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2247<T> = T extends (infer U)[]
  ? DeepReadonlyArray2247<U>
  : T extends object
  ? DeepReadonlyObject2247<T>
  : T;

interface DeepReadonlyArray2247<T> extends ReadonlyArray<DeepReadonly2247<T>> {}

type DeepReadonlyObject2247<T> = {
  readonly [P in keyof T]: DeepReadonly2247<T[P]>;
};

type UnionToIntersection2247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2247<T> = UnionToIntersection2247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2247<T extends unknown[], V> = [...T, V];

type TuplifyUnion2247<T, L = LastOf2247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2247<TuplifyUnion2247<Exclude<T, L>>, L>;

type DeepPartial2247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2247<T[P]> }
  : T;

type Paths2247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2247<K, Paths2247<T[K], Prev2247[D]>> : never }[keyof T]
  : never;

type Prev2247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2247 {
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

type ConfigPaths2247 = Paths2247<NestedConfig2247>;

interface HeavyProps2247 {
  config: DeepPartial2247<NestedConfig2247>;
  path?: ConfigPaths2247;
}

const HeavyComponent2247 = memo(function HeavyComponent2247({ config }: HeavyProps2247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2247.displayName = 'HeavyComponent2247';
export default HeavyComponent2247;
