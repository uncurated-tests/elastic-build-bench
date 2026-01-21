'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4852<T> = T extends (infer U)[]
  ? DeepReadonlyArray4852<U>
  : T extends object
  ? DeepReadonlyObject4852<T>
  : T;

interface DeepReadonlyArray4852<T> extends ReadonlyArray<DeepReadonly4852<T>> {}

type DeepReadonlyObject4852<T> = {
  readonly [P in keyof T]: DeepReadonly4852<T[P]>;
};

type UnionToIntersection4852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4852<T> = UnionToIntersection4852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4852<T extends unknown[], V> = [...T, V];

type TuplifyUnion4852<T, L = LastOf4852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4852<TuplifyUnion4852<Exclude<T, L>>, L>;

type DeepPartial4852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4852<T[P]> }
  : T;

type Paths4852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4852<K, Paths4852<T[K], Prev4852[D]>> : never }[keyof T]
  : never;

type Prev4852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4852 {
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

type ConfigPaths4852 = Paths4852<NestedConfig4852>;

interface HeavyProps4852 {
  config: DeepPartial4852<NestedConfig4852>;
  path?: ConfigPaths4852;
}

const HeavyComponent4852 = memo(function HeavyComponent4852({ config }: HeavyProps4852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4852.displayName = 'HeavyComponent4852';
export default HeavyComponent4852;
