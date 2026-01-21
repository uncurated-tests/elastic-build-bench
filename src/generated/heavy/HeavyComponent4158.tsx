'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4158<T> = T extends (infer U)[]
  ? DeepReadonlyArray4158<U>
  : T extends object
  ? DeepReadonlyObject4158<T>
  : T;

interface DeepReadonlyArray4158<T> extends ReadonlyArray<DeepReadonly4158<T>> {}

type DeepReadonlyObject4158<T> = {
  readonly [P in keyof T]: DeepReadonly4158<T[P]>;
};

type UnionToIntersection4158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4158<T> = UnionToIntersection4158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4158<T extends unknown[], V> = [...T, V];

type TuplifyUnion4158<T, L = LastOf4158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4158<TuplifyUnion4158<Exclude<T, L>>, L>;

type DeepPartial4158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4158<T[P]> }
  : T;

type Paths4158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4158<K, Paths4158<T[K], Prev4158[D]>> : never }[keyof T]
  : never;

type Prev4158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4158 {
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

type ConfigPaths4158 = Paths4158<NestedConfig4158>;

interface HeavyProps4158 {
  config: DeepPartial4158<NestedConfig4158>;
  path?: ConfigPaths4158;
}

const HeavyComponent4158 = memo(function HeavyComponent4158({ config }: HeavyProps4158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4158.displayName = 'HeavyComponent4158';
export default HeavyComponent4158;
