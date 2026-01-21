'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4025<T> = T extends (infer U)[]
  ? DeepReadonlyArray4025<U>
  : T extends object
  ? DeepReadonlyObject4025<T>
  : T;

interface DeepReadonlyArray4025<T> extends ReadonlyArray<DeepReadonly4025<T>> {}

type DeepReadonlyObject4025<T> = {
  readonly [P in keyof T]: DeepReadonly4025<T[P]>;
};

type UnionToIntersection4025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4025<T> = UnionToIntersection4025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4025<T extends unknown[], V> = [...T, V];

type TuplifyUnion4025<T, L = LastOf4025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4025<TuplifyUnion4025<Exclude<T, L>>, L>;

type DeepPartial4025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4025<T[P]> }
  : T;

type Paths4025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4025<K, Paths4025<T[K], Prev4025[D]>> : never }[keyof T]
  : never;

type Prev4025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4025 {
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

type ConfigPaths4025 = Paths4025<NestedConfig4025>;

interface HeavyProps4025 {
  config: DeepPartial4025<NestedConfig4025>;
  path?: ConfigPaths4025;
}

const HeavyComponent4025 = memo(function HeavyComponent4025({ config }: HeavyProps4025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4025.displayName = 'HeavyComponent4025';
export default HeavyComponent4025;
