'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4825<T> = T extends (infer U)[]
  ? DeepReadonlyArray4825<U>
  : T extends object
  ? DeepReadonlyObject4825<T>
  : T;

interface DeepReadonlyArray4825<T> extends ReadonlyArray<DeepReadonly4825<T>> {}

type DeepReadonlyObject4825<T> = {
  readonly [P in keyof T]: DeepReadonly4825<T[P]>;
};

type UnionToIntersection4825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4825<T> = UnionToIntersection4825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4825<T extends unknown[], V> = [...T, V];

type TuplifyUnion4825<T, L = LastOf4825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4825<TuplifyUnion4825<Exclude<T, L>>, L>;

type DeepPartial4825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4825<T[P]> }
  : T;

type Paths4825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4825<K, Paths4825<T[K], Prev4825[D]>> : never }[keyof T]
  : never;

type Prev4825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4825 {
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

type ConfigPaths4825 = Paths4825<NestedConfig4825>;

interface HeavyProps4825 {
  config: DeepPartial4825<NestedConfig4825>;
  path?: ConfigPaths4825;
}

const HeavyComponent4825 = memo(function HeavyComponent4825({ config }: HeavyProps4825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4825.displayName = 'HeavyComponent4825';
export default HeavyComponent4825;
