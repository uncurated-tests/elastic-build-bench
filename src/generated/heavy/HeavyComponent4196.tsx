'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4196<T> = T extends (infer U)[]
  ? DeepReadonlyArray4196<U>
  : T extends object
  ? DeepReadonlyObject4196<T>
  : T;

interface DeepReadonlyArray4196<T> extends ReadonlyArray<DeepReadonly4196<T>> {}

type DeepReadonlyObject4196<T> = {
  readonly [P in keyof T]: DeepReadonly4196<T[P]>;
};

type UnionToIntersection4196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4196<T> = UnionToIntersection4196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4196<T extends unknown[], V> = [...T, V];

type TuplifyUnion4196<T, L = LastOf4196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4196<TuplifyUnion4196<Exclude<T, L>>, L>;

type DeepPartial4196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4196<T[P]> }
  : T;

type Paths4196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4196<K, Paths4196<T[K], Prev4196[D]>> : never }[keyof T]
  : never;

type Prev4196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4196 {
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

type ConfigPaths4196 = Paths4196<NestedConfig4196>;

interface HeavyProps4196 {
  config: DeepPartial4196<NestedConfig4196>;
  path?: ConfigPaths4196;
}

const HeavyComponent4196 = memo(function HeavyComponent4196({ config }: HeavyProps4196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4196.displayName = 'HeavyComponent4196';
export default HeavyComponent4196;
