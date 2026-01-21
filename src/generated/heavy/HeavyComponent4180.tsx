'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4180<T> = T extends (infer U)[]
  ? DeepReadonlyArray4180<U>
  : T extends object
  ? DeepReadonlyObject4180<T>
  : T;

interface DeepReadonlyArray4180<T> extends ReadonlyArray<DeepReadonly4180<T>> {}

type DeepReadonlyObject4180<T> = {
  readonly [P in keyof T]: DeepReadonly4180<T[P]>;
};

type UnionToIntersection4180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4180<T> = UnionToIntersection4180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4180<T extends unknown[], V> = [...T, V];

type TuplifyUnion4180<T, L = LastOf4180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4180<TuplifyUnion4180<Exclude<T, L>>, L>;

type DeepPartial4180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4180<T[P]> }
  : T;

type Paths4180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4180<K, Paths4180<T[K], Prev4180[D]>> : never }[keyof T]
  : never;

type Prev4180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4180 {
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

type ConfigPaths4180 = Paths4180<NestedConfig4180>;

interface HeavyProps4180 {
  config: DeepPartial4180<NestedConfig4180>;
  path?: ConfigPaths4180;
}

const HeavyComponent4180 = memo(function HeavyComponent4180({ config }: HeavyProps4180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4180.displayName = 'HeavyComponent4180';
export default HeavyComponent4180;
