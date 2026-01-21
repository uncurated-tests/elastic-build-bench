'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4227<T> = T extends (infer U)[]
  ? DeepReadonlyArray4227<U>
  : T extends object
  ? DeepReadonlyObject4227<T>
  : T;

interface DeepReadonlyArray4227<T> extends ReadonlyArray<DeepReadonly4227<T>> {}

type DeepReadonlyObject4227<T> = {
  readonly [P in keyof T]: DeepReadonly4227<T[P]>;
};

type UnionToIntersection4227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4227<T> = UnionToIntersection4227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4227<T extends unknown[], V> = [...T, V];

type TuplifyUnion4227<T, L = LastOf4227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4227<TuplifyUnion4227<Exclude<T, L>>, L>;

type DeepPartial4227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4227<T[P]> }
  : T;

type Paths4227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4227<K, Paths4227<T[K], Prev4227[D]>> : never }[keyof T]
  : never;

type Prev4227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4227 {
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

type ConfigPaths4227 = Paths4227<NestedConfig4227>;

interface HeavyProps4227 {
  config: DeepPartial4227<NestedConfig4227>;
  path?: ConfigPaths4227;
}

const HeavyComponent4227 = memo(function HeavyComponent4227({ config }: HeavyProps4227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4227.displayName = 'HeavyComponent4227';
export default HeavyComponent4227;
