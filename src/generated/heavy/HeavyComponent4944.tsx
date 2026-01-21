'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4944<T> = T extends (infer U)[]
  ? DeepReadonlyArray4944<U>
  : T extends object
  ? DeepReadonlyObject4944<T>
  : T;

interface DeepReadonlyArray4944<T> extends ReadonlyArray<DeepReadonly4944<T>> {}

type DeepReadonlyObject4944<T> = {
  readonly [P in keyof T]: DeepReadonly4944<T[P]>;
};

type UnionToIntersection4944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4944<T> = UnionToIntersection4944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4944<T extends unknown[], V> = [...T, V];

type TuplifyUnion4944<T, L = LastOf4944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4944<TuplifyUnion4944<Exclude<T, L>>, L>;

type DeepPartial4944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4944<T[P]> }
  : T;

type Paths4944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4944<K, Paths4944<T[K], Prev4944[D]>> : never }[keyof T]
  : never;

type Prev4944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4944 {
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

type ConfigPaths4944 = Paths4944<NestedConfig4944>;

interface HeavyProps4944 {
  config: DeepPartial4944<NestedConfig4944>;
  path?: ConfigPaths4944;
}

const HeavyComponent4944 = memo(function HeavyComponent4944({ config }: HeavyProps4944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4944.displayName = 'HeavyComponent4944';
export default HeavyComponent4944;
