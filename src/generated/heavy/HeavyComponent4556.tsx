'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4556<T> = T extends (infer U)[]
  ? DeepReadonlyArray4556<U>
  : T extends object
  ? DeepReadonlyObject4556<T>
  : T;

interface DeepReadonlyArray4556<T> extends ReadonlyArray<DeepReadonly4556<T>> {}

type DeepReadonlyObject4556<T> = {
  readonly [P in keyof T]: DeepReadonly4556<T[P]>;
};

type UnionToIntersection4556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4556<T> = UnionToIntersection4556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4556<T extends unknown[], V> = [...T, V];

type TuplifyUnion4556<T, L = LastOf4556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4556<TuplifyUnion4556<Exclude<T, L>>, L>;

type DeepPartial4556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4556<T[P]> }
  : T;

type Paths4556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4556<K, Paths4556<T[K], Prev4556[D]>> : never }[keyof T]
  : never;

type Prev4556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4556 {
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

type ConfigPaths4556 = Paths4556<NestedConfig4556>;

interface HeavyProps4556 {
  config: DeepPartial4556<NestedConfig4556>;
  path?: ConfigPaths4556;
}

const HeavyComponent4556 = memo(function HeavyComponent4556({ config }: HeavyProps4556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4556.displayName = 'HeavyComponent4556';
export default HeavyComponent4556;
