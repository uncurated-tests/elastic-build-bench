'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4640<T> = T extends (infer U)[]
  ? DeepReadonlyArray4640<U>
  : T extends object
  ? DeepReadonlyObject4640<T>
  : T;

interface DeepReadonlyArray4640<T> extends ReadonlyArray<DeepReadonly4640<T>> {}

type DeepReadonlyObject4640<T> = {
  readonly [P in keyof T]: DeepReadonly4640<T[P]>;
};

type UnionToIntersection4640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4640<T> = UnionToIntersection4640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4640<T extends unknown[], V> = [...T, V];

type TuplifyUnion4640<T, L = LastOf4640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4640<TuplifyUnion4640<Exclude<T, L>>, L>;

type DeepPartial4640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4640<T[P]> }
  : T;

type Paths4640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4640<K, Paths4640<T[K], Prev4640[D]>> : never }[keyof T]
  : never;

type Prev4640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4640 {
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

type ConfigPaths4640 = Paths4640<NestedConfig4640>;

interface HeavyProps4640 {
  config: DeepPartial4640<NestedConfig4640>;
  path?: ConfigPaths4640;
}

const HeavyComponent4640 = memo(function HeavyComponent4640({ config }: HeavyProps4640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4640.displayName = 'HeavyComponent4640';
export default HeavyComponent4640;
