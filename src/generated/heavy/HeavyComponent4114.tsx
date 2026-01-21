'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4114<T> = T extends (infer U)[]
  ? DeepReadonlyArray4114<U>
  : T extends object
  ? DeepReadonlyObject4114<T>
  : T;

interface DeepReadonlyArray4114<T> extends ReadonlyArray<DeepReadonly4114<T>> {}

type DeepReadonlyObject4114<T> = {
  readonly [P in keyof T]: DeepReadonly4114<T[P]>;
};

type UnionToIntersection4114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4114<T> = UnionToIntersection4114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4114<T extends unknown[], V> = [...T, V];

type TuplifyUnion4114<T, L = LastOf4114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4114<TuplifyUnion4114<Exclude<T, L>>, L>;

type DeepPartial4114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4114<T[P]> }
  : T;

type Paths4114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4114<K, Paths4114<T[K], Prev4114[D]>> : never }[keyof T]
  : never;

type Prev4114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4114 {
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

type ConfigPaths4114 = Paths4114<NestedConfig4114>;

interface HeavyProps4114 {
  config: DeepPartial4114<NestedConfig4114>;
  path?: ConfigPaths4114;
}

const HeavyComponent4114 = memo(function HeavyComponent4114({ config }: HeavyProps4114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4114.displayName = 'HeavyComponent4114';
export default HeavyComponent4114;
