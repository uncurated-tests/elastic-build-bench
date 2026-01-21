'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4195<T> = T extends (infer U)[]
  ? DeepReadonlyArray4195<U>
  : T extends object
  ? DeepReadonlyObject4195<T>
  : T;

interface DeepReadonlyArray4195<T> extends ReadonlyArray<DeepReadonly4195<T>> {}

type DeepReadonlyObject4195<T> = {
  readonly [P in keyof T]: DeepReadonly4195<T[P]>;
};

type UnionToIntersection4195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4195<T> = UnionToIntersection4195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4195<T extends unknown[], V> = [...T, V];

type TuplifyUnion4195<T, L = LastOf4195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4195<TuplifyUnion4195<Exclude<T, L>>, L>;

type DeepPartial4195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4195<T[P]> }
  : T;

type Paths4195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4195<K, Paths4195<T[K], Prev4195[D]>> : never }[keyof T]
  : never;

type Prev4195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4195 {
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

type ConfigPaths4195 = Paths4195<NestedConfig4195>;

interface HeavyProps4195 {
  config: DeepPartial4195<NestedConfig4195>;
  path?: ConfigPaths4195;
}

const HeavyComponent4195 = memo(function HeavyComponent4195({ config }: HeavyProps4195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4195.displayName = 'HeavyComponent4195';
export default HeavyComponent4195;
