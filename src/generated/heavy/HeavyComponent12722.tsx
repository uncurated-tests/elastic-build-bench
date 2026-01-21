'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12722<T> = T extends (infer U)[]
  ? DeepReadonlyArray12722<U>
  : T extends object
  ? DeepReadonlyObject12722<T>
  : T;

interface DeepReadonlyArray12722<T> extends ReadonlyArray<DeepReadonly12722<T>> {}

type DeepReadonlyObject12722<T> = {
  readonly [P in keyof T]: DeepReadonly12722<T[P]>;
};

type UnionToIntersection12722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12722<T> = UnionToIntersection12722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12722<T extends unknown[], V> = [...T, V];

type TuplifyUnion12722<T, L = LastOf12722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12722<TuplifyUnion12722<Exclude<T, L>>, L>;

type DeepPartial12722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12722<T[P]> }
  : T;

type Paths12722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12722<K, Paths12722<T[K], Prev12722[D]>> : never }[keyof T]
  : never;

type Prev12722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12722 {
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

type ConfigPaths12722 = Paths12722<NestedConfig12722>;

interface HeavyProps12722 {
  config: DeepPartial12722<NestedConfig12722>;
  path?: ConfigPaths12722;
}

const HeavyComponent12722 = memo(function HeavyComponent12722({ config }: HeavyProps12722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12722.displayName = 'HeavyComponent12722';
export default HeavyComponent12722;
