'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4937<T> = T extends (infer U)[]
  ? DeepReadonlyArray4937<U>
  : T extends object
  ? DeepReadonlyObject4937<T>
  : T;

interface DeepReadonlyArray4937<T> extends ReadonlyArray<DeepReadonly4937<T>> {}

type DeepReadonlyObject4937<T> = {
  readonly [P in keyof T]: DeepReadonly4937<T[P]>;
};

type UnionToIntersection4937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4937<T> = UnionToIntersection4937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4937<T extends unknown[], V> = [...T, V];

type TuplifyUnion4937<T, L = LastOf4937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4937<TuplifyUnion4937<Exclude<T, L>>, L>;

type DeepPartial4937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4937<T[P]> }
  : T;

type Paths4937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4937<K, Paths4937<T[K], Prev4937[D]>> : never }[keyof T]
  : never;

type Prev4937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4937 {
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

type ConfigPaths4937 = Paths4937<NestedConfig4937>;

interface HeavyProps4937 {
  config: DeepPartial4937<NestedConfig4937>;
  path?: ConfigPaths4937;
}

const HeavyComponent4937 = memo(function HeavyComponent4937({ config }: HeavyProps4937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4937.displayName = 'HeavyComponent4937';
export default HeavyComponent4937;
