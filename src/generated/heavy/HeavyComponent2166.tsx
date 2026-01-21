'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2166<T> = T extends (infer U)[]
  ? DeepReadonlyArray2166<U>
  : T extends object
  ? DeepReadonlyObject2166<T>
  : T;

interface DeepReadonlyArray2166<T> extends ReadonlyArray<DeepReadonly2166<T>> {}

type DeepReadonlyObject2166<T> = {
  readonly [P in keyof T]: DeepReadonly2166<T[P]>;
};

type UnionToIntersection2166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2166<T> = UnionToIntersection2166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2166<T extends unknown[], V> = [...T, V];

type TuplifyUnion2166<T, L = LastOf2166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2166<TuplifyUnion2166<Exclude<T, L>>, L>;

type DeepPartial2166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2166<T[P]> }
  : T;

type Paths2166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2166<K, Paths2166<T[K], Prev2166[D]>> : never }[keyof T]
  : never;

type Prev2166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2166 {
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

type ConfigPaths2166 = Paths2166<NestedConfig2166>;

interface HeavyProps2166 {
  config: DeepPartial2166<NestedConfig2166>;
  path?: ConfigPaths2166;
}

const HeavyComponent2166 = memo(function HeavyComponent2166({ config }: HeavyProps2166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2166.displayName = 'HeavyComponent2166';
export default HeavyComponent2166;
