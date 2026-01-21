'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4609<T> = T extends (infer U)[]
  ? DeepReadonlyArray4609<U>
  : T extends object
  ? DeepReadonlyObject4609<T>
  : T;

interface DeepReadonlyArray4609<T> extends ReadonlyArray<DeepReadonly4609<T>> {}

type DeepReadonlyObject4609<T> = {
  readonly [P in keyof T]: DeepReadonly4609<T[P]>;
};

type UnionToIntersection4609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4609<T> = UnionToIntersection4609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4609<T extends unknown[], V> = [...T, V];

type TuplifyUnion4609<T, L = LastOf4609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4609<TuplifyUnion4609<Exclude<T, L>>, L>;

type DeepPartial4609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4609<T[P]> }
  : T;

type Paths4609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4609<K, Paths4609<T[K], Prev4609[D]>> : never }[keyof T]
  : never;

type Prev4609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4609 {
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

type ConfigPaths4609 = Paths4609<NestedConfig4609>;

interface HeavyProps4609 {
  config: DeepPartial4609<NestedConfig4609>;
  path?: ConfigPaths4609;
}

const HeavyComponent4609 = memo(function HeavyComponent4609({ config }: HeavyProps4609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4609.displayName = 'HeavyComponent4609';
export default HeavyComponent4609;
