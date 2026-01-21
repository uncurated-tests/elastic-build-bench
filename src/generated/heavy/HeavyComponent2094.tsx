'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2094<T> = T extends (infer U)[]
  ? DeepReadonlyArray2094<U>
  : T extends object
  ? DeepReadonlyObject2094<T>
  : T;

interface DeepReadonlyArray2094<T> extends ReadonlyArray<DeepReadonly2094<T>> {}

type DeepReadonlyObject2094<T> = {
  readonly [P in keyof T]: DeepReadonly2094<T[P]>;
};

type UnionToIntersection2094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2094<T> = UnionToIntersection2094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2094<T extends unknown[], V> = [...T, V];

type TuplifyUnion2094<T, L = LastOf2094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2094<TuplifyUnion2094<Exclude<T, L>>, L>;

type DeepPartial2094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2094<T[P]> }
  : T;

type Paths2094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2094<K, Paths2094<T[K], Prev2094[D]>> : never }[keyof T]
  : never;

type Prev2094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2094 {
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

type ConfigPaths2094 = Paths2094<NestedConfig2094>;

interface HeavyProps2094 {
  config: DeepPartial2094<NestedConfig2094>;
  path?: ConfigPaths2094;
}

const HeavyComponent2094 = memo(function HeavyComponent2094({ config }: HeavyProps2094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2094.displayName = 'HeavyComponent2094';
export default HeavyComponent2094;
