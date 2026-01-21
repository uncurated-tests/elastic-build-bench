'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12326<T> = T extends (infer U)[]
  ? DeepReadonlyArray12326<U>
  : T extends object
  ? DeepReadonlyObject12326<T>
  : T;

interface DeepReadonlyArray12326<T> extends ReadonlyArray<DeepReadonly12326<T>> {}

type DeepReadonlyObject12326<T> = {
  readonly [P in keyof T]: DeepReadonly12326<T[P]>;
};

type UnionToIntersection12326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12326<T> = UnionToIntersection12326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12326<T extends unknown[], V> = [...T, V];

type TuplifyUnion12326<T, L = LastOf12326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12326<TuplifyUnion12326<Exclude<T, L>>, L>;

type DeepPartial12326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12326<T[P]> }
  : T;

type Paths12326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12326<K, Paths12326<T[K], Prev12326[D]>> : never }[keyof T]
  : never;

type Prev12326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12326 {
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

type ConfigPaths12326 = Paths12326<NestedConfig12326>;

interface HeavyProps12326 {
  config: DeepPartial12326<NestedConfig12326>;
  path?: ConfigPaths12326;
}

const HeavyComponent12326 = memo(function HeavyComponent12326({ config }: HeavyProps12326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12326.displayName = 'HeavyComponent12326';
export default HeavyComponent12326;
