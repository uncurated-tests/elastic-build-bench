'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4504<T> = T extends (infer U)[]
  ? DeepReadonlyArray4504<U>
  : T extends object
  ? DeepReadonlyObject4504<T>
  : T;

interface DeepReadonlyArray4504<T> extends ReadonlyArray<DeepReadonly4504<T>> {}

type DeepReadonlyObject4504<T> = {
  readonly [P in keyof T]: DeepReadonly4504<T[P]>;
};

type UnionToIntersection4504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4504<T> = UnionToIntersection4504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4504<T extends unknown[], V> = [...T, V];

type TuplifyUnion4504<T, L = LastOf4504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4504<TuplifyUnion4504<Exclude<T, L>>, L>;

type DeepPartial4504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4504<T[P]> }
  : T;

type Paths4504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4504<K, Paths4504<T[K], Prev4504[D]>> : never }[keyof T]
  : never;

type Prev4504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4504 {
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

type ConfigPaths4504 = Paths4504<NestedConfig4504>;

interface HeavyProps4504 {
  config: DeepPartial4504<NestedConfig4504>;
  path?: ConfigPaths4504;
}

const HeavyComponent4504 = memo(function HeavyComponent4504({ config }: HeavyProps4504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4504.displayName = 'HeavyComponent4504';
export default HeavyComponent4504;
