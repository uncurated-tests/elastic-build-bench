'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2157<T> = T extends (infer U)[]
  ? DeepReadonlyArray2157<U>
  : T extends object
  ? DeepReadonlyObject2157<T>
  : T;

interface DeepReadonlyArray2157<T> extends ReadonlyArray<DeepReadonly2157<T>> {}

type DeepReadonlyObject2157<T> = {
  readonly [P in keyof T]: DeepReadonly2157<T[P]>;
};

type UnionToIntersection2157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2157<T> = UnionToIntersection2157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2157<T extends unknown[], V> = [...T, V];

type TuplifyUnion2157<T, L = LastOf2157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2157<TuplifyUnion2157<Exclude<T, L>>, L>;

type DeepPartial2157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2157<T[P]> }
  : T;

type Paths2157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2157<K, Paths2157<T[K], Prev2157[D]>> : never }[keyof T]
  : never;

type Prev2157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2157 {
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

type ConfigPaths2157 = Paths2157<NestedConfig2157>;

interface HeavyProps2157 {
  config: DeepPartial2157<NestedConfig2157>;
  path?: ConfigPaths2157;
}

const HeavyComponent2157 = memo(function HeavyComponent2157({ config }: HeavyProps2157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2157.displayName = 'HeavyComponent2157';
export default HeavyComponent2157;
