'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12090<T> = T extends (infer U)[]
  ? DeepReadonlyArray12090<U>
  : T extends object
  ? DeepReadonlyObject12090<T>
  : T;

interface DeepReadonlyArray12090<T> extends ReadonlyArray<DeepReadonly12090<T>> {}

type DeepReadonlyObject12090<T> = {
  readonly [P in keyof T]: DeepReadonly12090<T[P]>;
};

type UnionToIntersection12090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12090<T> = UnionToIntersection12090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12090<T extends unknown[], V> = [...T, V];

type TuplifyUnion12090<T, L = LastOf12090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12090<TuplifyUnion12090<Exclude<T, L>>, L>;

type DeepPartial12090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12090<T[P]> }
  : T;

type Paths12090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12090<K, Paths12090<T[K], Prev12090[D]>> : never }[keyof T]
  : never;

type Prev12090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12090 {
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

type ConfigPaths12090 = Paths12090<NestedConfig12090>;

interface HeavyProps12090 {
  config: DeepPartial12090<NestedConfig12090>;
  path?: ConfigPaths12090;
}

const HeavyComponent12090 = memo(function HeavyComponent12090({ config }: HeavyProps12090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12090.displayName = 'HeavyComponent12090';
export default HeavyComponent12090;
