'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4867<T> = T extends (infer U)[]
  ? DeepReadonlyArray4867<U>
  : T extends object
  ? DeepReadonlyObject4867<T>
  : T;

interface DeepReadonlyArray4867<T> extends ReadonlyArray<DeepReadonly4867<T>> {}

type DeepReadonlyObject4867<T> = {
  readonly [P in keyof T]: DeepReadonly4867<T[P]>;
};

type UnionToIntersection4867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4867<T> = UnionToIntersection4867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4867<T extends unknown[], V> = [...T, V];

type TuplifyUnion4867<T, L = LastOf4867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4867<TuplifyUnion4867<Exclude<T, L>>, L>;

type DeepPartial4867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4867<T[P]> }
  : T;

type Paths4867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4867<K, Paths4867<T[K], Prev4867[D]>> : never }[keyof T]
  : never;

type Prev4867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4867 {
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

type ConfigPaths4867 = Paths4867<NestedConfig4867>;

interface HeavyProps4867 {
  config: DeepPartial4867<NestedConfig4867>;
  path?: ConfigPaths4867;
}

const HeavyComponent4867 = memo(function HeavyComponent4867({ config }: HeavyProps4867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4867.displayName = 'HeavyComponent4867';
export default HeavyComponent4867;
