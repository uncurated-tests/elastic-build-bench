'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4225<T> = T extends (infer U)[]
  ? DeepReadonlyArray4225<U>
  : T extends object
  ? DeepReadonlyObject4225<T>
  : T;

interface DeepReadonlyArray4225<T> extends ReadonlyArray<DeepReadonly4225<T>> {}

type DeepReadonlyObject4225<T> = {
  readonly [P in keyof T]: DeepReadonly4225<T[P]>;
};

type UnionToIntersection4225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4225<T> = UnionToIntersection4225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4225<T extends unknown[], V> = [...T, V];

type TuplifyUnion4225<T, L = LastOf4225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4225<TuplifyUnion4225<Exclude<T, L>>, L>;

type DeepPartial4225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4225<T[P]> }
  : T;

type Paths4225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4225<K, Paths4225<T[K], Prev4225[D]>> : never }[keyof T]
  : never;

type Prev4225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4225 {
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

type ConfigPaths4225 = Paths4225<NestedConfig4225>;

interface HeavyProps4225 {
  config: DeepPartial4225<NestedConfig4225>;
  path?: ConfigPaths4225;
}

const HeavyComponent4225 = memo(function HeavyComponent4225({ config }: HeavyProps4225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4225.displayName = 'HeavyComponent4225';
export default HeavyComponent4225;
