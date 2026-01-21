'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4458<T> = T extends (infer U)[]
  ? DeepReadonlyArray4458<U>
  : T extends object
  ? DeepReadonlyObject4458<T>
  : T;

interface DeepReadonlyArray4458<T> extends ReadonlyArray<DeepReadonly4458<T>> {}

type DeepReadonlyObject4458<T> = {
  readonly [P in keyof T]: DeepReadonly4458<T[P]>;
};

type UnionToIntersection4458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4458<T> = UnionToIntersection4458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4458<T extends unknown[], V> = [...T, V];

type TuplifyUnion4458<T, L = LastOf4458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4458<TuplifyUnion4458<Exclude<T, L>>, L>;

type DeepPartial4458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4458<T[P]> }
  : T;

type Paths4458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4458<K, Paths4458<T[K], Prev4458[D]>> : never }[keyof T]
  : never;

type Prev4458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4458 {
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

type ConfigPaths4458 = Paths4458<NestedConfig4458>;

interface HeavyProps4458 {
  config: DeepPartial4458<NestedConfig4458>;
  path?: ConfigPaths4458;
}

const HeavyComponent4458 = memo(function HeavyComponent4458({ config }: HeavyProps4458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4458.displayName = 'HeavyComponent4458';
export default HeavyComponent4458;
