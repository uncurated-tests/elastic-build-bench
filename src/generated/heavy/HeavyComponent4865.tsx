'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4865<T> = T extends (infer U)[]
  ? DeepReadonlyArray4865<U>
  : T extends object
  ? DeepReadonlyObject4865<T>
  : T;

interface DeepReadonlyArray4865<T> extends ReadonlyArray<DeepReadonly4865<T>> {}

type DeepReadonlyObject4865<T> = {
  readonly [P in keyof T]: DeepReadonly4865<T[P]>;
};

type UnionToIntersection4865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4865<T> = UnionToIntersection4865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4865<T extends unknown[], V> = [...T, V];

type TuplifyUnion4865<T, L = LastOf4865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4865<TuplifyUnion4865<Exclude<T, L>>, L>;

type DeepPartial4865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4865<T[P]> }
  : T;

type Paths4865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4865<K, Paths4865<T[K], Prev4865[D]>> : never }[keyof T]
  : never;

type Prev4865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4865 {
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

type ConfigPaths4865 = Paths4865<NestedConfig4865>;

interface HeavyProps4865 {
  config: DeepPartial4865<NestedConfig4865>;
  path?: ConfigPaths4865;
}

const HeavyComponent4865 = memo(function HeavyComponent4865({ config }: HeavyProps4865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4865.displayName = 'HeavyComponent4865';
export default HeavyComponent4865;
