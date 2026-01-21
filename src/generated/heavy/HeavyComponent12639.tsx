'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12639<T> = T extends (infer U)[]
  ? DeepReadonlyArray12639<U>
  : T extends object
  ? DeepReadonlyObject12639<T>
  : T;

interface DeepReadonlyArray12639<T> extends ReadonlyArray<DeepReadonly12639<T>> {}

type DeepReadonlyObject12639<T> = {
  readonly [P in keyof T]: DeepReadonly12639<T[P]>;
};

type UnionToIntersection12639<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12639<T> = UnionToIntersection12639<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12639<T extends unknown[], V> = [...T, V];

type TuplifyUnion12639<T, L = LastOf12639<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12639<TuplifyUnion12639<Exclude<T, L>>, L>;

type DeepPartial12639<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12639<T[P]> }
  : T;

type Paths12639<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12639<K, Paths12639<T[K], Prev12639[D]>> : never }[keyof T]
  : never;

type Prev12639 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12639<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12639 {
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

type ConfigPaths12639 = Paths12639<NestedConfig12639>;

interface HeavyProps12639 {
  config: DeepPartial12639<NestedConfig12639>;
  path?: ConfigPaths12639;
}

const HeavyComponent12639 = memo(function HeavyComponent12639({ config }: HeavyProps12639) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12639) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12639 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12639: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12639.displayName = 'HeavyComponent12639';
export default HeavyComponent12639;
