'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4716<T> = T extends (infer U)[]
  ? DeepReadonlyArray4716<U>
  : T extends object
  ? DeepReadonlyObject4716<T>
  : T;

interface DeepReadonlyArray4716<T> extends ReadonlyArray<DeepReadonly4716<T>> {}

type DeepReadonlyObject4716<T> = {
  readonly [P in keyof T]: DeepReadonly4716<T[P]>;
};

type UnionToIntersection4716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4716<T> = UnionToIntersection4716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4716<T extends unknown[], V> = [...T, V];

type TuplifyUnion4716<T, L = LastOf4716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4716<TuplifyUnion4716<Exclude<T, L>>, L>;

type DeepPartial4716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4716<T[P]> }
  : T;

type Paths4716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4716<K, Paths4716<T[K], Prev4716[D]>> : never }[keyof T]
  : never;

type Prev4716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4716 {
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

type ConfigPaths4716 = Paths4716<NestedConfig4716>;

interface HeavyProps4716 {
  config: DeepPartial4716<NestedConfig4716>;
  path?: ConfigPaths4716;
}

const HeavyComponent4716 = memo(function HeavyComponent4716({ config }: HeavyProps4716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4716.displayName = 'HeavyComponent4716';
export default HeavyComponent4716;
