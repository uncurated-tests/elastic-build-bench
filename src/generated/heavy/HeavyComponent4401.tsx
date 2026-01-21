'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4401<T> = T extends (infer U)[]
  ? DeepReadonlyArray4401<U>
  : T extends object
  ? DeepReadonlyObject4401<T>
  : T;

interface DeepReadonlyArray4401<T> extends ReadonlyArray<DeepReadonly4401<T>> {}

type DeepReadonlyObject4401<T> = {
  readonly [P in keyof T]: DeepReadonly4401<T[P]>;
};

type UnionToIntersection4401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4401<T> = UnionToIntersection4401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4401<T extends unknown[], V> = [...T, V];

type TuplifyUnion4401<T, L = LastOf4401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4401<TuplifyUnion4401<Exclude<T, L>>, L>;

type DeepPartial4401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4401<T[P]> }
  : T;

type Paths4401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4401<K, Paths4401<T[K], Prev4401[D]>> : never }[keyof T]
  : never;

type Prev4401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4401 {
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

type ConfigPaths4401 = Paths4401<NestedConfig4401>;

interface HeavyProps4401 {
  config: DeepPartial4401<NestedConfig4401>;
  path?: ConfigPaths4401;
}

const HeavyComponent4401 = memo(function HeavyComponent4401({ config }: HeavyProps4401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4401.displayName = 'HeavyComponent4401';
export default HeavyComponent4401;
