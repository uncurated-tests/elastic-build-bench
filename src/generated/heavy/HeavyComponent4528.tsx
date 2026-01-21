'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4528<T> = T extends (infer U)[]
  ? DeepReadonlyArray4528<U>
  : T extends object
  ? DeepReadonlyObject4528<T>
  : T;

interface DeepReadonlyArray4528<T> extends ReadonlyArray<DeepReadonly4528<T>> {}

type DeepReadonlyObject4528<T> = {
  readonly [P in keyof T]: DeepReadonly4528<T[P]>;
};

type UnionToIntersection4528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4528<T> = UnionToIntersection4528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4528<T extends unknown[], V> = [...T, V];

type TuplifyUnion4528<T, L = LastOf4528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4528<TuplifyUnion4528<Exclude<T, L>>, L>;

type DeepPartial4528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4528<T[P]> }
  : T;

type Paths4528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4528<K, Paths4528<T[K], Prev4528[D]>> : never }[keyof T]
  : never;

type Prev4528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4528 {
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

type ConfigPaths4528 = Paths4528<NestedConfig4528>;

interface HeavyProps4528 {
  config: DeepPartial4528<NestedConfig4528>;
  path?: ConfigPaths4528;
}

const HeavyComponent4528 = memo(function HeavyComponent4528({ config }: HeavyProps4528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4528.displayName = 'HeavyComponent4528';
export default HeavyComponent4528;
