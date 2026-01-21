'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12072<T> = T extends (infer U)[]
  ? DeepReadonlyArray12072<U>
  : T extends object
  ? DeepReadonlyObject12072<T>
  : T;

interface DeepReadonlyArray12072<T> extends ReadonlyArray<DeepReadonly12072<T>> {}

type DeepReadonlyObject12072<T> = {
  readonly [P in keyof T]: DeepReadonly12072<T[P]>;
};

type UnionToIntersection12072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12072<T> = UnionToIntersection12072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12072<T extends unknown[], V> = [...T, V];

type TuplifyUnion12072<T, L = LastOf12072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12072<TuplifyUnion12072<Exclude<T, L>>, L>;

type DeepPartial12072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12072<T[P]> }
  : T;

type Paths12072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12072<K, Paths12072<T[K], Prev12072[D]>> : never }[keyof T]
  : never;

type Prev12072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12072 {
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

type ConfigPaths12072 = Paths12072<NestedConfig12072>;

interface HeavyProps12072 {
  config: DeepPartial12072<NestedConfig12072>;
  path?: ConfigPaths12072;
}

const HeavyComponent12072 = memo(function HeavyComponent12072({ config }: HeavyProps12072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12072.displayName = 'HeavyComponent12072';
export default HeavyComponent12072;
