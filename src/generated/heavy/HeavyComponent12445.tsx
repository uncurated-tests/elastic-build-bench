'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12445<T> = T extends (infer U)[]
  ? DeepReadonlyArray12445<U>
  : T extends object
  ? DeepReadonlyObject12445<T>
  : T;

interface DeepReadonlyArray12445<T> extends ReadonlyArray<DeepReadonly12445<T>> {}

type DeepReadonlyObject12445<T> = {
  readonly [P in keyof T]: DeepReadonly12445<T[P]>;
};

type UnionToIntersection12445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12445<T> = UnionToIntersection12445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12445<T extends unknown[], V> = [...T, V];

type TuplifyUnion12445<T, L = LastOf12445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12445<TuplifyUnion12445<Exclude<T, L>>, L>;

type DeepPartial12445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12445<T[P]> }
  : T;

type Paths12445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12445<K, Paths12445<T[K], Prev12445[D]>> : never }[keyof T]
  : never;

type Prev12445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12445 {
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

type ConfigPaths12445 = Paths12445<NestedConfig12445>;

interface HeavyProps12445 {
  config: DeepPartial12445<NestedConfig12445>;
  path?: ConfigPaths12445;
}

const HeavyComponent12445 = memo(function HeavyComponent12445({ config }: HeavyProps12445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12445.displayName = 'HeavyComponent12445';
export default HeavyComponent12445;
