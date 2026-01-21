'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly415<T> = T extends (infer U)[]
  ? DeepReadonlyArray415<U>
  : T extends object
  ? DeepReadonlyObject415<T>
  : T;

interface DeepReadonlyArray415<T> extends ReadonlyArray<DeepReadonly415<T>> {}

type DeepReadonlyObject415<T> = {
  readonly [P in keyof T]: DeepReadonly415<T[P]>;
};

type UnionToIntersection415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf415<T> = UnionToIntersection415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push415<T extends unknown[], V> = [...T, V];

type TuplifyUnion415<T, L = LastOf415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push415<TuplifyUnion415<Exclude<T, L>>, L>;

type DeepPartial415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial415<T[P]> }
  : T;

type Paths415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join415<K, Paths415<T[K], Prev415[D]>> : never }[keyof T]
  : never;

type Prev415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig415 {
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

type ConfigPaths415 = Paths415<NestedConfig415>;

interface HeavyProps415 {
  config: DeepPartial415<NestedConfig415>;
  path?: ConfigPaths415;
}

const HeavyComponent415 = memo(function HeavyComponent415({ config }: HeavyProps415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent415.displayName = 'HeavyComponent415';
export default HeavyComponent415;
