'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12461<T> = T extends (infer U)[]
  ? DeepReadonlyArray12461<U>
  : T extends object
  ? DeepReadonlyObject12461<T>
  : T;

interface DeepReadonlyArray12461<T> extends ReadonlyArray<DeepReadonly12461<T>> {}

type DeepReadonlyObject12461<T> = {
  readonly [P in keyof T]: DeepReadonly12461<T[P]>;
};

type UnionToIntersection12461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12461<T> = UnionToIntersection12461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12461<T extends unknown[], V> = [...T, V];

type TuplifyUnion12461<T, L = LastOf12461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12461<TuplifyUnion12461<Exclude<T, L>>, L>;

type DeepPartial12461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12461<T[P]> }
  : T;

type Paths12461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12461<K, Paths12461<T[K], Prev12461[D]>> : never }[keyof T]
  : never;

type Prev12461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12461 {
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

type ConfigPaths12461 = Paths12461<NestedConfig12461>;

interface HeavyProps12461 {
  config: DeepPartial12461<NestedConfig12461>;
  path?: ConfigPaths12461;
}

const HeavyComponent12461 = memo(function HeavyComponent12461({ config }: HeavyProps12461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12461.displayName = 'HeavyComponent12461';
export default HeavyComponent12461;
