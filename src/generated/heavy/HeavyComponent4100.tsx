'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4100<T> = T extends (infer U)[]
  ? DeepReadonlyArray4100<U>
  : T extends object
  ? DeepReadonlyObject4100<T>
  : T;

interface DeepReadonlyArray4100<T> extends ReadonlyArray<DeepReadonly4100<T>> {}

type DeepReadonlyObject4100<T> = {
  readonly [P in keyof T]: DeepReadonly4100<T[P]>;
};

type UnionToIntersection4100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4100<T> = UnionToIntersection4100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4100<T extends unknown[], V> = [...T, V];

type TuplifyUnion4100<T, L = LastOf4100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4100<TuplifyUnion4100<Exclude<T, L>>, L>;

type DeepPartial4100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4100<T[P]> }
  : T;

type Paths4100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4100<K, Paths4100<T[K], Prev4100[D]>> : never }[keyof T]
  : never;

type Prev4100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4100 {
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

type ConfigPaths4100 = Paths4100<NestedConfig4100>;

interface HeavyProps4100 {
  config: DeepPartial4100<NestedConfig4100>;
  path?: ConfigPaths4100;
}

const HeavyComponent4100 = memo(function HeavyComponent4100({ config }: HeavyProps4100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4100.displayName = 'HeavyComponent4100';
export default HeavyComponent4100;
