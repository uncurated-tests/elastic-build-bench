'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12189<T> = T extends (infer U)[]
  ? DeepReadonlyArray12189<U>
  : T extends object
  ? DeepReadonlyObject12189<T>
  : T;

interface DeepReadonlyArray12189<T> extends ReadonlyArray<DeepReadonly12189<T>> {}

type DeepReadonlyObject12189<T> = {
  readonly [P in keyof T]: DeepReadonly12189<T[P]>;
};

type UnionToIntersection12189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12189<T> = UnionToIntersection12189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12189<T extends unknown[], V> = [...T, V];

type TuplifyUnion12189<T, L = LastOf12189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12189<TuplifyUnion12189<Exclude<T, L>>, L>;

type DeepPartial12189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12189<T[P]> }
  : T;

type Paths12189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12189<K, Paths12189<T[K], Prev12189[D]>> : never }[keyof T]
  : never;

type Prev12189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12189 {
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

type ConfigPaths12189 = Paths12189<NestedConfig12189>;

interface HeavyProps12189 {
  config: DeepPartial12189<NestedConfig12189>;
  path?: ConfigPaths12189;
}

const HeavyComponent12189 = memo(function HeavyComponent12189({ config }: HeavyProps12189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12189.displayName = 'HeavyComponent12189';
export default HeavyComponent12189;
