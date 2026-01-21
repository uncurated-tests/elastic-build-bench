'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14466<T> = T extends (infer U)[]
  ? DeepReadonlyArray14466<U>
  : T extends object
  ? DeepReadonlyObject14466<T>
  : T;

interface DeepReadonlyArray14466<T> extends ReadonlyArray<DeepReadonly14466<T>> {}

type DeepReadonlyObject14466<T> = {
  readonly [P in keyof T]: DeepReadonly14466<T[P]>;
};

type UnionToIntersection14466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14466<T> = UnionToIntersection14466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14466<T extends unknown[], V> = [...T, V];

type TuplifyUnion14466<T, L = LastOf14466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14466<TuplifyUnion14466<Exclude<T, L>>, L>;

type DeepPartial14466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14466<T[P]> }
  : T;

type Paths14466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14466<K, Paths14466<T[K], Prev14466[D]>> : never }[keyof T]
  : never;

type Prev14466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14466 {
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

type ConfigPaths14466 = Paths14466<NestedConfig14466>;

interface HeavyProps14466 {
  config: DeepPartial14466<NestedConfig14466>;
  path?: ConfigPaths14466;
}

const HeavyComponent14466 = memo(function HeavyComponent14466({ config }: HeavyProps14466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14466.displayName = 'HeavyComponent14466';
export default HeavyComponent14466;
