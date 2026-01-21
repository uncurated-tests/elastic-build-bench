'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14775<T> = T extends (infer U)[]
  ? DeepReadonlyArray14775<U>
  : T extends object
  ? DeepReadonlyObject14775<T>
  : T;

interface DeepReadonlyArray14775<T> extends ReadonlyArray<DeepReadonly14775<T>> {}

type DeepReadonlyObject14775<T> = {
  readonly [P in keyof T]: DeepReadonly14775<T[P]>;
};

type UnionToIntersection14775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14775<T> = UnionToIntersection14775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14775<T extends unknown[], V> = [...T, V];

type TuplifyUnion14775<T, L = LastOf14775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14775<TuplifyUnion14775<Exclude<T, L>>, L>;

type DeepPartial14775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14775<T[P]> }
  : T;

type Paths14775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14775<K, Paths14775<T[K], Prev14775[D]>> : never }[keyof T]
  : never;

type Prev14775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14775 {
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

type ConfigPaths14775 = Paths14775<NestedConfig14775>;

interface HeavyProps14775 {
  config: DeepPartial14775<NestedConfig14775>;
  path?: ConfigPaths14775;
}

const HeavyComponent14775 = memo(function HeavyComponent14775({ config }: HeavyProps14775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14775.displayName = 'HeavyComponent14775';
export default HeavyComponent14775;
