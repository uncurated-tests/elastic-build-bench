'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14907<T> = T extends (infer U)[]
  ? DeepReadonlyArray14907<U>
  : T extends object
  ? DeepReadonlyObject14907<T>
  : T;

interface DeepReadonlyArray14907<T> extends ReadonlyArray<DeepReadonly14907<T>> {}

type DeepReadonlyObject14907<T> = {
  readonly [P in keyof T]: DeepReadonly14907<T[P]>;
};

type UnionToIntersection14907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14907<T> = UnionToIntersection14907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14907<T extends unknown[], V> = [...T, V];

type TuplifyUnion14907<T, L = LastOf14907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14907<TuplifyUnion14907<Exclude<T, L>>, L>;

type DeepPartial14907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14907<T[P]> }
  : T;

type Paths14907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14907<K, Paths14907<T[K], Prev14907[D]>> : never }[keyof T]
  : never;

type Prev14907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14907 {
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

type ConfigPaths14907 = Paths14907<NestedConfig14907>;

interface HeavyProps14907 {
  config: DeepPartial14907<NestedConfig14907>;
  path?: ConfigPaths14907;
}

const HeavyComponent14907 = memo(function HeavyComponent14907({ config }: HeavyProps14907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14907.displayName = 'HeavyComponent14907';
export default HeavyComponent14907;
