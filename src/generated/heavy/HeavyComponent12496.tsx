'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12496<T> = T extends (infer U)[]
  ? DeepReadonlyArray12496<U>
  : T extends object
  ? DeepReadonlyObject12496<T>
  : T;

interface DeepReadonlyArray12496<T> extends ReadonlyArray<DeepReadonly12496<T>> {}

type DeepReadonlyObject12496<T> = {
  readonly [P in keyof T]: DeepReadonly12496<T[P]>;
};

type UnionToIntersection12496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12496<T> = UnionToIntersection12496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12496<T extends unknown[], V> = [...T, V];

type TuplifyUnion12496<T, L = LastOf12496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12496<TuplifyUnion12496<Exclude<T, L>>, L>;

type DeepPartial12496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12496<T[P]> }
  : T;

type Paths12496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12496<K, Paths12496<T[K], Prev12496[D]>> : never }[keyof T]
  : never;

type Prev12496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12496 {
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

type ConfigPaths12496 = Paths12496<NestedConfig12496>;

interface HeavyProps12496 {
  config: DeepPartial12496<NestedConfig12496>;
  path?: ConfigPaths12496;
}

const HeavyComponent12496 = memo(function HeavyComponent12496({ config }: HeavyProps12496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12496.displayName = 'HeavyComponent12496';
export default HeavyComponent12496;
