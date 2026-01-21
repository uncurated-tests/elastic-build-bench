'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2965<T> = T extends (infer U)[]
  ? DeepReadonlyArray2965<U>
  : T extends object
  ? DeepReadonlyObject2965<T>
  : T;

interface DeepReadonlyArray2965<T> extends ReadonlyArray<DeepReadonly2965<T>> {}

type DeepReadonlyObject2965<T> = {
  readonly [P in keyof T]: DeepReadonly2965<T[P]>;
};

type UnionToIntersection2965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2965<T> = UnionToIntersection2965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2965<T extends unknown[], V> = [...T, V];

type TuplifyUnion2965<T, L = LastOf2965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2965<TuplifyUnion2965<Exclude<T, L>>, L>;

type DeepPartial2965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2965<T[P]> }
  : T;

type Paths2965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2965<K, Paths2965<T[K], Prev2965[D]>> : never }[keyof T]
  : never;

type Prev2965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2965 {
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

type ConfigPaths2965 = Paths2965<NestedConfig2965>;

interface HeavyProps2965 {
  config: DeepPartial2965<NestedConfig2965>;
  path?: ConfigPaths2965;
}

const HeavyComponent2965 = memo(function HeavyComponent2965({ config }: HeavyProps2965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2965.displayName = 'HeavyComponent2965';
export default HeavyComponent2965;
