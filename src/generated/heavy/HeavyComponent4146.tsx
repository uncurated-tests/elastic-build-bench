'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4146<T> = T extends (infer U)[]
  ? DeepReadonlyArray4146<U>
  : T extends object
  ? DeepReadonlyObject4146<T>
  : T;

interface DeepReadonlyArray4146<T> extends ReadonlyArray<DeepReadonly4146<T>> {}

type DeepReadonlyObject4146<T> = {
  readonly [P in keyof T]: DeepReadonly4146<T[P]>;
};

type UnionToIntersection4146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4146<T> = UnionToIntersection4146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4146<T extends unknown[], V> = [...T, V];

type TuplifyUnion4146<T, L = LastOf4146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4146<TuplifyUnion4146<Exclude<T, L>>, L>;

type DeepPartial4146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4146<T[P]> }
  : T;

type Paths4146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4146<K, Paths4146<T[K], Prev4146[D]>> : never }[keyof T]
  : never;

type Prev4146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4146 {
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

type ConfigPaths4146 = Paths4146<NestedConfig4146>;

interface HeavyProps4146 {
  config: DeepPartial4146<NestedConfig4146>;
  path?: ConfigPaths4146;
}

const HeavyComponent4146 = memo(function HeavyComponent4146({ config }: HeavyProps4146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4146.displayName = 'HeavyComponent4146';
export default HeavyComponent4146;
