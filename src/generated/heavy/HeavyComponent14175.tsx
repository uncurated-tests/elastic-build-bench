'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14175<T> = T extends (infer U)[]
  ? DeepReadonlyArray14175<U>
  : T extends object
  ? DeepReadonlyObject14175<T>
  : T;

interface DeepReadonlyArray14175<T> extends ReadonlyArray<DeepReadonly14175<T>> {}

type DeepReadonlyObject14175<T> = {
  readonly [P in keyof T]: DeepReadonly14175<T[P]>;
};

type UnionToIntersection14175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14175<T> = UnionToIntersection14175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14175<T extends unknown[], V> = [...T, V];

type TuplifyUnion14175<T, L = LastOf14175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14175<TuplifyUnion14175<Exclude<T, L>>, L>;

type DeepPartial14175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14175<T[P]> }
  : T;

type Paths14175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14175<K, Paths14175<T[K], Prev14175[D]>> : never }[keyof T]
  : never;

type Prev14175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14175 {
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

type ConfigPaths14175 = Paths14175<NestedConfig14175>;

interface HeavyProps14175 {
  config: DeepPartial14175<NestedConfig14175>;
  path?: ConfigPaths14175;
}

const HeavyComponent14175 = memo(function HeavyComponent14175({ config }: HeavyProps14175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14175.displayName = 'HeavyComponent14175';
export default HeavyComponent14175;
