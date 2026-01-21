'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4424<T> = T extends (infer U)[]
  ? DeepReadonlyArray4424<U>
  : T extends object
  ? DeepReadonlyObject4424<T>
  : T;

interface DeepReadonlyArray4424<T> extends ReadonlyArray<DeepReadonly4424<T>> {}

type DeepReadonlyObject4424<T> = {
  readonly [P in keyof T]: DeepReadonly4424<T[P]>;
};

type UnionToIntersection4424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4424<T> = UnionToIntersection4424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4424<T extends unknown[], V> = [...T, V];

type TuplifyUnion4424<T, L = LastOf4424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4424<TuplifyUnion4424<Exclude<T, L>>, L>;

type DeepPartial4424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4424<T[P]> }
  : T;

type Paths4424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4424<K, Paths4424<T[K], Prev4424[D]>> : never }[keyof T]
  : never;

type Prev4424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4424 {
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

type ConfigPaths4424 = Paths4424<NestedConfig4424>;

interface HeavyProps4424 {
  config: DeepPartial4424<NestedConfig4424>;
  path?: ConfigPaths4424;
}

const HeavyComponent4424 = memo(function HeavyComponent4424({ config }: HeavyProps4424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4424.displayName = 'HeavyComponent4424';
export default HeavyComponent4424;
