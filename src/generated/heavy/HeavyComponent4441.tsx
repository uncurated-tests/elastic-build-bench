'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4441<T> = T extends (infer U)[]
  ? DeepReadonlyArray4441<U>
  : T extends object
  ? DeepReadonlyObject4441<T>
  : T;

interface DeepReadonlyArray4441<T> extends ReadonlyArray<DeepReadonly4441<T>> {}

type DeepReadonlyObject4441<T> = {
  readonly [P in keyof T]: DeepReadonly4441<T[P]>;
};

type UnionToIntersection4441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4441<T> = UnionToIntersection4441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4441<T extends unknown[], V> = [...T, V];

type TuplifyUnion4441<T, L = LastOf4441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4441<TuplifyUnion4441<Exclude<T, L>>, L>;

type DeepPartial4441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4441<T[P]> }
  : T;

type Paths4441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4441<K, Paths4441<T[K], Prev4441[D]>> : never }[keyof T]
  : never;

type Prev4441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4441 {
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

type ConfigPaths4441 = Paths4441<NestedConfig4441>;

interface HeavyProps4441 {
  config: DeepPartial4441<NestedConfig4441>;
  path?: ConfigPaths4441;
}

const HeavyComponent4441 = memo(function HeavyComponent4441({ config }: HeavyProps4441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4441.displayName = 'HeavyComponent4441';
export default HeavyComponent4441;
