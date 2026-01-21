'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4405<T> = T extends (infer U)[]
  ? DeepReadonlyArray4405<U>
  : T extends object
  ? DeepReadonlyObject4405<T>
  : T;

interface DeepReadonlyArray4405<T> extends ReadonlyArray<DeepReadonly4405<T>> {}

type DeepReadonlyObject4405<T> = {
  readonly [P in keyof T]: DeepReadonly4405<T[P]>;
};

type UnionToIntersection4405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4405<T> = UnionToIntersection4405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4405<T extends unknown[], V> = [...T, V];

type TuplifyUnion4405<T, L = LastOf4405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4405<TuplifyUnion4405<Exclude<T, L>>, L>;

type DeepPartial4405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4405<T[P]> }
  : T;

type Paths4405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4405<K, Paths4405<T[K], Prev4405[D]>> : never }[keyof T]
  : never;

type Prev4405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4405 {
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

type ConfigPaths4405 = Paths4405<NestedConfig4405>;

interface HeavyProps4405 {
  config: DeepPartial4405<NestedConfig4405>;
  path?: ConfigPaths4405;
}

const HeavyComponent4405 = memo(function HeavyComponent4405({ config }: HeavyProps4405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4405.displayName = 'HeavyComponent4405';
export default HeavyComponent4405;
