'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6511<T> = T extends (infer U)[]
  ? DeepReadonlyArray6511<U>
  : T extends object
  ? DeepReadonlyObject6511<T>
  : T;

interface DeepReadonlyArray6511<T> extends ReadonlyArray<DeepReadonly6511<T>> {}

type DeepReadonlyObject6511<T> = {
  readonly [P in keyof T]: DeepReadonly6511<T[P]>;
};

type UnionToIntersection6511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6511<T> = UnionToIntersection6511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6511<T extends unknown[], V> = [...T, V];

type TuplifyUnion6511<T, L = LastOf6511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6511<TuplifyUnion6511<Exclude<T, L>>, L>;

type DeepPartial6511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6511<T[P]> }
  : T;

type Paths6511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6511<K, Paths6511<T[K], Prev6511[D]>> : never }[keyof T]
  : never;

type Prev6511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6511 {
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

type ConfigPaths6511 = Paths6511<NestedConfig6511>;

interface HeavyProps6511 {
  config: DeepPartial6511<NestedConfig6511>;
  path?: ConfigPaths6511;
}

const HeavyComponent6511 = memo(function HeavyComponent6511({ config }: HeavyProps6511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6511.displayName = 'HeavyComponent6511';
export default HeavyComponent6511;
