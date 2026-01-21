'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4126<T> = T extends (infer U)[]
  ? DeepReadonlyArray4126<U>
  : T extends object
  ? DeepReadonlyObject4126<T>
  : T;

interface DeepReadonlyArray4126<T> extends ReadonlyArray<DeepReadonly4126<T>> {}

type DeepReadonlyObject4126<T> = {
  readonly [P in keyof T]: DeepReadonly4126<T[P]>;
};

type UnionToIntersection4126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4126<T> = UnionToIntersection4126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4126<T extends unknown[], V> = [...T, V];

type TuplifyUnion4126<T, L = LastOf4126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4126<TuplifyUnion4126<Exclude<T, L>>, L>;

type DeepPartial4126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4126<T[P]> }
  : T;

type Paths4126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4126<K, Paths4126<T[K], Prev4126[D]>> : never }[keyof T]
  : never;

type Prev4126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4126 {
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

type ConfigPaths4126 = Paths4126<NestedConfig4126>;

interface HeavyProps4126 {
  config: DeepPartial4126<NestedConfig4126>;
  path?: ConfigPaths4126;
}

const HeavyComponent4126 = memo(function HeavyComponent4126({ config }: HeavyProps4126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4126.displayName = 'HeavyComponent4126';
export default HeavyComponent4126;
