'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2575<T> = T extends (infer U)[]
  ? DeepReadonlyArray2575<U>
  : T extends object
  ? DeepReadonlyObject2575<T>
  : T;

interface DeepReadonlyArray2575<T> extends ReadonlyArray<DeepReadonly2575<T>> {}

type DeepReadonlyObject2575<T> = {
  readonly [P in keyof T]: DeepReadonly2575<T[P]>;
};

type UnionToIntersection2575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2575<T> = UnionToIntersection2575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2575<T extends unknown[], V> = [...T, V];

type TuplifyUnion2575<T, L = LastOf2575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2575<TuplifyUnion2575<Exclude<T, L>>, L>;

type DeepPartial2575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2575<T[P]> }
  : T;

type Paths2575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2575<K, Paths2575<T[K], Prev2575[D]>> : never }[keyof T]
  : never;

type Prev2575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2575 {
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

type ConfigPaths2575 = Paths2575<NestedConfig2575>;

interface HeavyProps2575 {
  config: DeepPartial2575<NestedConfig2575>;
  path?: ConfigPaths2575;
}

const HeavyComponent2575 = memo(function HeavyComponent2575({ config }: HeavyProps2575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2575.displayName = 'HeavyComponent2575';
export default HeavyComponent2575;
