'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4005<T> = T extends (infer U)[]
  ? DeepReadonlyArray4005<U>
  : T extends object
  ? DeepReadonlyObject4005<T>
  : T;

interface DeepReadonlyArray4005<T> extends ReadonlyArray<DeepReadonly4005<T>> {}

type DeepReadonlyObject4005<T> = {
  readonly [P in keyof T]: DeepReadonly4005<T[P]>;
};

type UnionToIntersection4005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4005<T> = UnionToIntersection4005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4005<T extends unknown[], V> = [...T, V];

type TuplifyUnion4005<T, L = LastOf4005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4005<TuplifyUnion4005<Exclude<T, L>>, L>;

type DeepPartial4005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4005<T[P]> }
  : T;

type Paths4005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4005<K, Paths4005<T[K], Prev4005[D]>> : never }[keyof T]
  : never;

type Prev4005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4005 {
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

type ConfigPaths4005 = Paths4005<NestedConfig4005>;

interface HeavyProps4005 {
  config: DeepPartial4005<NestedConfig4005>;
  path?: ConfigPaths4005;
}

const HeavyComponent4005 = memo(function HeavyComponent4005({ config }: HeavyProps4005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4005.displayName = 'HeavyComponent4005';
export default HeavyComponent4005;
