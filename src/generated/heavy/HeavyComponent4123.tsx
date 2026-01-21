'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4123<T> = T extends (infer U)[]
  ? DeepReadonlyArray4123<U>
  : T extends object
  ? DeepReadonlyObject4123<T>
  : T;

interface DeepReadonlyArray4123<T> extends ReadonlyArray<DeepReadonly4123<T>> {}

type DeepReadonlyObject4123<T> = {
  readonly [P in keyof T]: DeepReadonly4123<T[P]>;
};

type UnionToIntersection4123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4123<T> = UnionToIntersection4123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4123<T extends unknown[], V> = [...T, V];

type TuplifyUnion4123<T, L = LastOf4123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4123<TuplifyUnion4123<Exclude<T, L>>, L>;

type DeepPartial4123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4123<T[P]> }
  : T;

type Paths4123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4123<K, Paths4123<T[K], Prev4123[D]>> : never }[keyof T]
  : never;

type Prev4123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4123 {
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

type ConfigPaths4123 = Paths4123<NestedConfig4123>;

interface HeavyProps4123 {
  config: DeepPartial4123<NestedConfig4123>;
  path?: ConfigPaths4123;
}

const HeavyComponent4123 = memo(function HeavyComponent4123({ config }: HeavyProps4123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4123.displayName = 'HeavyComponent4123';
export default HeavyComponent4123;
