'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14170<T> = T extends (infer U)[]
  ? DeepReadonlyArray14170<U>
  : T extends object
  ? DeepReadonlyObject14170<T>
  : T;

interface DeepReadonlyArray14170<T> extends ReadonlyArray<DeepReadonly14170<T>> {}

type DeepReadonlyObject14170<T> = {
  readonly [P in keyof T]: DeepReadonly14170<T[P]>;
};

type UnionToIntersection14170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14170<T> = UnionToIntersection14170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14170<T extends unknown[], V> = [...T, V];

type TuplifyUnion14170<T, L = LastOf14170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14170<TuplifyUnion14170<Exclude<T, L>>, L>;

type DeepPartial14170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14170<T[P]> }
  : T;

type Paths14170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14170<K, Paths14170<T[K], Prev14170[D]>> : never }[keyof T]
  : never;

type Prev14170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14170 {
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

type ConfigPaths14170 = Paths14170<NestedConfig14170>;

interface HeavyProps14170 {
  config: DeepPartial14170<NestedConfig14170>;
  path?: ConfigPaths14170;
}

const HeavyComponent14170 = memo(function HeavyComponent14170({ config }: HeavyProps14170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14170.displayName = 'HeavyComponent14170';
export default HeavyComponent14170;
