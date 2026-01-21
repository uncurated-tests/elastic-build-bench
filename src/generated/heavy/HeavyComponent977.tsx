'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly977<T> = T extends (infer U)[]
  ? DeepReadonlyArray977<U>
  : T extends object
  ? DeepReadonlyObject977<T>
  : T;

interface DeepReadonlyArray977<T> extends ReadonlyArray<DeepReadonly977<T>> {}

type DeepReadonlyObject977<T> = {
  readonly [P in keyof T]: DeepReadonly977<T[P]>;
};

type UnionToIntersection977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf977<T> = UnionToIntersection977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push977<T extends unknown[], V> = [...T, V];

type TuplifyUnion977<T, L = LastOf977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push977<TuplifyUnion977<Exclude<T, L>>, L>;

type DeepPartial977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial977<T[P]> }
  : T;

type Paths977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join977<K, Paths977<T[K], Prev977[D]>> : never }[keyof T]
  : never;

type Prev977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig977 {
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

type ConfigPaths977 = Paths977<NestedConfig977>;

interface HeavyProps977 {
  config: DeepPartial977<NestedConfig977>;
  path?: ConfigPaths977;
}

const HeavyComponent977 = memo(function HeavyComponent977({ config }: HeavyProps977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent977.displayName = 'HeavyComponent977';
export default HeavyComponent977;
