'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4918<T> = T extends (infer U)[]
  ? DeepReadonlyArray4918<U>
  : T extends object
  ? DeepReadonlyObject4918<T>
  : T;

interface DeepReadonlyArray4918<T> extends ReadonlyArray<DeepReadonly4918<T>> {}

type DeepReadonlyObject4918<T> = {
  readonly [P in keyof T]: DeepReadonly4918<T[P]>;
};

type UnionToIntersection4918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4918<T> = UnionToIntersection4918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4918<T extends unknown[], V> = [...T, V];

type TuplifyUnion4918<T, L = LastOf4918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4918<TuplifyUnion4918<Exclude<T, L>>, L>;

type DeepPartial4918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4918<T[P]> }
  : T;

type Paths4918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4918<K, Paths4918<T[K], Prev4918[D]>> : never }[keyof T]
  : never;

type Prev4918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4918 {
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

type ConfigPaths4918 = Paths4918<NestedConfig4918>;

interface HeavyProps4918 {
  config: DeepPartial4918<NestedConfig4918>;
  path?: ConfigPaths4918;
}

const HeavyComponent4918 = memo(function HeavyComponent4918({ config }: HeavyProps4918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4918.displayName = 'HeavyComponent4918';
export default HeavyComponent4918;
