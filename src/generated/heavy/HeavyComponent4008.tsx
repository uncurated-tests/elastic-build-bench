'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4008<T> = T extends (infer U)[]
  ? DeepReadonlyArray4008<U>
  : T extends object
  ? DeepReadonlyObject4008<T>
  : T;

interface DeepReadonlyArray4008<T> extends ReadonlyArray<DeepReadonly4008<T>> {}

type DeepReadonlyObject4008<T> = {
  readonly [P in keyof T]: DeepReadonly4008<T[P]>;
};

type UnionToIntersection4008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4008<T> = UnionToIntersection4008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4008<T extends unknown[], V> = [...T, V];

type TuplifyUnion4008<T, L = LastOf4008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4008<TuplifyUnion4008<Exclude<T, L>>, L>;

type DeepPartial4008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4008<T[P]> }
  : T;

type Paths4008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4008<K, Paths4008<T[K], Prev4008[D]>> : never }[keyof T]
  : never;

type Prev4008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4008 {
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

type ConfigPaths4008 = Paths4008<NestedConfig4008>;

interface HeavyProps4008 {
  config: DeepPartial4008<NestedConfig4008>;
  path?: ConfigPaths4008;
}

const HeavyComponent4008 = memo(function HeavyComponent4008({ config }: HeavyProps4008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4008.displayName = 'HeavyComponent4008';
export default HeavyComponent4008;
