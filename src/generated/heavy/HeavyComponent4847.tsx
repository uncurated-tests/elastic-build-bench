'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4847<T> = T extends (infer U)[]
  ? DeepReadonlyArray4847<U>
  : T extends object
  ? DeepReadonlyObject4847<T>
  : T;

interface DeepReadonlyArray4847<T> extends ReadonlyArray<DeepReadonly4847<T>> {}

type DeepReadonlyObject4847<T> = {
  readonly [P in keyof T]: DeepReadonly4847<T[P]>;
};

type UnionToIntersection4847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4847<T> = UnionToIntersection4847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4847<T extends unknown[], V> = [...T, V];

type TuplifyUnion4847<T, L = LastOf4847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4847<TuplifyUnion4847<Exclude<T, L>>, L>;

type DeepPartial4847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4847<T[P]> }
  : T;

type Paths4847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4847<K, Paths4847<T[K], Prev4847[D]>> : never }[keyof T]
  : never;

type Prev4847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4847 {
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

type ConfigPaths4847 = Paths4847<NestedConfig4847>;

interface HeavyProps4847 {
  config: DeepPartial4847<NestedConfig4847>;
  path?: ConfigPaths4847;
}

const HeavyComponent4847 = memo(function HeavyComponent4847({ config }: HeavyProps4847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4847.displayName = 'HeavyComponent4847';
export default HeavyComponent4847;
