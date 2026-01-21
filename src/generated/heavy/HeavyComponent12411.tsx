'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12411<T> = T extends (infer U)[]
  ? DeepReadonlyArray12411<U>
  : T extends object
  ? DeepReadonlyObject12411<T>
  : T;

interface DeepReadonlyArray12411<T> extends ReadonlyArray<DeepReadonly12411<T>> {}

type DeepReadonlyObject12411<T> = {
  readonly [P in keyof T]: DeepReadonly12411<T[P]>;
};

type UnionToIntersection12411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12411<T> = UnionToIntersection12411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12411<T extends unknown[], V> = [...T, V];

type TuplifyUnion12411<T, L = LastOf12411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12411<TuplifyUnion12411<Exclude<T, L>>, L>;

type DeepPartial12411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12411<T[P]> }
  : T;

type Paths12411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12411<K, Paths12411<T[K], Prev12411[D]>> : never }[keyof T]
  : never;

type Prev12411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12411 {
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

type ConfigPaths12411 = Paths12411<NestedConfig12411>;

interface HeavyProps12411 {
  config: DeepPartial12411<NestedConfig12411>;
  path?: ConfigPaths12411;
}

const HeavyComponent12411 = memo(function HeavyComponent12411({ config }: HeavyProps12411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12411.displayName = 'HeavyComponent12411';
export default HeavyComponent12411;
