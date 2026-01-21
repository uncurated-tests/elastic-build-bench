'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4515<T> = T extends (infer U)[]
  ? DeepReadonlyArray4515<U>
  : T extends object
  ? DeepReadonlyObject4515<T>
  : T;

interface DeepReadonlyArray4515<T> extends ReadonlyArray<DeepReadonly4515<T>> {}

type DeepReadonlyObject4515<T> = {
  readonly [P in keyof T]: DeepReadonly4515<T[P]>;
};

type UnionToIntersection4515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4515<T> = UnionToIntersection4515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4515<T extends unknown[], V> = [...T, V];

type TuplifyUnion4515<T, L = LastOf4515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4515<TuplifyUnion4515<Exclude<T, L>>, L>;

type DeepPartial4515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4515<T[P]> }
  : T;

type Paths4515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4515<K, Paths4515<T[K], Prev4515[D]>> : never }[keyof T]
  : never;

type Prev4515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4515 {
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

type ConfigPaths4515 = Paths4515<NestedConfig4515>;

interface HeavyProps4515 {
  config: DeepPartial4515<NestedConfig4515>;
  path?: ConfigPaths4515;
}

const HeavyComponent4515 = memo(function HeavyComponent4515({ config }: HeavyProps4515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4515.displayName = 'HeavyComponent4515';
export default HeavyComponent4515;
