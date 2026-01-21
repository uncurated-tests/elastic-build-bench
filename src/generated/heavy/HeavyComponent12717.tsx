'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12717<T> = T extends (infer U)[]
  ? DeepReadonlyArray12717<U>
  : T extends object
  ? DeepReadonlyObject12717<T>
  : T;

interface DeepReadonlyArray12717<T> extends ReadonlyArray<DeepReadonly12717<T>> {}

type DeepReadonlyObject12717<T> = {
  readonly [P in keyof T]: DeepReadonly12717<T[P]>;
};

type UnionToIntersection12717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12717<T> = UnionToIntersection12717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12717<T extends unknown[], V> = [...T, V];

type TuplifyUnion12717<T, L = LastOf12717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12717<TuplifyUnion12717<Exclude<T, L>>, L>;

type DeepPartial12717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12717<T[P]> }
  : T;

type Paths12717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12717<K, Paths12717<T[K], Prev12717[D]>> : never }[keyof T]
  : never;

type Prev12717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12717 {
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

type ConfigPaths12717 = Paths12717<NestedConfig12717>;

interface HeavyProps12717 {
  config: DeepPartial12717<NestedConfig12717>;
  path?: ConfigPaths12717;
}

const HeavyComponent12717 = memo(function HeavyComponent12717({ config }: HeavyProps12717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12717.displayName = 'HeavyComponent12717';
export default HeavyComponent12717;
