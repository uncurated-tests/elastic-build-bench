'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4365<T> = T extends (infer U)[]
  ? DeepReadonlyArray4365<U>
  : T extends object
  ? DeepReadonlyObject4365<T>
  : T;

interface DeepReadonlyArray4365<T> extends ReadonlyArray<DeepReadonly4365<T>> {}

type DeepReadonlyObject4365<T> = {
  readonly [P in keyof T]: DeepReadonly4365<T[P]>;
};

type UnionToIntersection4365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4365<T> = UnionToIntersection4365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4365<T extends unknown[], V> = [...T, V];

type TuplifyUnion4365<T, L = LastOf4365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4365<TuplifyUnion4365<Exclude<T, L>>, L>;

type DeepPartial4365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4365<T[P]> }
  : T;

type Paths4365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4365<K, Paths4365<T[K], Prev4365[D]>> : never }[keyof T]
  : never;

type Prev4365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4365 {
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

type ConfigPaths4365 = Paths4365<NestedConfig4365>;

interface HeavyProps4365 {
  config: DeepPartial4365<NestedConfig4365>;
  path?: ConfigPaths4365;
}

const HeavyComponent4365 = memo(function HeavyComponent4365({ config }: HeavyProps4365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4365.displayName = 'HeavyComponent4365';
export default HeavyComponent4365;
