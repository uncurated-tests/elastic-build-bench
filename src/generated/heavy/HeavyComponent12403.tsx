'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12403<T> = T extends (infer U)[]
  ? DeepReadonlyArray12403<U>
  : T extends object
  ? DeepReadonlyObject12403<T>
  : T;

interface DeepReadonlyArray12403<T> extends ReadonlyArray<DeepReadonly12403<T>> {}

type DeepReadonlyObject12403<T> = {
  readonly [P in keyof T]: DeepReadonly12403<T[P]>;
};

type UnionToIntersection12403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12403<T> = UnionToIntersection12403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12403<T extends unknown[], V> = [...T, V];

type TuplifyUnion12403<T, L = LastOf12403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12403<TuplifyUnion12403<Exclude<T, L>>, L>;

type DeepPartial12403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12403<T[P]> }
  : T;

type Paths12403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12403<K, Paths12403<T[K], Prev12403[D]>> : never }[keyof T]
  : never;

type Prev12403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12403 {
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

type ConfigPaths12403 = Paths12403<NestedConfig12403>;

interface HeavyProps12403 {
  config: DeepPartial12403<NestedConfig12403>;
  path?: ConfigPaths12403;
}

const HeavyComponent12403 = memo(function HeavyComponent12403({ config }: HeavyProps12403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12403.displayName = 'HeavyComponent12403';
export default HeavyComponent12403;
