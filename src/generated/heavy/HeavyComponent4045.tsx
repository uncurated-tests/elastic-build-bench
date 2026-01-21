'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4045<T> = T extends (infer U)[]
  ? DeepReadonlyArray4045<U>
  : T extends object
  ? DeepReadonlyObject4045<T>
  : T;

interface DeepReadonlyArray4045<T> extends ReadonlyArray<DeepReadonly4045<T>> {}

type DeepReadonlyObject4045<T> = {
  readonly [P in keyof T]: DeepReadonly4045<T[P]>;
};

type UnionToIntersection4045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4045<T> = UnionToIntersection4045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4045<T extends unknown[], V> = [...T, V];

type TuplifyUnion4045<T, L = LastOf4045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4045<TuplifyUnion4045<Exclude<T, L>>, L>;

type DeepPartial4045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4045<T[P]> }
  : T;

type Paths4045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4045<K, Paths4045<T[K], Prev4045[D]>> : never }[keyof T]
  : never;

type Prev4045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4045 {
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

type ConfigPaths4045 = Paths4045<NestedConfig4045>;

interface HeavyProps4045 {
  config: DeepPartial4045<NestedConfig4045>;
  path?: ConfigPaths4045;
}

const HeavyComponent4045 = memo(function HeavyComponent4045({ config }: HeavyProps4045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4045.displayName = 'HeavyComponent4045';
export default HeavyComponent4045;
