'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12037<T> = T extends (infer U)[]
  ? DeepReadonlyArray12037<U>
  : T extends object
  ? DeepReadonlyObject12037<T>
  : T;

interface DeepReadonlyArray12037<T> extends ReadonlyArray<DeepReadonly12037<T>> {}

type DeepReadonlyObject12037<T> = {
  readonly [P in keyof T]: DeepReadonly12037<T[P]>;
};

type UnionToIntersection12037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12037<T> = UnionToIntersection12037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12037<T extends unknown[], V> = [...T, V];

type TuplifyUnion12037<T, L = LastOf12037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12037<TuplifyUnion12037<Exclude<T, L>>, L>;

type DeepPartial12037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12037<T[P]> }
  : T;

type Paths12037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12037<K, Paths12037<T[K], Prev12037[D]>> : never }[keyof T]
  : never;

type Prev12037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12037 {
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

type ConfigPaths12037 = Paths12037<NestedConfig12037>;

interface HeavyProps12037 {
  config: DeepPartial12037<NestedConfig12037>;
  path?: ConfigPaths12037;
}

const HeavyComponent12037 = memo(function HeavyComponent12037({ config }: HeavyProps12037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12037.displayName = 'HeavyComponent12037';
export default HeavyComponent12037;
