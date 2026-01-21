'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4369<T> = T extends (infer U)[]
  ? DeepReadonlyArray4369<U>
  : T extends object
  ? DeepReadonlyObject4369<T>
  : T;

interface DeepReadonlyArray4369<T> extends ReadonlyArray<DeepReadonly4369<T>> {}

type DeepReadonlyObject4369<T> = {
  readonly [P in keyof T]: DeepReadonly4369<T[P]>;
};

type UnionToIntersection4369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4369<T> = UnionToIntersection4369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4369<T extends unknown[], V> = [...T, V];

type TuplifyUnion4369<T, L = LastOf4369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4369<TuplifyUnion4369<Exclude<T, L>>, L>;

type DeepPartial4369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4369<T[P]> }
  : T;

type Paths4369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4369<K, Paths4369<T[K], Prev4369[D]>> : never }[keyof T]
  : never;

type Prev4369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4369 {
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

type ConfigPaths4369 = Paths4369<NestedConfig4369>;

interface HeavyProps4369 {
  config: DeepPartial4369<NestedConfig4369>;
  path?: ConfigPaths4369;
}

const HeavyComponent4369 = memo(function HeavyComponent4369({ config }: HeavyProps4369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4369.displayName = 'HeavyComponent4369';
export default HeavyComponent4369;
