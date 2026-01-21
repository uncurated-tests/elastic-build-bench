'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12576<T> = T extends (infer U)[]
  ? DeepReadonlyArray12576<U>
  : T extends object
  ? DeepReadonlyObject12576<T>
  : T;

interface DeepReadonlyArray12576<T> extends ReadonlyArray<DeepReadonly12576<T>> {}

type DeepReadonlyObject12576<T> = {
  readonly [P in keyof T]: DeepReadonly12576<T[P]>;
};

type UnionToIntersection12576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12576<T> = UnionToIntersection12576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12576<T extends unknown[], V> = [...T, V];

type TuplifyUnion12576<T, L = LastOf12576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12576<TuplifyUnion12576<Exclude<T, L>>, L>;

type DeepPartial12576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12576<T[P]> }
  : T;

type Paths12576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12576<K, Paths12576<T[K], Prev12576[D]>> : never }[keyof T]
  : never;

type Prev12576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12576 {
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

type ConfigPaths12576 = Paths12576<NestedConfig12576>;

interface HeavyProps12576 {
  config: DeepPartial12576<NestedConfig12576>;
  path?: ConfigPaths12576;
}

const HeavyComponent12576 = memo(function HeavyComponent12576({ config }: HeavyProps12576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12576.displayName = 'HeavyComponent12576';
export default HeavyComponent12576;
