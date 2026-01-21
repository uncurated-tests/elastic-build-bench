'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4665<T> = T extends (infer U)[]
  ? DeepReadonlyArray4665<U>
  : T extends object
  ? DeepReadonlyObject4665<T>
  : T;

interface DeepReadonlyArray4665<T> extends ReadonlyArray<DeepReadonly4665<T>> {}

type DeepReadonlyObject4665<T> = {
  readonly [P in keyof T]: DeepReadonly4665<T[P]>;
};

type UnionToIntersection4665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4665<T> = UnionToIntersection4665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4665<T extends unknown[], V> = [...T, V];

type TuplifyUnion4665<T, L = LastOf4665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4665<TuplifyUnion4665<Exclude<T, L>>, L>;

type DeepPartial4665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4665<T[P]> }
  : T;

type Paths4665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4665<K, Paths4665<T[K], Prev4665[D]>> : never }[keyof T]
  : never;

type Prev4665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4665 {
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

type ConfigPaths4665 = Paths4665<NestedConfig4665>;

interface HeavyProps4665 {
  config: DeepPartial4665<NestedConfig4665>;
  path?: ConfigPaths4665;
}

const HeavyComponent4665 = memo(function HeavyComponent4665({ config }: HeavyProps4665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4665.displayName = 'HeavyComponent4665';
export default HeavyComponent4665;
