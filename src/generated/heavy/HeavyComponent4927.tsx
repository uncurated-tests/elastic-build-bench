'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4927<T> = T extends (infer U)[]
  ? DeepReadonlyArray4927<U>
  : T extends object
  ? DeepReadonlyObject4927<T>
  : T;

interface DeepReadonlyArray4927<T> extends ReadonlyArray<DeepReadonly4927<T>> {}

type DeepReadonlyObject4927<T> = {
  readonly [P in keyof T]: DeepReadonly4927<T[P]>;
};

type UnionToIntersection4927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4927<T> = UnionToIntersection4927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4927<T extends unknown[], V> = [...T, V];

type TuplifyUnion4927<T, L = LastOf4927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4927<TuplifyUnion4927<Exclude<T, L>>, L>;

type DeepPartial4927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4927<T[P]> }
  : T;

type Paths4927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4927<K, Paths4927<T[K], Prev4927[D]>> : never }[keyof T]
  : never;

type Prev4927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4927 {
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

type ConfigPaths4927 = Paths4927<NestedConfig4927>;

interface HeavyProps4927 {
  config: DeepPartial4927<NestedConfig4927>;
  path?: ConfigPaths4927;
}

const HeavyComponent4927 = memo(function HeavyComponent4927({ config }: HeavyProps4927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4927.displayName = 'HeavyComponent4927';
export default HeavyComponent4927;
