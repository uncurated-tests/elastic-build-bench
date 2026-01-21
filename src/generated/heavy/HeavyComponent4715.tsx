'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4715<T> = T extends (infer U)[]
  ? DeepReadonlyArray4715<U>
  : T extends object
  ? DeepReadonlyObject4715<T>
  : T;

interface DeepReadonlyArray4715<T> extends ReadonlyArray<DeepReadonly4715<T>> {}

type DeepReadonlyObject4715<T> = {
  readonly [P in keyof T]: DeepReadonly4715<T[P]>;
};

type UnionToIntersection4715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4715<T> = UnionToIntersection4715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4715<T extends unknown[], V> = [...T, V];

type TuplifyUnion4715<T, L = LastOf4715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4715<TuplifyUnion4715<Exclude<T, L>>, L>;

type DeepPartial4715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4715<T[P]> }
  : T;

type Paths4715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4715<K, Paths4715<T[K], Prev4715[D]>> : never }[keyof T]
  : never;

type Prev4715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4715 {
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

type ConfigPaths4715 = Paths4715<NestedConfig4715>;

interface HeavyProps4715 {
  config: DeepPartial4715<NestedConfig4715>;
  path?: ConfigPaths4715;
}

const HeavyComponent4715 = memo(function HeavyComponent4715({ config }: HeavyProps4715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4715.displayName = 'HeavyComponent4715';
export default HeavyComponent4715;
