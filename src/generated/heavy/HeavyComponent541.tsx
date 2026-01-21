'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly541<T> = T extends (infer U)[]
  ? DeepReadonlyArray541<U>
  : T extends object
  ? DeepReadonlyObject541<T>
  : T;

interface DeepReadonlyArray541<T> extends ReadonlyArray<DeepReadonly541<T>> {}

type DeepReadonlyObject541<T> = {
  readonly [P in keyof T]: DeepReadonly541<T[P]>;
};

type UnionToIntersection541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf541<T> = UnionToIntersection541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push541<T extends unknown[], V> = [...T, V];

type TuplifyUnion541<T, L = LastOf541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push541<TuplifyUnion541<Exclude<T, L>>, L>;

type DeepPartial541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial541<T[P]> }
  : T;

type Paths541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join541<K, Paths541<T[K], Prev541[D]>> : never }[keyof T]
  : never;

type Prev541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig541 {
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

type ConfigPaths541 = Paths541<NestedConfig541>;

interface HeavyProps541 {
  config: DeepPartial541<NestedConfig541>;
  path?: ConfigPaths541;
}

const HeavyComponent541 = memo(function HeavyComponent541({ config }: HeavyProps541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent541.displayName = 'HeavyComponent541';
export default HeavyComponent541;
