'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2852<T> = T extends (infer U)[]
  ? DeepReadonlyArray2852<U>
  : T extends object
  ? DeepReadonlyObject2852<T>
  : T;

interface DeepReadonlyArray2852<T> extends ReadonlyArray<DeepReadonly2852<T>> {}

type DeepReadonlyObject2852<T> = {
  readonly [P in keyof T]: DeepReadonly2852<T[P]>;
};

type UnionToIntersection2852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2852<T> = UnionToIntersection2852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2852<T extends unknown[], V> = [...T, V];

type TuplifyUnion2852<T, L = LastOf2852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2852<TuplifyUnion2852<Exclude<T, L>>, L>;

type DeepPartial2852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2852<T[P]> }
  : T;

type Paths2852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2852<K, Paths2852<T[K], Prev2852[D]>> : never }[keyof T]
  : never;

type Prev2852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2852 {
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

type ConfigPaths2852 = Paths2852<NestedConfig2852>;

interface HeavyProps2852 {
  config: DeepPartial2852<NestedConfig2852>;
  path?: ConfigPaths2852;
}

const HeavyComponent2852 = memo(function HeavyComponent2852({ config }: HeavyProps2852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2852.displayName = 'HeavyComponent2852';
export default HeavyComponent2852;
