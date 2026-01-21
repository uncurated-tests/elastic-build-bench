'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4017<T> = T extends (infer U)[]
  ? DeepReadonlyArray4017<U>
  : T extends object
  ? DeepReadonlyObject4017<T>
  : T;

interface DeepReadonlyArray4017<T> extends ReadonlyArray<DeepReadonly4017<T>> {}

type DeepReadonlyObject4017<T> = {
  readonly [P in keyof T]: DeepReadonly4017<T[P]>;
};

type UnionToIntersection4017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4017<T> = UnionToIntersection4017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4017<T extends unknown[], V> = [...T, V];

type TuplifyUnion4017<T, L = LastOf4017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4017<TuplifyUnion4017<Exclude<T, L>>, L>;

type DeepPartial4017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4017<T[P]> }
  : T;

type Paths4017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4017<K, Paths4017<T[K], Prev4017[D]>> : never }[keyof T]
  : never;

type Prev4017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4017 {
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

type ConfigPaths4017 = Paths4017<NestedConfig4017>;

interface HeavyProps4017 {
  config: DeepPartial4017<NestedConfig4017>;
  path?: ConfigPaths4017;
}

const HeavyComponent4017 = memo(function HeavyComponent4017({ config }: HeavyProps4017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4017.displayName = 'HeavyComponent4017';
export default HeavyComponent4017;
