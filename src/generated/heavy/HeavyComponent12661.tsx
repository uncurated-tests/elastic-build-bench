'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12661<T> = T extends (infer U)[]
  ? DeepReadonlyArray12661<U>
  : T extends object
  ? DeepReadonlyObject12661<T>
  : T;

interface DeepReadonlyArray12661<T> extends ReadonlyArray<DeepReadonly12661<T>> {}

type DeepReadonlyObject12661<T> = {
  readonly [P in keyof T]: DeepReadonly12661<T[P]>;
};

type UnionToIntersection12661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12661<T> = UnionToIntersection12661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12661<T extends unknown[], V> = [...T, V];

type TuplifyUnion12661<T, L = LastOf12661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12661<TuplifyUnion12661<Exclude<T, L>>, L>;

type DeepPartial12661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12661<T[P]> }
  : T;

type Paths12661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12661<K, Paths12661<T[K], Prev12661[D]>> : never }[keyof T]
  : never;

type Prev12661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12661 {
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

type ConfigPaths12661 = Paths12661<NestedConfig12661>;

interface HeavyProps12661 {
  config: DeepPartial12661<NestedConfig12661>;
  path?: ConfigPaths12661;
}

const HeavyComponent12661 = memo(function HeavyComponent12661({ config }: HeavyProps12661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12661.displayName = 'HeavyComponent12661';
export default HeavyComponent12661;
