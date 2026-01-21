'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14960<T> = T extends (infer U)[]
  ? DeepReadonlyArray14960<U>
  : T extends object
  ? DeepReadonlyObject14960<T>
  : T;

interface DeepReadonlyArray14960<T> extends ReadonlyArray<DeepReadonly14960<T>> {}

type DeepReadonlyObject14960<T> = {
  readonly [P in keyof T]: DeepReadonly14960<T[P]>;
};

type UnionToIntersection14960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14960<T> = UnionToIntersection14960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14960<T extends unknown[], V> = [...T, V];

type TuplifyUnion14960<T, L = LastOf14960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14960<TuplifyUnion14960<Exclude<T, L>>, L>;

type DeepPartial14960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14960<T[P]> }
  : T;

type Paths14960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14960<K, Paths14960<T[K], Prev14960[D]>> : never }[keyof T]
  : never;

type Prev14960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14960 {
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

type ConfigPaths14960 = Paths14960<NestedConfig14960>;

interface HeavyProps14960 {
  config: DeepPartial14960<NestedConfig14960>;
  path?: ConfigPaths14960;
}

const HeavyComponent14960 = memo(function HeavyComponent14960({ config }: HeavyProps14960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14960.displayName = 'HeavyComponent14960';
export default HeavyComponent14960;
