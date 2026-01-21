'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4974<T> = T extends (infer U)[]
  ? DeepReadonlyArray4974<U>
  : T extends object
  ? DeepReadonlyObject4974<T>
  : T;

interface DeepReadonlyArray4974<T> extends ReadonlyArray<DeepReadonly4974<T>> {}

type DeepReadonlyObject4974<T> = {
  readonly [P in keyof T]: DeepReadonly4974<T[P]>;
};

type UnionToIntersection4974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4974<T> = UnionToIntersection4974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4974<T extends unknown[], V> = [...T, V];

type TuplifyUnion4974<T, L = LastOf4974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4974<TuplifyUnion4974<Exclude<T, L>>, L>;

type DeepPartial4974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4974<T[P]> }
  : T;

type Paths4974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4974<K, Paths4974<T[K], Prev4974[D]>> : never }[keyof T]
  : never;

type Prev4974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4974 {
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

type ConfigPaths4974 = Paths4974<NestedConfig4974>;

interface HeavyProps4974 {
  config: DeepPartial4974<NestedConfig4974>;
  path?: ConfigPaths4974;
}

const HeavyComponent4974 = memo(function HeavyComponent4974({ config }: HeavyProps4974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4974.displayName = 'HeavyComponent4974';
export default HeavyComponent4974;
