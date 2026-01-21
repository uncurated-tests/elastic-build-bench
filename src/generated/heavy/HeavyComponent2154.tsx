'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2154<T> = T extends (infer U)[]
  ? DeepReadonlyArray2154<U>
  : T extends object
  ? DeepReadonlyObject2154<T>
  : T;

interface DeepReadonlyArray2154<T> extends ReadonlyArray<DeepReadonly2154<T>> {}

type DeepReadonlyObject2154<T> = {
  readonly [P in keyof T]: DeepReadonly2154<T[P]>;
};

type UnionToIntersection2154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2154<T> = UnionToIntersection2154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2154<T extends unknown[], V> = [...T, V];

type TuplifyUnion2154<T, L = LastOf2154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2154<TuplifyUnion2154<Exclude<T, L>>, L>;

type DeepPartial2154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2154<T[P]> }
  : T;

type Paths2154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2154<K, Paths2154<T[K], Prev2154[D]>> : never }[keyof T]
  : never;

type Prev2154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2154 {
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

type ConfigPaths2154 = Paths2154<NestedConfig2154>;

interface HeavyProps2154 {
  config: DeepPartial2154<NestedConfig2154>;
  path?: ConfigPaths2154;
}

const HeavyComponent2154 = memo(function HeavyComponent2154({ config }: HeavyProps2154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2154.displayName = 'HeavyComponent2154';
export default HeavyComponent2154;
