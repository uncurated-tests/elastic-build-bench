'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4661<T> = T extends (infer U)[]
  ? DeepReadonlyArray4661<U>
  : T extends object
  ? DeepReadonlyObject4661<T>
  : T;

interface DeepReadonlyArray4661<T> extends ReadonlyArray<DeepReadonly4661<T>> {}

type DeepReadonlyObject4661<T> = {
  readonly [P in keyof T]: DeepReadonly4661<T[P]>;
};

type UnionToIntersection4661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4661<T> = UnionToIntersection4661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4661<T extends unknown[], V> = [...T, V];

type TuplifyUnion4661<T, L = LastOf4661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4661<TuplifyUnion4661<Exclude<T, L>>, L>;

type DeepPartial4661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4661<T[P]> }
  : T;

type Paths4661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4661<K, Paths4661<T[K], Prev4661[D]>> : never }[keyof T]
  : never;

type Prev4661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4661 {
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

type ConfigPaths4661 = Paths4661<NestedConfig4661>;

interface HeavyProps4661 {
  config: DeepPartial4661<NestedConfig4661>;
  path?: ConfigPaths4661;
}

const HeavyComponent4661 = memo(function HeavyComponent4661({ config }: HeavyProps4661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4661.displayName = 'HeavyComponent4661';
export default HeavyComponent4661;
