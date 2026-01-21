'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4626<T> = T extends (infer U)[]
  ? DeepReadonlyArray4626<U>
  : T extends object
  ? DeepReadonlyObject4626<T>
  : T;

interface DeepReadonlyArray4626<T> extends ReadonlyArray<DeepReadonly4626<T>> {}

type DeepReadonlyObject4626<T> = {
  readonly [P in keyof T]: DeepReadonly4626<T[P]>;
};

type UnionToIntersection4626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4626<T> = UnionToIntersection4626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4626<T extends unknown[], V> = [...T, V];

type TuplifyUnion4626<T, L = LastOf4626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4626<TuplifyUnion4626<Exclude<T, L>>, L>;

type DeepPartial4626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4626<T[P]> }
  : T;

type Paths4626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4626<K, Paths4626<T[K], Prev4626[D]>> : never }[keyof T]
  : never;

type Prev4626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4626 {
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

type ConfigPaths4626 = Paths4626<NestedConfig4626>;

interface HeavyProps4626 {
  config: DeepPartial4626<NestedConfig4626>;
  path?: ConfigPaths4626;
}

const HeavyComponent4626 = memo(function HeavyComponent4626({ config }: HeavyProps4626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4626.displayName = 'HeavyComponent4626';
export default HeavyComponent4626;
