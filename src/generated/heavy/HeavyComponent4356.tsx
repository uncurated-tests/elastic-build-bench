'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4356<T> = T extends (infer U)[]
  ? DeepReadonlyArray4356<U>
  : T extends object
  ? DeepReadonlyObject4356<T>
  : T;

interface DeepReadonlyArray4356<T> extends ReadonlyArray<DeepReadonly4356<T>> {}

type DeepReadonlyObject4356<T> = {
  readonly [P in keyof T]: DeepReadonly4356<T[P]>;
};

type UnionToIntersection4356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4356<T> = UnionToIntersection4356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4356<T extends unknown[], V> = [...T, V];

type TuplifyUnion4356<T, L = LastOf4356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4356<TuplifyUnion4356<Exclude<T, L>>, L>;

type DeepPartial4356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4356<T[P]> }
  : T;

type Paths4356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4356<K, Paths4356<T[K], Prev4356[D]>> : never }[keyof T]
  : never;

type Prev4356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4356 {
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

type ConfigPaths4356 = Paths4356<NestedConfig4356>;

interface HeavyProps4356 {
  config: DeepPartial4356<NestedConfig4356>;
  path?: ConfigPaths4356;
}

const HeavyComponent4356 = memo(function HeavyComponent4356({ config }: HeavyProps4356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4356.displayName = 'HeavyComponent4356';
export default HeavyComponent4356;
