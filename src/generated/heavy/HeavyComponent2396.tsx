'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2396<T> = T extends (infer U)[]
  ? DeepReadonlyArray2396<U>
  : T extends object
  ? DeepReadonlyObject2396<T>
  : T;

interface DeepReadonlyArray2396<T> extends ReadonlyArray<DeepReadonly2396<T>> {}

type DeepReadonlyObject2396<T> = {
  readonly [P in keyof T]: DeepReadonly2396<T[P]>;
};

type UnionToIntersection2396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2396<T> = UnionToIntersection2396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2396<T extends unknown[], V> = [...T, V];

type TuplifyUnion2396<T, L = LastOf2396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2396<TuplifyUnion2396<Exclude<T, L>>, L>;

type DeepPartial2396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2396<T[P]> }
  : T;

type Paths2396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2396<K, Paths2396<T[K], Prev2396[D]>> : never }[keyof T]
  : never;

type Prev2396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2396 {
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

type ConfigPaths2396 = Paths2396<NestedConfig2396>;

interface HeavyProps2396 {
  config: DeepPartial2396<NestedConfig2396>;
  path?: ConfigPaths2396;
}

const HeavyComponent2396 = memo(function HeavyComponent2396({ config }: HeavyProps2396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2396.displayName = 'HeavyComponent2396';
export default HeavyComponent2396;
