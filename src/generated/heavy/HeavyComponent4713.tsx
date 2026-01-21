'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4713<T> = T extends (infer U)[]
  ? DeepReadonlyArray4713<U>
  : T extends object
  ? DeepReadonlyObject4713<T>
  : T;

interface DeepReadonlyArray4713<T> extends ReadonlyArray<DeepReadonly4713<T>> {}

type DeepReadonlyObject4713<T> = {
  readonly [P in keyof T]: DeepReadonly4713<T[P]>;
};

type UnionToIntersection4713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4713<T> = UnionToIntersection4713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4713<T extends unknown[], V> = [...T, V];

type TuplifyUnion4713<T, L = LastOf4713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4713<TuplifyUnion4713<Exclude<T, L>>, L>;

type DeepPartial4713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4713<T[P]> }
  : T;

type Paths4713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4713<K, Paths4713<T[K], Prev4713[D]>> : never }[keyof T]
  : never;

type Prev4713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4713 {
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

type ConfigPaths4713 = Paths4713<NestedConfig4713>;

interface HeavyProps4713 {
  config: DeepPartial4713<NestedConfig4713>;
  path?: ConfigPaths4713;
}

const HeavyComponent4713 = memo(function HeavyComponent4713({ config }: HeavyProps4713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4713.displayName = 'HeavyComponent4713';
export default HeavyComponent4713;
