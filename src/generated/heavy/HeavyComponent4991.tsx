'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4991<T> = T extends (infer U)[]
  ? DeepReadonlyArray4991<U>
  : T extends object
  ? DeepReadonlyObject4991<T>
  : T;

interface DeepReadonlyArray4991<T> extends ReadonlyArray<DeepReadonly4991<T>> {}

type DeepReadonlyObject4991<T> = {
  readonly [P in keyof T]: DeepReadonly4991<T[P]>;
};

type UnionToIntersection4991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4991<T> = UnionToIntersection4991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4991<T extends unknown[], V> = [...T, V];

type TuplifyUnion4991<T, L = LastOf4991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4991<TuplifyUnion4991<Exclude<T, L>>, L>;

type DeepPartial4991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4991<T[P]> }
  : T;

type Paths4991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4991<K, Paths4991<T[K], Prev4991[D]>> : never }[keyof T]
  : never;

type Prev4991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4991 {
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

type ConfigPaths4991 = Paths4991<NestedConfig4991>;

interface HeavyProps4991 {
  config: DeepPartial4991<NestedConfig4991>;
  path?: ConfigPaths4991;
}

const HeavyComponent4991 = memo(function HeavyComponent4991({ config }: HeavyProps4991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4991.displayName = 'HeavyComponent4991';
export default HeavyComponent4991;
