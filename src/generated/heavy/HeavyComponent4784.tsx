'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4784<T> = T extends (infer U)[]
  ? DeepReadonlyArray4784<U>
  : T extends object
  ? DeepReadonlyObject4784<T>
  : T;

interface DeepReadonlyArray4784<T> extends ReadonlyArray<DeepReadonly4784<T>> {}

type DeepReadonlyObject4784<T> = {
  readonly [P in keyof T]: DeepReadonly4784<T[P]>;
};

type UnionToIntersection4784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4784<T> = UnionToIntersection4784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4784<T extends unknown[], V> = [...T, V];

type TuplifyUnion4784<T, L = LastOf4784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4784<TuplifyUnion4784<Exclude<T, L>>, L>;

type DeepPartial4784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4784<T[P]> }
  : T;

type Paths4784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4784<K, Paths4784<T[K], Prev4784[D]>> : never }[keyof T]
  : never;

type Prev4784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4784 {
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

type ConfigPaths4784 = Paths4784<NestedConfig4784>;

interface HeavyProps4784 {
  config: DeepPartial4784<NestedConfig4784>;
  path?: ConfigPaths4784;
}

const HeavyComponent4784 = memo(function HeavyComponent4784({ config }: HeavyProps4784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4784.displayName = 'HeavyComponent4784';
export default HeavyComponent4784;
