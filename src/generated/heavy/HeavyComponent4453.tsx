'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4453<T> = T extends (infer U)[]
  ? DeepReadonlyArray4453<U>
  : T extends object
  ? DeepReadonlyObject4453<T>
  : T;

interface DeepReadonlyArray4453<T> extends ReadonlyArray<DeepReadonly4453<T>> {}

type DeepReadonlyObject4453<T> = {
  readonly [P in keyof T]: DeepReadonly4453<T[P]>;
};

type UnionToIntersection4453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4453<T> = UnionToIntersection4453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4453<T extends unknown[], V> = [...T, V];

type TuplifyUnion4453<T, L = LastOf4453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4453<TuplifyUnion4453<Exclude<T, L>>, L>;

type DeepPartial4453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4453<T[P]> }
  : T;

type Paths4453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4453<K, Paths4453<T[K], Prev4453[D]>> : never }[keyof T]
  : never;

type Prev4453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4453 {
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

type ConfigPaths4453 = Paths4453<NestedConfig4453>;

interface HeavyProps4453 {
  config: DeepPartial4453<NestedConfig4453>;
  path?: ConfigPaths4453;
}

const HeavyComponent4453 = memo(function HeavyComponent4453({ config }: HeavyProps4453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4453.displayName = 'HeavyComponent4453';
export default HeavyComponent4453;
