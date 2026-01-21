'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12987<T> = T extends (infer U)[]
  ? DeepReadonlyArray12987<U>
  : T extends object
  ? DeepReadonlyObject12987<T>
  : T;

interface DeepReadonlyArray12987<T> extends ReadonlyArray<DeepReadonly12987<T>> {}

type DeepReadonlyObject12987<T> = {
  readonly [P in keyof T]: DeepReadonly12987<T[P]>;
};

type UnionToIntersection12987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12987<T> = UnionToIntersection12987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12987<T extends unknown[], V> = [...T, V];

type TuplifyUnion12987<T, L = LastOf12987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12987<TuplifyUnion12987<Exclude<T, L>>, L>;

type DeepPartial12987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12987<T[P]> }
  : T;

type Paths12987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12987<K, Paths12987<T[K], Prev12987[D]>> : never }[keyof T]
  : never;

type Prev12987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12987 {
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

type ConfigPaths12987 = Paths12987<NestedConfig12987>;

interface HeavyProps12987 {
  config: DeepPartial12987<NestedConfig12987>;
  path?: ConfigPaths12987;
}

const HeavyComponent12987 = memo(function HeavyComponent12987({ config }: HeavyProps12987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12987.displayName = 'HeavyComponent12987';
export default HeavyComponent12987;
