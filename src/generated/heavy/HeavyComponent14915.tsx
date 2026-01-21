'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14915<T> = T extends (infer U)[]
  ? DeepReadonlyArray14915<U>
  : T extends object
  ? DeepReadonlyObject14915<T>
  : T;

interface DeepReadonlyArray14915<T> extends ReadonlyArray<DeepReadonly14915<T>> {}

type DeepReadonlyObject14915<T> = {
  readonly [P in keyof T]: DeepReadonly14915<T[P]>;
};

type UnionToIntersection14915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14915<T> = UnionToIntersection14915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14915<T extends unknown[], V> = [...T, V];

type TuplifyUnion14915<T, L = LastOf14915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14915<TuplifyUnion14915<Exclude<T, L>>, L>;

type DeepPartial14915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14915<T[P]> }
  : T;

type Paths14915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14915<K, Paths14915<T[K], Prev14915[D]>> : never }[keyof T]
  : never;

type Prev14915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14915 {
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

type ConfigPaths14915 = Paths14915<NestedConfig14915>;

interface HeavyProps14915 {
  config: DeepPartial14915<NestedConfig14915>;
  path?: ConfigPaths14915;
}

const HeavyComponent14915 = memo(function HeavyComponent14915({ config }: HeavyProps14915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14915.displayName = 'HeavyComponent14915';
export default HeavyComponent14915;
