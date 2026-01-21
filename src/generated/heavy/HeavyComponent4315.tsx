'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4315<T> = T extends (infer U)[]
  ? DeepReadonlyArray4315<U>
  : T extends object
  ? DeepReadonlyObject4315<T>
  : T;

interface DeepReadonlyArray4315<T> extends ReadonlyArray<DeepReadonly4315<T>> {}

type DeepReadonlyObject4315<T> = {
  readonly [P in keyof T]: DeepReadonly4315<T[P]>;
};

type UnionToIntersection4315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4315<T> = UnionToIntersection4315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4315<T extends unknown[], V> = [...T, V];

type TuplifyUnion4315<T, L = LastOf4315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4315<TuplifyUnion4315<Exclude<T, L>>, L>;

type DeepPartial4315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4315<T[P]> }
  : T;

type Paths4315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4315<K, Paths4315<T[K], Prev4315[D]>> : never }[keyof T]
  : never;

type Prev4315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4315 {
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

type ConfigPaths4315 = Paths4315<NestedConfig4315>;

interface HeavyProps4315 {
  config: DeepPartial4315<NestedConfig4315>;
  path?: ConfigPaths4315;
}

const HeavyComponent4315 = memo(function HeavyComponent4315({ config }: HeavyProps4315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4315.displayName = 'HeavyComponent4315';
export default HeavyComponent4315;
