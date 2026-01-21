'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4109<T> = T extends (infer U)[]
  ? DeepReadonlyArray4109<U>
  : T extends object
  ? DeepReadonlyObject4109<T>
  : T;

interface DeepReadonlyArray4109<T> extends ReadonlyArray<DeepReadonly4109<T>> {}

type DeepReadonlyObject4109<T> = {
  readonly [P in keyof T]: DeepReadonly4109<T[P]>;
};

type UnionToIntersection4109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4109<T> = UnionToIntersection4109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4109<T extends unknown[], V> = [...T, V];

type TuplifyUnion4109<T, L = LastOf4109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4109<TuplifyUnion4109<Exclude<T, L>>, L>;

type DeepPartial4109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4109<T[P]> }
  : T;

type Paths4109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4109<K, Paths4109<T[K], Prev4109[D]>> : never }[keyof T]
  : never;

type Prev4109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4109 {
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

type ConfigPaths4109 = Paths4109<NestedConfig4109>;

interface HeavyProps4109 {
  config: DeepPartial4109<NestedConfig4109>;
  path?: ConfigPaths4109;
}

const HeavyComponent4109 = memo(function HeavyComponent4109({ config }: HeavyProps4109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4109.displayName = 'HeavyComponent4109';
export default HeavyComponent4109;
