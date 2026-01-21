'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12261<T> = T extends (infer U)[]
  ? DeepReadonlyArray12261<U>
  : T extends object
  ? DeepReadonlyObject12261<T>
  : T;

interface DeepReadonlyArray12261<T> extends ReadonlyArray<DeepReadonly12261<T>> {}

type DeepReadonlyObject12261<T> = {
  readonly [P in keyof T]: DeepReadonly12261<T[P]>;
};

type UnionToIntersection12261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12261<T> = UnionToIntersection12261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12261<T extends unknown[], V> = [...T, V];

type TuplifyUnion12261<T, L = LastOf12261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12261<TuplifyUnion12261<Exclude<T, L>>, L>;

type DeepPartial12261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12261<T[P]> }
  : T;

type Paths12261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12261<K, Paths12261<T[K], Prev12261[D]>> : never }[keyof T]
  : never;

type Prev12261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12261 {
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

type ConfigPaths12261 = Paths12261<NestedConfig12261>;

interface HeavyProps12261 {
  config: DeepPartial12261<NestedConfig12261>;
  path?: ConfigPaths12261;
}

const HeavyComponent12261 = memo(function HeavyComponent12261({ config }: HeavyProps12261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12261.displayName = 'HeavyComponent12261';
export default HeavyComponent12261;
