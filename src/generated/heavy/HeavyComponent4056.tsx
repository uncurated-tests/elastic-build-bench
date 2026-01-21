'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4056<T> = T extends (infer U)[]
  ? DeepReadonlyArray4056<U>
  : T extends object
  ? DeepReadonlyObject4056<T>
  : T;

interface DeepReadonlyArray4056<T> extends ReadonlyArray<DeepReadonly4056<T>> {}

type DeepReadonlyObject4056<T> = {
  readonly [P in keyof T]: DeepReadonly4056<T[P]>;
};

type UnionToIntersection4056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4056<T> = UnionToIntersection4056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4056<T extends unknown[], V> = [...T, V];

type TuplifyUnion4056<T, L = LastOf4056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4056<TuplifyUnion4056<Exclude<T, L>>, L>;

type DeepPartial4056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4056<T[P]> }
  : T;

type Paths4056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4056<K, Paths4056<T[K], Prev4056[D]>> : never }[keyof T]
  : never;

type Prev4056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4056 {
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

type ConfigPaths4056 = Paths4056<NestedConfig4056>;

interface HeavyProps4056 {
  config: DeepPartial4056<NestedConfig4056>;
  path?: ConfigPaths4056;
}

const HeavyComponent4056 = memo(function HeavyComponent4056({ config }: HeavyProps4056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4056.displayName = 'HeavyComponent4056';
export default HeavyComponent4056;
