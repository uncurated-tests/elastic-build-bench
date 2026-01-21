'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4903<T> = T extends (infer U)[]
  ? DeepReadonlyArray4903<U>
  : T extends object
  ? DeepReadonlyObject4903<T>
  : T;

interface DeepReadonlyArray4903<T> extends ReadonlyArray<DeepReadonly4903<T>> {}

type DeepReadonlyObject4903<T> = {
  readonly [P in keyof T]: DeepReadonly4903<T[P]>;
};

type UnionToIntersection4903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4903<T> = UnionToIntersection4903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4903<T extends unknown[], V> = [...T, V];

type TuplifyUnion4903<T, L = LastOf4903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4903<TuplifyUnion4903<Exclude<T, L>>, L>;

type DeepPartial4903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4903<T[P]> }
  : T;

type Paths4903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4903<K, Paths4903<T[K], Prev4903[D]>> : never }[keyof T]
  : never;

type Prev4903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4903 {
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

type ConfigPaths4903 = Paths4903<NestedConfig4903>;

interface HeavyProps4903 {
  config: DeepPartial4903<NestedConfig4903>;
  path?: ConfigPaths4903;
}

const HeavyComponent4903 = memo(function HeavyComponent4903({ config }: HeavyProps4903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4903.displayName = 'HeavyComponent4903';
export default HeavyComponent4903;
