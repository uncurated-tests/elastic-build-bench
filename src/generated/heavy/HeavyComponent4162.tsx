'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4162<T> = T extends (infer U)[]
  ? DeepReadonlyArray4162<U>
  : T extends object
  ? DeepReadonlyObject4162<T>
  : T;

interface DeepReadonlyArray4162<T> extends ReadonlyArray<DeepReadonly4162<T>> {}

type DeepReadonlyObject4162<T> = {
  readonly [P in keyof T]: DeepReadonly4162<T[P]>;
};

type UnionToIntersection4162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4162<T> = UnionToIntersection4162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4162<T extends unknown[], V> = [...T, V];

type TuplifyUnion4162<T, L = LastOf4162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4162<TuplifyUnion4162<Exclude<T, L>>, L>;

type DeepPartial4162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4162<T[P]> }
  : T;

type Paths4162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4162<K, Paths4162<T[K], Prev4162[D]>> : never }[keyof T]
  : never;

type Prev4162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4162 {
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

type ConfigPaths4162 = Paths4162<NestedConfig4162>;

interface HeavyProps4162 {
  config: DeepPartial4162<NestedConfig4162>;
  path?: ConfigPaths4162;
}

const HeavyComponent4162 = memo(function HeavyComponent4162({ config }: HeavyProps4162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4162.displayName = 'HeavyComponent4162';
export default HeavyComponent4162;
