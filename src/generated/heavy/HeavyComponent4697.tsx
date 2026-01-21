'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4697<T> = T extends (infer U)[]
  ? DeepReadonlyArray4697<U>
  : T extends object
  ? DeepReadonlyObject4697<T>
  : T;

interface DeepReadonlyArray4697<T> extends ReadonlyArray<DeepReadonly4697<T>> {}

type DeepReadonlyObject4697<T> = {
  readonly [P in keyof T]: DeepReadonly4697<T[P]>;
};

type UnionToIntersection4697<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4697<T> = UnionToIntersection4697<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4697<T extends unknown[], V> = [...T, V];

type TuplifyUnion4697<T, L = LastOf4697<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4697<TuplifyUnion4697<Exclude<T, L>>, L>;

type DeepPartial4697<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4697<T[P]> }
  : T;

type Paths4697<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4697<K, Paths4697<T[K], Prev4697[D]>> : never }[keyof T]
  : never;

type Prev4697 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4697<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4697 {
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

type ConfigPaths4697 = Paths4697<NestedConfig4697>;

interface HeavyProps4697 {
  config: DeepPartial4697<NestedConfig4697>;
  path?: ConfigPaths4697;
}

const HeavyComponent4697 = memo(function HeavyComponent4697({ config }: HeavyProps4697) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4697) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4697 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4697: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4697.displayName = 'HeavyComponent4697';
export default HeavyComponent4697;
