'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly152<T> = T extends (infer U)[]
  ? DeepReadonlyArray152<U>
  : T extends object
  ? DeepReadonlyObject152<T>
  : T;

interface DeepReadonlyArray152<T> extends ReadonlyArray<DeepReadonly152<T>> {}

type DeepReadonlyObject152<T> = {
  readonly [P in keyof T]: DeepReadonly152<T[P]>;
};

type UnionToIntersection152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf152<T> = UnionToIntersection152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push152<T extends unknown[], V> = [...T, V];

type TuplifyUnion152<T, L = LastOf152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push152<TuplifyUnion152<Exclude<T, L>>, L>;

type DeepPartial152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial152<T[P]> }
  : T;

type Paths152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join152<K, Paths152<T[K], Prev152[D]>> : never }[keyof T]
  : never;

type Prev152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig152 {
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

type ConfigPaths152 = Paths152<NestedConfig152>;

interface HeavyProps152 {
  config: DeepPartial152<NestedConfig152>;
  path?: ConfigPaths152;
}

const HeavyComponent152 = memo(function HeavyComponent152({ config }: HeavyProps152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent152.displayName = 'HeavyComponent152';
export default HeavyComponent152;
