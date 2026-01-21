'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4601<T> = T extends (infer U)[]
  ? DeepReadonlyArray4601<U>
  : T extends object
  ? DeepReadonlyObject4601<T>
  : T;

interface DeepReadonlyArray4601<T> extends ReadonlyArray<DeepReadonly4601<T>> {}

type DeepReadonlyObject4601<T> = {
  readonly [P in keyof T]: DeepReadonly4601<T[P]>;
};

type UnionToIntersection4601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4601<T> = UnionToIntersection4601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4601<T extends unknown[], V> = [...T, V];

type TuplifyUnion4601<T, L = LastOf4601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4601<TuplifyUnion4601<Exclude<T, L>>, L>;

type DeepPartial4601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4601<T[P]> }
  : T;

type Paths4601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4601<K, Paths4601<T[K], Prev4601[D]>> : never }[keyof T]
  : never;

type Prev4601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4601 {
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

type ConfigPaths4601 = Paths4601<NestedConfig4601>;

interface HeavyProps4601 {
  config: DeepPartial4601<NestedConfig4601>;
  path?: ConfigPaths4601;
}

const HeavyComponent4601 = memo(function HeavyComponent4601({ config }: HeavyProps4601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4601.displayName = 'HeavyComponent4601';
export default HeavyComponent4601;
