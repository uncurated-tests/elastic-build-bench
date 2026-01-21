'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4001<T> = T extends (infer U)[]
  ? DeepReadonlyArray4001<U>
  : T extends object
  ? DeepReadonlyObject4001<T>
  : T;

interface DeepReadonlyArray4001<T> extends ReadonlyArray<DeepReadonly4001<T>> {}

type DeepReadonlyObject4001<T> = {
  readonly [P in keyof T]: DeepReadonly4001<T[P]>;
};

type UnionToIntersection4001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4001<T> = UnionToIntersection4001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4001<T extends unknown[], V> = [...T, V];

type TuplifyUnion4001<T, L = LastOf4001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4001<TuplifyUnion4001<Exclude<T, L>>, L>;

type DeepPartial4001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4001<T[P]> }
  : T;

type Paths4001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4001<K, Paths4001<T[K], Prev4001[D]>> : never }[keyof T]
  : never;

type Prev4001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4001 {
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

type ConfigPaths4001 = Paths4001<NestedConfig4001>;

interface HeavyProps4001 {
  config: DeepPartial4001<NestedConfig4001>;
  path?: ConfigPaths4001;
}

const HeavyComponent4001 = memo(function HeavyComponent4001({ config }: HeavyProps4001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4001.displayName = 'HeavyComponent4001';
export default HeavyComponent4001;
