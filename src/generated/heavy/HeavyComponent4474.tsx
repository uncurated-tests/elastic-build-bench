'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4474<T> = T extends (infer U)[]
  ? DeepReadonlyArray4474<U>
  : T extends object
  ? DeepReadonlyObject4474<T>
  : T;

interface DeepReadonlyArray4474<T> extends ReadonlyArray<DeepReadonly4474<T>> {}

type DeepReadonlyObject4474<T> = {
  readonly [P in keyof T]: DeepReadonly4474<T[P]>;
};

type UnionToIntersection4474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4474<T> = UnionToIntersection4474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4474<T extends unknown[], V> = [...T, V];

type TuplifyUnion4474<T, L = LastOf4474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4474<TuplifyUnion4474<Exclude<T, L>>, L>;

type DeepPartial4474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4474<T[P]> }
  : T;

type Paths4474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4474<K, Paths4474<T[K], Prev4474[D]>> : never }[keyof T]
  : never;

type Prev4474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4474 {
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

type ConfigPaths4474 = Paths4474<NestedConfig4474>;

interface HeavyProps4474 {
  config: DeepPartial4474<NestedConfig4474>;
  path?: ConfigPaths4474;
}

const HeavyComponent4474 = memo(function HeavyComponent4474({ config }: HeavyProps4474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4474.displayName = 'HeavyComponent4474';
export default HeavyComponent4474;
