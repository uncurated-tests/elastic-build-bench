'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4875<T> = T extends (infer U)[]
  ? DeepReadonlyArray4875<U>
  : T extends object
  ? DeepReadonlyObject4875<T>
  : T;

interface DeepReadonlyArray4875<T> extends ReadonlyArray<DeepReadonly4875<T>> {}

type DeepReadonlyObject4875<T> = {
  readonly [P in keyof T]: DeepReadonly4875<T[P]>;
};

type UnionToIntersection4875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4875<T> = UnionToIntersection4875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4875<T extends unknown[], V> = [...T, V];

type TuplifyUnion4875<T, L = LastOf4875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4875<TuplifyUnion4875<Exclude<T, L>>, L>;

type DeepPartial4875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4875<T[P]> }
  : T;

type Paths4875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4875<K, Paths4875<T[K], Prev4875[D]>> : never }[keyof T]
  : never;

type Prev4875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4875 {
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

type ConfigPaths4875 = Paths4875<NestedConfig4875>;

interface HeavyProps4875 {
  config: DeepPartial4875<NestedConfig4875>;
  path?: ConfigPaths4875;
}

const HeavyComponent4875 = memo(function HeavyComponent4875({ config }: HeavyProps4875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4875.displayName = 'HeavyComponent4875';
export default HeavyComponent4875;
