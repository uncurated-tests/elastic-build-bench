'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4096<T> = T extends (infer U)[]
  ? DeepReadonlyArray4096<U>
  : T extends object
  ? DeepReadonlyObject4096<T>
  : T;

interface DeepReadonlyArray4096<T> extends ReadonlyArray<DeepReadonly4096<T>> {}

type DeepReadonlyObject4096<T> = {
  readonly [P in keyof T]: DeepReadonly4096<T[P]>;
};

type UnionToIntersection4096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4096<T> = UnionToIntersection4096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4096<T extends unknown[], V> = [...T, V];

type TuplifyUnion4096<T, L = LastOf4096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4096<TuplifyUnion4096<Exclude<T, L>>, L>;

type DeepPartial4096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4096<T[P]> }
  : T;

type Paths4096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4096<K, Paths4096<T[K], Prev4096[D]>> : never }[keyof T]
  : never;

type Prev4096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4096 {
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

type ConfigPaths4096 = Paths4096<NestedConfig4096>;

interface HeavyProps4096 {
  config: DeepPartial4096<NestedConfig4096>;
  path?: ConfigPaths4096;
}

const HeavyComponent4096 = memo(function HeavyComponent4096({ config }: HeavyProps4096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4096.displayName = 'HeavyComponent4096';
export default HeavyComponent4096;
