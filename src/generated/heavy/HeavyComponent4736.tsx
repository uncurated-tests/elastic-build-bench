'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4736<T> = T extends (infer U)[]
  ? DeepReadonlyArray4736<U>
  : T extends object
  ? DeepReadonlyObject4736<T>
  : T;

interface DeepReadonlyArray4736<T> extends ReadonlyArray<DeepReadonly4736<T>> {}

type DeepReadonlyObject4736<T> = {
  readonly [P in keyof T]: DeepReadonly4736<T[P]>;
};

type UnionToIntersection4736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4736<T> = UnionToIntersection4736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4736<T extends unknown[], V> = [...T, V];

type TuplifyUnion4736<T, L = LastOf4736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4736<TuplifyUnion4736<Exclude<T, L>>, L>;

type DeepPartial4736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4736<T[P]> }
  : T;

type Paths4736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4736<K, Paths4736<T[K], Prev4736[D]>> : never }[keyof T]
  : never;

type Prev4736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4736 {
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

type ConfigPaths4736 = Paths4736<NestedConfig4736>;

interface HeavyProps4736 {
  config: DeepPartial4736<NestedConfig4736>;
  path?: ConfigPaths4736;
}

const HeavyComponent4736 = memo(function HeavyComponent4736({ config }: HeavyProps4736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4736.displayName = 'HeavyComponent4736';
export default HeavyComponent4736;
