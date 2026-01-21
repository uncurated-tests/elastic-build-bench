'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12579<T> = T extends (infer U)[]
  ? DeepReadonlyArray12579<U>
  : T extends object
  ? DeepReadonlyObject12579<T>
  : T;

interface DeepReadonlyArray12579<T> extends ReadonlyArray<DeepReadonly12579<T>> {}

type DeepReadonlyObject12579<T> = {
  readonly [P in keyof T]: DeepReadonly12579<T[P]>;
};

type UnionToIntersection12579<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12579<T> = UnionToIntersection12579<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12579<T extends unknown[], V> = [...T, V];

type TuplifyUnion12579<T, L = LastOf12579<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12579<TuplifyUnion12579<Exclude<T, L>>, L>;

type DeepPartial12579<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12579<T[P]> }
  : T;

type Paths12579<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12579<K, Paths12579<T[K], Prev12579[D]>> : never }[keyof T]
  : never;

type Prev12579 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12579<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12579 {
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

type ConfigPaths12579 = Paths12579<NestedConfig12579>;

interface HeavyProps12579 {
  config: DeepPartial12579<NestedConfig12579>;
  path?: ConfigPaths12579;
}

const HeavyComponent12579 = memo(function HeavyComponent12579({ config }: HeavyProps12579) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12579) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12579 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12579: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12579.displayName = 'HeavyComponent12579';
export default HeavyComponent12579;
