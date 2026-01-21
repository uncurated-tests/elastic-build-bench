'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12314<T> = T extends (infer U)[]
  ? DeepReadonlyArray12314<U>
  : T extends object
  ? DeepReadonlyObject12314<T>
  : T;

interface DeepReadonlyArray12314<T> extends ReadonlyArray<DeepReadonly12314<T>> {}

type DeepReadonlyObject12314<T> = {
  readonly [P in keyof T]: DeepReadonly12314<T[P]>;
};

type UnionToIntersection12314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12314<T> = UnionToIntersection12314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12314<T extends unknown[], V> = [...T, V];

type TuplifyUnion12314<T, L = LastOf12314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12314<TuplifyUnion12314<Exclude<T, L>>, L>;

type DeepPartial12314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12314<T[P]> }
  : T;

type Paths12314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12314<K, Paths12314<T[K], Prev12314[D]>> : never }[keyof T]
  : never;

type Prev12314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12314 {
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

type ConfigPaths12314 = Paths12314<NestedConfig12314>;

interface HeavyProps12314 {
  config: DeepPartial12314<NestedConfig12314>;
  path?: ConfigPaths12314;
}

const HeavyComponent12314 = memo(function HeavyComponent12314({ config }: HeavyProps12314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12314.displayName = 'HeavyComponent12314';
export default HeavyComponent12314;
