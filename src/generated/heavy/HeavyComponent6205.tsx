'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6205<T> = T extends (infer U)[]
  ? DeepReadonlyArray6205<U>
  : T extends object
  ? DeepReadonlyObject6205<T>
  : T;

interface DeepReadonlyArray6205<T> extends ReadonlyArray<DeepReadonly6205<T>> {}

type DeepReadonlyObject6205<T> = {
  readonly [P in keyof T]: DeepReadonly6205<T[P]>;
};

type UnionToIntersection6205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6205<T> = UnionToIntersection6205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6205<T extends unknown[], V> = [...T, V];

type TuplifyUnion6205<T, L = LastOf6205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6205<TuplifyUnion6205<Exclude<T, L>>, L>;

type DeepPartial6205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6205<T[P]> }
  : T;

type Paths6205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6205<K, Paths6205<T[K], Prev6205[D]>> : never }[keyof T]
  : never;

type Prev6205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6205 {
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

type ConfigPaths6205 = Paths6205<NestedConfig6205>;

interface HeavyProps6205 {
  config: DeepPartial6205<NestedConfig6205>;
  path?: ConfigPaths6205;
}

const HeavyComponent6205 = memo(function HeavyComponent6205({ config }: HeavyProps6205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6205.displayName = 'HeavyComponent6205';
export default HeavyComponent6205;
