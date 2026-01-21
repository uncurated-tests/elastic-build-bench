'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4039<T> = T extends (infer U)[]
  ? DeepReadonlyArray4039<U>
  : T extends object
  ? DeepReadonlyObject4039<T>
  : T;

interface DeepReadonlyArray4039<T> extends ReadonlyArray<DeepReadonly4039<T>> {}

type DeepReadonlyObject4039<T> = {
  readonly [P in keyof T]: DeepReadonly4039<T[P]>;
};

type UnionToIntersection4039<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4039<T> = UnionToIntersection4039<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4039<T extends unknown[], V> = [...T, V];

type TuplifyUnion4039<T, L = LastOf4039<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4039<TuplifyUnion4039<Exclude<T, L>>, L>;

type DeepPartial4039<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4039<T[P]> }
  : T;

type Paths4039<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4039<K, Paths4039<T[K], Prev4039[D]>> : never }[keyof T]
  : never;

type Prev4039 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4039<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4039 {
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

type ConfigPaths4039 = Paths4039<NestedConfig4039>;

interface HeavyProps4039 {
  config: DeepPartial4039<NestedConfig4039>;
  path?: ConfigPaths4039;
}

const HeavyComponent4039 = memo(function HeavyComponent4039({ config }: HeavyProps4039) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4039) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4039 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4039: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4039.displayName = 'HeavyComponent4039';
export default HeavyComponent4039;
