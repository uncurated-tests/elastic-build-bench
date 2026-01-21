'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4764<T> = T extends (infer U)[]
  ? DeepReadonlyArray4764<U>
  : T extends object
  ? DeepReadonlyObject4764<T>
  : T;

interface DeepReadonlyArray4764<T> extends ReadonlyArray<DeepReadonly4764<T>> {}

type DeepReadonlyObject4764<T> = {
  readonly [P in keyof T]: DeepReadonly4764<T[P]>;
};

type UnionToIntersection4764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4764<T> = UnionToIntersection4764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4764<T extends unknown[], V> = [...T, V];

type TuplifyUnion4764<T, L = LastOf4764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4764<TuplifyUnion4764<Exclude<T, L>>, L>;

type DeepPartial4764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4764<T[P]> }
  : T;

type Paths4764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4764<K, Paths4764<T[K], Prev4764[D]>> : never }[keyof T]
  : never;

type Prev4764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4764 {
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

type ConfigPaths4764 = Paths4764<NestedConfig4764>;

interface HeavyProps4764 {
  config: DeepPartial4764<NestedConfig4764>;
  path?: ConfigPaths4764;
}

const HeavyComponent4764 = memo(function HeavyComponent4764({ config }: HeavyProps4764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4764.displayName = 'HeavyComponent4764';
export default HeavyComponent4764;
