'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2245<T> = T extends (infer U)[]
  ? DeepReadonlyArray2245<U>
  : T extends object
  ? DeepReadonlyObject2245<T>
  : T;

interface DeepReadonlyArray2245<T> extends ReadonlyArray<DeepReadonly2245<T>> {}

type DeepReadonlyObject2245<T> = {
  readonly [P in keyof T]: DeepReadonly2245<T[P]>;
};

type UnionToIntersection2245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2245<T> = UnionToIntersection2245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2245<T extends unknown[], V> = [...T, V];

type TuplifyUnion2245<T, L = LastOf2245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2245<TuplifyUnion2245<Exclude<T, L>>, L>;

type DeepPartial2245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2245<T[P]> }
  : T;

type Paths2245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2245<K, Paths2245<T[K], Prev2245[D]>> : never }[keyof T]
  : never;

type Prev2245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2245 {
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

type ConfigPaths2245 = Paths2245<NestedConfig2245>;

interface HeavyProps2245 {
  config: DeepPartial2245<NestedConfig2245>;
  path?: ConfigPaths2245;
}

const HeavyComponent2245 = memo(function HeavyComponent2245({ config }: HeavyProps2245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2245.displayName = 'HeavyComponent2245';
export default HeavyComponent2245;
