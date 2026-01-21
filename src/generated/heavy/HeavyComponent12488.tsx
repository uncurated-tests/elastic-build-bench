'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12488<T> = T extends (infer U)[]
  ? DeepReadonlyArray12488<U>
  : T extends object
  ? DeepReadonlyObject12488<T>
  : T;

interface DeepReadonlyArray12488<T> extends ReadonlyArray<DeepReadonly12488<T>> {}

type DeepReadonlyObject12488<T> = {
  readonly [P in keyof T]: DeepReadonly12488<T[P]>;
};

type UnionToIntersection12488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12488<T> = UnionToIntersection12488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12488<T extends unknown[], V> = [...T, V];

type TuplifyUnion12488<T, L = LastOf12488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12488<TuplifyUnion12488<Exclude<T, L>>, L>;

type DeepPartial12488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12488<T[P]> }
  : T;

type Paths12488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12488<K, Paths12488<T[K], Prev12488[D]>> : never }[keyof T]
  : never;

type Prev12488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12488 {
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

type ConfigPaths12488 = Paths12488<NestedConfig12488>;

interface HeavyProps12488 {
  config: DeepPartial12488<NestedConfig12488>;
  path?: ConfigPaths12488;
}

const HeavyComponent12488 = memo(function HeavyComponent12488({ config }: HeavyProps12488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12488.displayName = 'HeavyComponent12488';
export default HeavyComponent12488;
