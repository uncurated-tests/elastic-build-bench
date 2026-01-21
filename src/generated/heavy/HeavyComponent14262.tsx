'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14262<T> = T extends (infer U)[]
  ? DeepReadonlyArray14262<U>
  : T extends object
  ? DeepReadonlyObject14262<T>
  : T;

interface DeepReadonlyArray14262<T> extends ReadonlyArray<DeepReadonly14262<T>> {}

type DeepReadonlyObject14262<T> = {
  readonly [P in keyof T]: DeepReadonly14262<T[P]>;
};

type UnionToIntersection14262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14262<T> = UnionToIntersection14262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14262<T extends unknown[], V> = [...T, V];

type TuplifyUnion14262<T, L = LastOf14262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14262<TuplifyUnion14262<Exclude<T, L>>, L>;

type DeepPartial14262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14262<T[P]> }
  : T;

type Paths14262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14262<K, Paths14262<T[K], Prev14262[D]>> : never }[keyof T]
  : never;

type Prev14262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14262 {
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

type ConfigPaths14262 = Paths14262<NestedConfig14262>;

interface HeavyProps14262 {
  config: DeepPartial14262<NestedConfig14262>;
  path?: ConfigPaths14262;
}

const HeavyComponent14262 = memo(function HeavyComponent14262({ config }: HeavyProps14262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14262.displayName = 'HeavyComponent14262';
export default HeavyComponent14262;
