'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4878<T> = T extends (infer U)[]
  ? DeepReadonlyArray4878<U>
  : T extends object
  ? DeepReadonlyObject4878<T>
  : T;

interface DeepReadonlyArray4878<T> extends ReadonlyArray<DeepReadonly4878<T>> {}

type DeepReadonlyObject4878<T> = {
  readonly [P in keyof T]: DeepReadonly4878<T[P]>;
};

type UnionToIntersection4878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4878<T> = UnionToIntersection4878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4878<T extends unknown[], V> = [...T, V];

type TuplifyUnion4878<T, L = LastOf4878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4878<TuplifyUnion4878<Exclude<T, L>>, L>;

type DeepPartial4878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4878<T[P]> }
  : T;

type Paths4878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4878<K, Paths4878<T[K], Prev4878[D]>> : never }[keyof T]
  : never;

type Prev4878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4878 {
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

type ConfigPaths4878 = Paths4878<NestedConfig4878>;

interface HeavyProps4878 {
  config: DeepPartial4878<NestedConfig4878>;
  path?: ConfigPaths4878;
}

const HeavyComponent4878 = memo(function HeavyComponent4878({ config }: HeavyProps4878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4878.displayName = 'HeavyComponent4878';
export default HeavyComponent4878;
