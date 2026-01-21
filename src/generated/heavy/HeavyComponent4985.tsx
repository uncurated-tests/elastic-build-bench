'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4985<T> = T extends (infer U)[]
  ? DeepReadonlyArray4985<U>
  : T extends object
  ? DeepReadonlyObject4985<T>
  : T;

interface DeepReadonlyArray4985<T> extends ReadonlyArray<DeepReadonly4985<T>> {}

type DeepReadonlyObject4985<T> = {
  readonly [P in keyof T]: DeepReadonly4985<T[P]>;
};

type UnionToIntersection4985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4985<T> = UnionToIntersection4985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4985<T extends unknown[], V> = [...T, V];

type TuplifyUnion4985<T, L = LastOf4985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4985<TuplifyUnion4985<Exclude<T, L>>, L>;

type DeepPartial4985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4985<T[P]> }
  : T;

type Paths4985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4985<K, Paths4985<T[K], Prev4985[D]>> : never }[keyof T]
  : never;

type Prev4985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4985 {
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

type ConfigPaths4985 = Paths4985<NestedConfig4985>;

interface HeavyProps4985 {
  config: DeepPartial4985<NestedConfig4985>;
  path?: ConfigPaths4985;
}

const HeavyComponent4985 = memo(function HeavyComponent4985({ config }: HeavyProps4985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4985.displayName = 'HeavyComponent4985';
export default HeavyComponent4985;
