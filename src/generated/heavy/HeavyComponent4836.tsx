'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4836<T> = T extends (infer U)[]
  ? DeepReadonlyArray4836<U>
  : T extends object
  ? DeepReadonlyObject4836<T>
  : T;

interface DeepReadonlyArray4836<T> extends ReadonlyArray<DeepReadonly4836<T>> {}

type DeepReadonlyObject4836<T> = {
  readonly [P in keyof T]: DeepReadonly4836<T[P]>;
};

type UnionToIntersection4836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4836<T> = UnionToIntersection4836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4836<T extends unknown[], V> = [...T, V];

type TuplifyUnion4836<T, L = LastOf4836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4836<TuplifyUnion4836<Exclude<T, L>>, L>;

type DeepPartial4836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4836<T[P]> }
  : T;

type Paths4836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4836<K, Paths4836<T[K], Prev4836[D]>> : never }[keyof T]
  : never;

type Prev4836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4836 {
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

type ConfigPaths4836 = Paths4836<NestedConfig4836>;

interface HeavyProps4836 {
  config: DeepPartial4836<NestedConfig4836>;
  path?: ConfigPaths4836;
}

const HeavyComponent4836 = memo(function HeavyComponent4836({ config }: HeavyProps4836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4836.displayName = 'HeavyComponent4836';
export default HeavyComponent4836;
