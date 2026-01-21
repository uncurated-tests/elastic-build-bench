'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly660<T> = T extends (infer U)[]
  ? DeepReadonlyArray660<U>
  : T extends object
  ? DeepReadonlyObject660<T>
  : T;

interface DeepReadonlyArray660<T> extends ReadonlyArray<DeepReadonly660<T>> {}

type DeepReadonlyObject660<T> = {
  readonly [P in keyof T]: DeepReadonly660<T[P]>;
};

type UnionToIntersection660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf660<T> = UnionToIntersection660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push660<T extends unknown[], V> = [...T, V];

type TuplifyUnion660<T, L = LastOf660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push660<TuplifyUnion660<Exclude<T, L>>, L>;

type DeepPartial660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial660<T[P]> }
  : T;

type Paths660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join660<K, Paths660<T[K], Prev660[D]>> : never }[keyof T]
  : never;

type Prev660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig660 {
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

type ConfigPaths660 = Paths660<NestedConfig660>;

interface HeavyProps660 {
  config: DeepPartial660<NestedConfig660>;
  path?: ConfigPaths660;
}

const HeavyComponent660 = memo(function HeavyComponent660({ config }: HeavyProps660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent660.displayName = 'HeavyComponent660';
export default HeavyComponent660;
