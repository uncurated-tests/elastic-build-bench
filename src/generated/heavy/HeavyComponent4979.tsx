'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4979<T> = T extends (infer U)[]
  ? DeepReadonlyArray4979<U>
  : T extends object
  ? DeepReadonlyObject4979<T>
  : T;

interface DeepReadonlyArray4979<T> extends ReadonlyArray<DeepReadonly4979<T>> {}

type DeepReadonlyObject4979<T> = {
  readonly [P in keyof T]: DeepReadonly4979<T[P]>;
};

type UnionToIntersection4979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4979<T> = UnionToIntersection4979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4979<T extends unknown[], V> = [...T, V];

type TuplifyUnion4979<T, L = LastOf4979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4979<TuplifyUnion4979<Exclude<T, L>>, L>;

type DeepPartial4979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4979<T[P]> }
  : T;

type Paths4979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4979<K, Paths4979<T[K], Prev4979[D]>> : never }[keyof T]
  : never;

type Prev4979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4979 {
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

type ConfigPaths4979 = Paths4979<NestedConfig4979>;

interface HeavyProps4979 {
  config: DeepPartial4979<NestedConfig4979>;
  path?: ConfigPaths4979;
}

const HeavyComponent4979 = memo(function HeavyComponent4979({ config }: HeavyProps4979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4979.displayName = 'HeavyComponent4979';
export default HeavyComponent4979;
