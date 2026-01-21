'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12360<T> = T extends (infer U)[]
  ? DeepReadonlyArray12360<U>
  : T extends object
  ? DeepReadonlyObject12360<T>
  : T;

interface DeepReadonlyArray12360<T> extends ReadonlyArray<DeepReadonly12360<T>> {}

type DeepReadonlyObject12360<T> = {
  readonly [P in keyof T]: DeepReadonly12360<T[P]>;
};

type UnionToIntersection12360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12360<T> = UnionToIntersection12360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12360<T extends unknown[], V> = [...T, V];

type TuplifyUnion12360<T, L = LastOf12360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12360<TuplifyUnion12360<Exclude<T, L>>, L>;

type DeepPartial12360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12360<T[P]> }
  : T;

type Paths12360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12360<K, Paths12360<T[K], Prev12360[D]>> : never }[keyof T]
  : never;

type Prev12360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12360 {
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

type ConfigPaths12360 = Paths12360<NestedConfig12360>;

interface HeavyProps12360 {
  config: DeepPartial12360<NestedConfig12360>;
  path?: ConfigPaths12360;
}

const HeavyComponent12360 = memo(function HeavyComponent12360({ config }: HeavyProps12360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12360.displayName = 'HeavyComponent12360';
export default HeavyComponent12360;
