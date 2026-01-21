'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4486<T> = T extends (infer U)[]
  ? DeepReadonlyArray4486<U>
  : T extends object
  ? DeepReadonlyObject4486<T>
  : T;

interface DeepReadonlyArray4486<T> extends ReadonlyArray<DeepReadonly4486<T>> {}

type DeepReadonlyObject4486<T> = {
  readonly [P in keyof T]: DeepReadonly4486<T[P]>;
};

type UnionToIntersection4486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4486<T> = UnionToIntersection4486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4486<T extends unknown[], V> = [...T, V];

type TuplifyUnion4486<T, L = LastOf4486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4486<TuplifyUnion4486<Exclude<T, L>>, L>;

type DeepPartial4486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4486<T[P]> }
  : T;

type Paths4486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4486<K, Paths4486<T[K], Prev4486[D]>> : never }[keyof T]
  : never;

type Prev4486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4486 {
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

type ConfigPaths4486 = Paths4486<NestedConfig4486>;

interface HeavyProps4486 {
  config: DeepPartial4486<NestedConfig4486>;
  path?: ConfigPaths4486;
}

const HeavyComponent4486 = memo(function HeavyComponent4486({ config }: HeavyProps4486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4486.displayName = 'HeavyComponent4486';
export default HeavyComponent4486;
