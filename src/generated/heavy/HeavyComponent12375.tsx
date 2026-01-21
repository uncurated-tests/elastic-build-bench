'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12375<T> = T extends (infer U)[]
  ? DeepReadonlyArray12375<U>
  : T extends object
  ? DeepReadonlyObject12375<T>
  : T;

interface DeepReadonlyArray12375<T> extends ReadonlyArray<DeepReadonly12375<T>> {}

type DeepReadonlyObject12375<T> = {
  readonly [P in keyof T]: DeepReadonly12375<T[P]>;
};

type UnionToIntersection12375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12375<T> = UnionToIntersection12375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12375<T extends unknown[], V> = [...T, V];

type TuplifyUnion12375<T, L = LastOf12375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12375<TuplifyUnion12375<Exclude<T, L>>, L>;

type DeepPartial12375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12375<T[P]> }
  : T;

type Paths12375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12375<K, Paths12375<T[K], Prev12375[D]>> : never }[keyof T]
  : never;

type Prev12375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12375 {
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

type ConfigPaths12375 = Paths12375<NestedConfig12375>;

interface HeavyProps12375 {
  config: DeepPartial12375<NestedConfig12375>;
  path?: ConfigPaths12375;
}

const HeavyComponent12375 = memo(function HeavyComponent12375({ config }: HeavyProps12375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12375.displayName = 'HeavyComponent12375';
export default HeavyComponent12375;
