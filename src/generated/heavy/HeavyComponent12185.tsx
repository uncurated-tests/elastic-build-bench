'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12185<T> = T extends (infer U)[]
  ? DeepReadonlyArray12185<U>
  : T extends object
  ? DeepReadonlyObject12185<T>
  : T;

interface DeepReadonlyArray12185<T> extends ReadonlyArray<DeepReadonly12185<T>> {}

type DeepReadonlyObject12185<T> = {
  readonly [P in keyof T]: DeepReadonly12185<T[P]>;
};

type UnionToIntersection12185<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12185<T> = UnionToIntersection12185<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12185<T extends unknown[], V> = [...T, V];

type TuplifyUnion12185<T, L = LastOf12185<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12185<TuplifyUnion12185<Exclude<T, L>>, L>;

type DeepPartial12185<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12185<T[P]> }
  : T;

type Paths12185<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12185<K, Paths12185<T[K], Prev12185[D]>> : never }[keyof T]
  : never;

type Prev12185 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12185<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12185 {
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

type ConfigPaths12185 = Paths12185<NestedConfig12185>;

interface HeavyProps12185 {
  config: DeepPartial12185<NestedConfig12185>;
  path?: ConfigPaths12185;
}

const HeavyComponent12185 = memo(function HeavyComponent12185({ config }: HeavyProps12185) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12185) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12185 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12185: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12185.displayName = 'HeavyComponent12185';
export default HeavyComponent12185;
