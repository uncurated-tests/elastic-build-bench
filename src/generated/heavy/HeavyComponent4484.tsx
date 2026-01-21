'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4484<T> = T extends (infer U)[]
  ? DeepReadonlyArray4484<U>
  : T extends object
  ? DeepReadonlyObject4484<T>
  : T;

interface DeepReadonlyArray4484<T> extends ReadonlyArray<DeepReadonly4484<T>> {}

type DeepReadonlyObject4484<T> = {
  readonly [P in keyof T]: DeepReadonly4484<T[P]>;
};

type UnionToIntersection4484<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4484<T> = UnionToIntersection4484<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4484<T extends unknown[], V> = [...T, V];

type TuplifyUnion4484<T, L = LastOf4484<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4484<TuplifyUnion4484<Exclude<T, L>>, L>;

type DeepPartial4484<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4484<T[P]> }
  : T;

type Paths4484<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4484<K, Paths4484<T[K], Prev4484[D]>> : never }[keyof T]
  : never;

type Prev4484 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4484<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4484 {
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

type ConfigPaths4484 = Paths4484<NestedConfig4484>;

interface HeavyProps4484 {
  config: DeepPartial4484<NestedConfig4484>;
  path?: ConfigPaths4484;
}

const HeavyComponent4484 = memo(function HeavyComponent4484({ config }: HeavyProps4484) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4484) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4484 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4484: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4484.displayName = 'HeavyComponent4484';
export default HeavyComponent4484;
