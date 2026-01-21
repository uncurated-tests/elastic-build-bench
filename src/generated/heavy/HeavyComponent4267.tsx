'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4267<T> = T extends (infer U)[]
  ? DeepReadonlyArray4267<U>
  : T extends object
  ? DeepReadonlyObject4267<T>
  : T;

interface DeepReadonlyArray4267<T> extends ReadonlyArray<DeepReadonly4267<T>> {}

type DeepReadonlyObject4267<T> = {
  readonly [P in keyof T]: DeepReadonly4267<T[P]>;
};

type UnionToIntersection4267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4267<T> = UnionToIntersection4267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4267<T extends unknown[], V> = [...T, V];

type TuplifyUnion4267<T, L = LastOf4267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4267<TuplifyUnion4267<Exclude<T, L>>, L>;

type DeepPartial4267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4267<T[P]> }
  : T;

type Paths4267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4267<K, Paths4267<T[K], Prev4267[D]>> : never }[keyof T]
  : never;

type Prev4267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4267 {
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

type ConfigPaths4267 = Paths4267<NestedConfig4267>;

interface HeavyProps4267 {
  config: DeepPartial4267<NestedConfig4267>;
  path?: ConfigPaths4267;
}

const HeavyComponent4267 = memo(function HeavyComponent4267({ config }: HeavyProps4267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4267.displayName = 'HeavyComponent4267';
export default HeavyComponent4267;
