'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4782<T> = T extends (infer U)[]
  ? DeepReadonlyArray4782<U>
  : T extends object
  ? DeepReadonlyObject4782<T>
  : T;

interface DeepReadonlyArray4782<T> extends ReadonlyArray<DeepReadonly4782<T>> {}

type DeepReadonlyObject4782<T> = {
  readonly [P in keyof T]: DeepReadonly4782<T[P]>;
};

type UnionToIntersection4782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4782<T> = UnionToIntersection4782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4782<T extends unknown[], V> = [...T, V];

type TuplifyUnion4782<T, L = LastOf4782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4782<TuplifyUnion4782<Exclude<T, L>>, L>;

type DeepPartial4782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4782<T[P]> }
  : T;

type Paths4782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4782<K, Paths4782<T[K], Prev4782[D]>> : never }[keyof T]
  : never;

type Prev4782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4782 {
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

type ConfigPaths4782 = Paths4782<NestedConfig4782>;

interface HeavyProps4782 {
  config: DeepPartial4782<NestedConfig4782>;
  path?: ConfigPaths4782;
}

const HeavyComponent4782 = memo(function HeavyComponent4782({ config }: HeavyProps4782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4782.displayName = 'HeavyComponent4782';
export default HeavyComponent4782;
