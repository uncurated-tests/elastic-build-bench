'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4092<T> = T extends (infer U)[]
  ? DeepReadonlyArray4092<U>
  : T extends object
  ? DeepReadonlyObject4092<T>
  : T;

interface DeepReadonlyArray4092<T> extends ReadonlyArray<DeepReadonly4092<T>> {}

type DeepReadonlyObject4092<T> = {
  readonly [P in keyof T]: DeepReadonly4092<T[P]>;
};

type UnionToIntersection4092<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4092<T> = UnionToIntersection4092<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4092<T extends unknown[], V> = [...T, V];

type TuplifyUnion4092<T, L = LastOf4092<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4092<TuplifyUnion4092<Exclude<T, L>>, L>;

type DeepPartial4092<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4092<T[P]> }
  : T;

type Paths4092<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4092<K, Paths4092<T[K], Prev4092[D]>> : never }[keyof T]
  : never;

type Prev4092 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4092<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4092 {
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

type ConfigPaths4092 = Paths4092<NestedConfig4092>;

interface HeavyProps4092 {
  config: DeepPartial4092<NestedConfig4092>;
  path?: ConfigPaths4092;
}

const HeavyComponent4092 = memo(function HeavyComponent4092({ config }: HeavyProps4092) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4092) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4092 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4092: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4092.displayName = 'HeavyComponent4092';
export default HeavyComponent4092;
