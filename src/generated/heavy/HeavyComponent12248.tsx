'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12248<T> = T extends (infer U)[]
  ? DeepReadonlyArray12248<U>
  : T extends object
  ? DeepReadonlyObject12248<T>
  : T;

interface DeepReadonlyArray12248<T> extends ReadonlyArray<DeepReadonly12248<T>> {}

type DeepReadonlyObject12248<T> = {
  readonly [P in keyof T]: DeepReadonly12248<T[P]>;
};

type UnionToIntersection12248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12248<T> = UnionToIntersection12248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12248<T extends unknown[], V> = [...T, V];

type TuplifyUnion12248<T, L = LastOf12248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12248<TuplifyUnion12248<Exclude<T, L>>, L>;

type DeepPartial12248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12248<T[P]> }
  : T;

type Paths12248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12248<K, Paths12248<T[K], Prev12248[D]>> : never }[keyof T]
  : never;

type Prev12248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12248 {
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

type ConfigPaths12248 = Paths12248<NestedConfig12248>;

interface HeavyProps12248 {
  config: DeepPartial12248<NestedConfig12248>;
  path?: ConfigPaths12248;
}

const HeavyComponent12248 = memo(function HeavyComponent12248({ config }: HeavyProps12248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12248.displayName = 'HeavyComponent12248';
export default HeavyComponent12248;
