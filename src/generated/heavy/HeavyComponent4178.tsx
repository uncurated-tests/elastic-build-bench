'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4178<T> = T extends (infer U)[]
  ? DeepReadonlyArray4178<U>
  : T extends object
  ? DeepReadonlyObject4178<T>
  : T;

interface DeepReadonlyArray4178<T> extends ReadonlyArray<DeepReadonly4178<T>> {}

type DeepReadonlyObject4178<T> = {
  readonly [P in keyof T]: DeepReadonly4178<T[P]>;
};

type UnionToIntersection4178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4178<T> = UnionToIntersection4178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4178<T extends unknown[], V> = [...T, V];

type TuplifyUnion4178<T, L = LastOf4178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4178<TuplifyUnion4178<Exclude<T, L>>, L>;

type DeepPartial4178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4178<T[P]> }
  : T;

type Paths4178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4178<K, Paths4178<T[K], Prev4178[D]>> : never }[keyof T]
  : never;

type Prev4178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4178 {
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

type ConfigPaths4178 = Paths4178<NestedConfig4178>;

interface HeavyProps4178 {
  config: DeepPartial4178<NestedConfig4178>;
  path?: ConfigPaths4178;
}

const HeavyComponent4178 = memo(function HeavyComponent4178({ config }: HeavyProps4178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4178.displayName = 'HeavyComponent4178';
export default HeavyComponent4178;
