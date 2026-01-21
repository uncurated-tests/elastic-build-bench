'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14873<T> = T extends (infer U)[]
  ? DeepReadonlyArray14873<U>
  : T extends object
  ? DeepReadonlyObject14873<T>
  : T;

interface DeepReadonlyArray14873<T> extends ReadonlyArray<DeepReadonly14873<T>> {}

type DeepReadonlyObject14873<T> = {
  readonly [P in keyof T]: DeepReadonly14873<T[P]>;
};

type UnionToIntersection14873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14873<T> = UnionToIntersection14873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14873<T extends unknown[], V> = [...T, V];

type TuplifyUnion14873<T, L = LastOf14873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14873<TuplifyUnion14873<Exclude<T, L>>, L>;

type DeepPartial14873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14873<T[P]> }
  : T;

type Paths14873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14873<K, Paths14873<T[K], Prev14873[D]>> : never }[keyof T]
  : never;

type Prev14873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14873 {
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

type ConfigPaths14873 = Paths14873<NestedConfig14873>;

interface HeavyProps14873 {
  config: DeepPartial14873<NestedConfig14873>;
  path?: ConfigPaths14873;
}

const HeavyComponent14873 = memo(function HeavyComponent14873({ config }: HeavyProps14873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14873.displayName = 'HeavyComponent14873';
export default HeavyComponent14873;
