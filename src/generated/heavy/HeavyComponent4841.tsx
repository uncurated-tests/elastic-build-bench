'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4841<T> = T extends (infer U)[]
  ? DeepReadonlyArray4841<U>
  : T extends object
  ? DeepReadonlyObject4841<T>
  : T;

interface DeepReadonlyArray4841<T> extends ReadonlyArray<DeepReadonly4841<T>> {}

type DeepReadonlyObject4841<T> = {
  readonly [P in keyof T]: DeepReadonly4841<T[P]>;
};

type UnionToIntersection4841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4841<T> = UnionToIntersection4841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4841<T extends unknown[], V> = [...T, V];

type TuplifyUnion4841<T, L = LastOf4841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4841<TuplifyUnion4841<Exclude<T, L>>, L>;

type DeepPartial4841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4841<T[P]> }
  : T;

type Paths4841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4841<K, Paths4841<T[K], Prev4841[D]>> : never }[keyof T]
  : never;

type Prev4841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4841 {
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

type ConfigPaths4841 = Paths4841<NestedConfig4841>;

interface HeavyProps4841 {
  config: DeepPartial4841<NestedConfig4841>;
  path?: ConfigPaths4841;
}

const HeavyComponent4841 = memo(function HeavyComponent4841({ config }: HeavyProps4841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4841.displayName = 'HeavyComponent4841';
export default HeavyComponent4841;
