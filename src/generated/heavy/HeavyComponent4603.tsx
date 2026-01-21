'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4603<T> = T extends (infer U)[]
  ? DeepReadonlyArray4603<U>
  : T extends object
  ? DeepReadonlyObject4603<T>
  : T;

interface DeepReadonlyArray4603<T> extends ReadonlyArray<DeepReadonly4603<T>> {}

type DeepReadonlyObject4603<T> = {
  readonly [P in keyof T]: DeepReadonly4603<T[P]>;
};

type UnionToIntersection4603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4603<T> = UnionToIntersection4603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4603<T extends unknown[], V> = [...T, V];

type TuplifyUnion4603<T, L = LastOf4603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4603<TuplifyUnion4603<Exclude<T, L>>, L>;

type DeepPartial4603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4603<T[P]> }
  : T;

type Paths4603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4603<K, Paths4603<T[K], Prev4603[D]>> : never }[keyof T]
  : never;

type Prev4603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4603 {
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

type ConfigPaths4603 = Paths4603<NestedConfig4603>;

interface HeavyProps4603 {
  config: DeepPartial4603<NestedConfig4603>;
  path?: ConfigPaths4603;
}

const HeavyComponent4603 = memo(function HeavyComponent4603({ config }: HeavyProps4603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4603.displayName = 'HeavyComponent4603';
export default HeavyComponent4603;
