'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14730<T> = T extends (infer U)[]
  ? DeepReadonlyArray14730<U>
  : T extends object
  ? DeepReadonlyObject14730<T>
  : T;

interface DeepReadonlyArray14730<T> extends ReadonlyArray<DeepReadonly14730<T>> {}

type DeepReadonlyObject14730<T> = {
  readonly [P in keyof T]: DeepReadonly14730<T[P]>;
};

type UnionToIntersection14730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14730<T> = UnionToIntersection14730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14730<T extends unknown[], V> = [...T, V];

type TuplifyUnion14730<T, L = LastOf14730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14730<TuplifyUnion14730<Exclude<T, L>>, L>;

type DeepPartial14730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14730<T[P]> }
  : T;

type Paths14730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14730<K, Paths14730<T[K], Prev14730[D]>> : never }[keyof T]
  : never;

type Prev14730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14730 {
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

type ConfigPaths14730 = Paths14730<NestedConfig14730>;

interface HeavyProps14730 {
  config: DeepPartial14730<NestedConfig14730>;
  path?: ConfigPaths14730;
}

const HeavyComponent14730 = memo(function HeavyComponent14730({ config }: HeavyProps14730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14730.displayName = 'HeavyComponent14730';
export default HeavyComponent14730;
