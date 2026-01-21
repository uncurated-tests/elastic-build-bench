'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2162<T> = T extends (infer U)[]
  ? DeepReadonlyArray2162<U>
  : T extends object
  ? DeepReadonlyObject2162<T>
  : T;

interface DeepReadonlyArray2162<T> extends ReadonlyArray<DeepReadonly2162<T>> {}

type DeepReadonlyObject2162<T> = {
  readonly [P in keyof T]: DeepReadonly2162<T[P]>;
};

type UnionToIntersection2162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2162<T> = UnionToIntersection2162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2162<T extends unknown[], V> = [...T, V];

type TuplifyUnion2162<T, L = LastOf2162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2162<TuplifyUnion2162<Exclude<T, L>>, L>;

type DeepPartial2162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2162<T[P]> }
  : T;

type Paths2162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2162<K, Paths2162<T[K], Prev2162[D]>> : never }[keyof T]
  : never;

type Prev2162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2162 {
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

type ConfigPaths2162 = Paths2162<NestedConfig2162>;

interface HeavyProps2162 {
  config: DeepPartial2162<NestedConfig2162>;
  path?: ConfigPaths2162;
}

const HeavyComponent2162 = memo(function HeavyComponent2162({ config }: HeavyProps2162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2162.displayName = 'HeavyComponent2162';
export default HeavyComponent2162;
