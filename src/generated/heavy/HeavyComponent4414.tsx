'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4414<T> = T extends (infer U)[]
  ? DeepReadonlyArray4414<U>
  : T extends object
  ? DeepReadonlyObject4414<T>
  : T;

interface DeepReadonlyArray4414<T> extends ReadonlyArray<DeepReadonly4414<T>> {}

type DeepReadonlyObject4414<T> = {
  readonly [P in keyof T]: DeepReadonly4414<T[P]>;
};

type UnionToIntersection4414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4414<T> = UnionToIntersection4414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4414<T extends unknown[], V> = [...T, V];

type TuplifyUnion4414<T, L = LastOf4414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4414<TuplifyUnion4414<Exclude<T, L>>, L>;

type DeepPartial4414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4414<T[P]> }
  : T;

type Paths4414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4414<K, Paths4414<T[K], Prev4414[D]>> : never }[keyof T]
  : never;

type Prev4414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4414 {
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

type ConfigPaths4414 = Paths4414<NestedConfig4414>;

interface HeavyProps4414 {
  config: DeepPartial4414<NestedConfig4414>;
  path?: ConfigPaths4414;
}

const HeavyComponent4414 = memo(function HeavyComponent4414({ config }: HeavyProps4414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4414.displayName = 'HeavyComponent4414';
export default HeavyComponent4414;
