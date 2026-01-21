'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly604<T> = T extends (infer U)[]
  ? DeepReadonlyArray604<U>
  : T extends object
  ? DeepReadonlyObject604<T>
  : T;

interface DeepReadonlyArray604<T> extends ReadonlyArray<DeepReadonly604<T>> {}

type DeepReadonlyObject604<T> = {
  readonly [P in keyof T]: DeepReadonly604<T[P]>;
};

type UnionToIntersection604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf604<T> = UnionToIntersection604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push604<T extends unknown[], V> = [...T, V];

type TuplifyUnion604<T, L = LastOf604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push604<TuplifyUnion604<Exclude<T, L>>, L>;

type DeepPartial604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial604<T[P]> }
  : T;

type Paths604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join604<K, Paths604<T[K], Prev604[D]>> : never }[keyof T]
  : never;

type Prev604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig604 {
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

type ConfigPaths604 = Paths604<NestedConfig604>;

interface HeavyProps604 {
  config: DeepPartial604<NestedConfig604>;
  path?: ConfigPaths604;
}

const HeavyComponent604 = memo(function HeavyComponent604({ config }: HeavyProps604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent604.displayName = 'HeavyComponent604';
export default HeavyComponent604;
