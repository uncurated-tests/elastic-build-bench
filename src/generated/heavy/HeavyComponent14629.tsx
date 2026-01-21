'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14629<T> = T extends (infer U)[]
  ? DeepReadonlyArray14629<U>
  : T extends object
  ? DeepReadonlyObject14629<T>
  : T;

interface DeepReadonlyArray14629<T> extends ReadonlyArray<DeepReadonly14629<T>> {}

type DeepReadonlyObject14629<T> = {
  readonly [P in keyof T]: DeepReadonly14629<T[P]>;
};

type UnionToIntersection14629<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14629<T> = UnionToIntersection14629<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14629<T extends unknown[], V> = [...T, V];

type TuplifyUnion14629<T, L = LastOf14629<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14629<TuplifyUnion14629<Exclude<T, L>>, L>;

type DeepPartial14629<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14629<T[P]> }
  : T;

type Paths14629<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14629<K, Paths14629<T[K], Prev14629[D]>> : never }[keyof T]
  : never;

type Prev14629 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14629<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14629 {
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

type ConfigPaths14629 = Paths14629<NestedConfig14629>;

interface HeavyProps14629 {
  config: DeepPartial14629<NestedConfig14629>;
  path?: ConfigPaths14629;
}

const HeavyComponent14629 = memo(function HeavyComponent14629({ config }: HeavyProps14629) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14629) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14629 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14629: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14629.displayName = 'HeavyComponent14629';
export default HeavyComponent14629;
