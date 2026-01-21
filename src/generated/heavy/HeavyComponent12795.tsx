'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12795<T> = T extends (infer U)[]
  ? DeepReadonlyArray12795<U>
  : T extends object
  ? DeepReadonlyObject12795<T>
  : T;

interface DeepReadonlyArray12795<T> extends ReadonlyArray<DeepReadonly12795<T>> {}

type DeepReadonlyObject12795<T> = {
  readonly [P in keyof T]: DeepReadonly12795<T[P]>;
};

type UnionToIntersection12795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12795<T> = UnionToIntersection12795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12795<T extends unknown[], V> = [...T, V];

type TuplifyUnion12795<T, L = LastOf12795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12795<TuplifyUnion12795<Exclude<T, L>>, L>;

type DeepPartial12795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12795<T[P]> }
  : T;

type Paths12795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12795<K, Paths12795<T[K], Prev12795[D]>> : never }[keyof T]
  : never;

type Prev12795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12795 {
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

type ConfigPaths12795 = Paths12795<NestedConfig12795>;

interface HeavyProps12795 {
  config: DeepPartial12795<NestedConfig12795>;
  path?: ConfigPaths12795;
}

const HeavyComponent12795 = memo(function HeavyComponent12795({ config }: HeavyProps12795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12795.displayName = 'HeavyComponent12795';
export default HeavyComponent12795;
