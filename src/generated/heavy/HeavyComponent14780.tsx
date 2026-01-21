'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14780<T> = T extends (infer U)[]
  ? DeepReadonlyArray14780<U>
  : T extends object
  ? DeepReadonlyObject14780<T>
  : T;

interface DeepReadonlyArray14780<T> extends ReadonlyArray<DeepReadonly14780<T>> {}

type DeepReadonlyObject14780<T> = {
  readonly [P in keyof T]: DeepReadonly14780<T[P]>;
};

type UnionToIntersection14780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14780<T> = UnionToIntersection14780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14780<T extends unknown[], V> = [...T, V];

type TuplifyUnion14780<T, L = LastOf14780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14780<TuplifyUnion14780<Exclude<T, L>>, L>;

type DeepPartial14780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14780<T[P]> }
  : T;

type Paths14780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14780<K, Paths14780<T[K], Prev14780[D]>> : never }[keyof T]
  : never;

type Prev14780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14780 {
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

type ConfigPaths14780 = Paths14780<NestedConfig14780>;

interface HeavyProps14780 {
  config: DeepPartial14780<NestedConfig14780>;
  path?: ConfigPaths14780;
}

const HeavyComponent14780 = memo(function HeavyComponent14780({ config }: HeavyProps14780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14780.displayName = 'HeavyComponent14780';
export default HeavyComponent14780;
