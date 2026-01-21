'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4144<T> = T extends (infer U)[]
  ? DeepReadonlyArray4144<U>
  : T extends object
  ? DeepReadonlyObject4144<T>
  : T;

interface DeepReadonlyArray4144<T> extends ReadonlyArray<DeepReadonly4144<T>> {}

type DeepReadonlyObject4144<T> = {
  readonly [P in keyof T]: DeepReadonly4144<T[P]>;
};

type UnionToIntersection4144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4144<T> = UnionToIntersection4144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4144<T extends unknown[], V> = [...T, V];

type TuplifyUnion4144<T, L = LastOf4144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4144<TuplifyUnion4144<Exclude<T, L>>, L>;

type DeepPartial4144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4144<T[P]> }
  : T;

type Paths4144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4144<K, Paths4144<T[K], Prev4144[D]>> : never }[keyof T]
  : never;

type Prev4144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4144 {
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

type ConfigPaths4144 = Paths4144<NestedConfig4144>;

interface HeavyProps4144 {
  config: DeepPartial4144<NestedConfig4144>;
  path?: ConfigPaths4144;
}

const HeavyComponent4144 = memo(function HeavyComponent4144({ config }: HeavyProps4144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4144.displayName = 'HeavyComponent4144';
export default HeavyComponent4144;
