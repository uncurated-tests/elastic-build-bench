'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12017<T> = T extends (infer U)[]
  ? DeepReadonlyArray12017<U>
  : T extends object
  ? DeepReadonlyObject12017<T>
  : T;

interface DeepReadonlyArray12017<T> extends ReadonlyArray<DeepReadonly12017<T>> {}

type DeepReadonlyObject12017<T> = {
  readonly [P in keyof T]: DeepReadonly12017<T[P]>;
};

type UnionToIntersection12017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12017<T> = UnionToIntersection12017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12017<T extends unknown[], V> = [...T, V];

type TuplifyUnion12017<T, L = LastOf12017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12017<TuplifyUnion12017<Exclude<T, L>>, L>;

type DeepPartial12017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12017<T[P]> }
  : T;

type Paths12017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12017<K, Paths12017<T[K], Prev12017[D]>> : never }[keyof T]
  : never;

type Prev12017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12017 {
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

type ConfigPaths12017 = Paths12017<NestedConfig12017>;

interface HeavyProps12017 {
  config: DeepPartial12017<NestedConfig12017>;
  path?: ConfigPaths12017;
}

const HeavyComponent12017 = memo(function HeavyComponent12017({ config }: HeavyProps12017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12017.displayName = 'HeavyComponent12017';
export default HeavyComponent12017;
