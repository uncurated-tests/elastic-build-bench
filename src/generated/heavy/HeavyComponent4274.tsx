'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4274<T> = T extends (infer U)[]
  ? DeepReadonlyArray4274<U>
  : T extends object
  ? DeepReadonlyObject4274<T>
  : T;

interface DeepReadonlyArray4274<T> extends ReadonlyArray<DeepReadonly4274<T>> {}

type DeepReadonlyObject4274<T> = {
  readonly [P in keyof T]: DeepReadonly4274<T[P]>;
};

type UnionToIntersection4274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4274<T> = UnionToIntersection4274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4274<T extends unknown[], V> = [...T, V];

type TuplifyUnion4274<T, L = LastOf4274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4274<TuplifyUnion4274<Exclude<T, L>>, L>;

type DeepPartial4274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4274<T[P]> }
  : T;

type Paths4274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4274<K, Paths4274<T[K], Prev4274[D]>> : never }[keyof T]
  : never;

type Prev4274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4274 {
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

type ConfigPaths4274 = Paths4274<NestedConfig4274>;

interface HeavyProps4274 {
  config: DeepPartial4274<NestedConfig4274>;
  path?: ConfigPaths4274;
}

const HeavyComponent4274 = memo(function HeavyComponent4274({ config }: HeavyProps4274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4274.displayName = 'HeavyComponent4274';
export default HeavyComponent4274;
