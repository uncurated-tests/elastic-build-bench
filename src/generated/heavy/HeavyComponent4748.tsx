'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4748<T> = T extends (infer U)[]
  ? DeepReadonlyArray4748<U>
  : T extends object
  ? DeepReadonlyObject4748<T>
  : T;

interface DeepReadonlyArray4748<T> extends ReadonlyArray<DeepReadonly4748<T>> {}

type DeepReadonlyObject4748<T> = {
  readonly [P in keyof T]: DeepReadonly4748<T[P]>;
};

type UnionToIntersection4748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4748<T> = UnionToIntersection4748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4748<T extends unknown[], V> = [...T, V];

type TuplifyUnion4748<T, L = LastOf4748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4748<TuplifyUnion4748<Exclude<T, L>>, L>;

type DeepPartial4748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4748<T[P]> }
  : T;

type Paths4748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4748<K, Paths4748<T[K], Prev4748[D]>> : never }[keyof T]
  : never;

type Prev4748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4748 {
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

type ConfigPaths4748 = Paths4748<NestedConfig4748>;

interface HeavyProps4748 {
  config: DeepPartial4748<NestedConfig4748>;
  path?: ConfigPaths4748;
}

const HeavyComponent4748 = memo(function HeavyComponent4748({ config }: HeavyProps4748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4748.displayName = 'HeavyComponent4748';
export default HeavyComponent4748;
