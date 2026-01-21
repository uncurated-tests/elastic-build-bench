'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4777<T> = T extends (infer U)[]
  ? DeepReadonlyArray4777<U>
  : T extends object
  ? DeepReadonlyObject4777<T>
  : T;

interface DeepReadonlyArray4777<T> extends ReadonlyArray<DeepReadonly4777<T>> {}

type DeepReadonlyObject4777<T> = {
  readonly [P in keyof T]: DeepReadonly4777<T[P]>;
};

type UnionToIntersection4777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4777<T> = UnionToIntersection4777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4777<T extends unknown[], V> = [...T, V];

type TuplifyUnion4777<T, L = LastOf4777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4777<TuplifyUnion4777<Exclude<T, L>>, L>;

type DeepPartial4777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4777<T[P]> }
  : T;

type Paths4777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4777<K, Paths4777<T[K], Prev4777[D]>> : never }[keyof T]
  : never;

type Prev4777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4777 {
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

type ConfigPaths4777 = Paths4777<NestedConfig4777>;

interface HeavyProps4777 {
  config: DeepPartial4777<NestedConfig4777>;
  path?: ConfigPaths4777;
}

const HeavyComponent4777 = memo(function HeavyComponent4777({ config }: HeavyProps4777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4777.displayName = 'HeavyComponent4777';
export default HeavyComponent4777;
